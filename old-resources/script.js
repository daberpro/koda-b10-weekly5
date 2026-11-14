const SVGTAGS = new Set(["svg", "path", "g", "defs", "clipPath", "rect"]);

/**
 * @typedef {Object} RegisterField
 *
 * @property {string} fullname
 * @property {string} email
 * @property {string} phone
 * @property {string} nik
 * @property {string} password
 */

const globalTempStorage = new Map();

const storageKeys = {
    CREDENTIAL: "credential",
    PROFILE: "profile",
    REPORTS: "reports",
    ID: "user-id"
};

/**
 *
 * @param {string} storageKey
 * @returns {Object|Array}
 */
function getData(storageKey) {
    try {
        let credential = JSON.parse(localStorage.getItem(storageKey));
        return credential;
    } catch {
        return undefined;
    }
}

/**
 *
 * @param {string} storageKey
 * @param {string} data
 */
function saveData(storageKey, data) {
    localStorage.setItem(storageKey, data);
}

function removeData(storageKey){
    localStorage.removeItem(storageKey);
}

/**
 *
 * @param {string} name
 * @param {Object} attr
 * @param {string} content
 * @returns {HTMLElement}
 */
function createElement(name, attr = {}, content = "", children = [], events = {}) {

    const el = SVGTAGS.has(name) ? document.createElementNS("http://www.w3.org/2000/svg", name) : document.createElement(name);
    for (let atr in attr) {
        el.setAttribute(atr, attr[atr]);
    }
    for (let e in events) {
        el.addEventListener(e, events[e]);
    }
    if (content) {
        el.textContent = content;
    }

    children.forEach((node) => {
        el.appendChild(node);
    });
    return el;
}

function svgIcon(viewBox, children = [], extraAttr = {}) {
    return createElement(
        "svg",
        { width: "1em", height: "1em", viewBox, fill: "none", ...extraAttr },
        "",
        children,
    );
}

function strokePath(d, strokeWidth) {
    return createElement("path", {
        d,
        "strokeWidth": strokeWidth,
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        stroke: "currentColor",
    });
}

/**
 *
 * @param {string} email
 * @param {string} password
 * @returns
 */
function validateUser(email, password) {
    const credential = getData(storageKeys.PROFILE);
    if (email === credential.email && password === credential.password) {
        return true;
    }
    return false;
}

/**
 *
 * @param {string} email
 */
function createUserCredential(password) {
    let restLength = 30 - password.length;
    if (restLength < 0) {
        restLength = 0;
    }
    const data = password + "#".repeat(restLength);
    return btoa(data.substring(0, 30));
}

/**
 *
 * @param {string} token
 * @returns {Boolean}
 */
function verifyUserCredential({token, inputMail}) {
    const decrypt = atob(token || getData(storageKeys.CREDENTIAL)?.token || "");
    const { email } = getData(storageKeys.ID) || { email: "" };
    const userProfile = getData(storageKeys.PROFILE);
    if ((email && userProfile) || (inputMail && userProfile)) {
        const { password, email: profileMail } = userProfile[email || inputMail];
        let restLength = 30 - password.length;
        if (restLength < 0) {
            restLength = 0;
        }
        const data = password + "#".repeat(restLength);
        return data === decrypt && (email === profileMail || inputMail === profileMail);
    }
    return false;
}

function signinUser(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const token = createUserCredential(formData.get("password"));

    if(!getData(storageKeys.CREDENTIAL)){
        removeData(storageKeys.ID);
    }

    if (verifyUserCredential({token, inputMail: formData.get("email")})) {
        saveData(storageKeys.CREDENTIAL, JSON.stringify({ token }));
        saveData(storageKeys.ID, JSON.stringify({ email: formData.get("email") }));
        e.currentTarget.closest(".container-modal").classList.toggle("flex");
        e.currentTarget.closest(".container-modal").classList.toggle("hidden");
        location.replace("citizen-account-flow-profile.html");
    }else{
        removeData(storageKeys.CREDENTIAL);
        alert("Password atau email salah");
    };

}

/**
 *
 * @param {SubmitEvent} e
 */
function registerUser(e) {
    e.preventDefault();
    const allUsers = getData(storageKeys.PROFILE) || {};
    const formData = new FormData(e.target);
    const userId = Date.now();
    const registerInfo = {
        id: userId,
        fullname: formData.get("fullname"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        nik: formData.get("nik"),
        password: formData.get("password"),
    };
    e.target.reset();
    saveData(storageKeys.ID, JSON.stringify({ email: registerInfo.email }));
    saveData(storageKeys.PROFILE, JSON.stringify({ ...allUsers, [registerInfo.email]: registerInfo }));
}

function renderUserData({
    fullnameSelectors = [""],
    emailSelectors = [""],
    phoneSelectors = [""],
    nikSelectors = [""],
    initialSelectors = [""]
}) {
    if (!verifyUserCredential({})) {
        return;
    }

    const { email: emailId } = getData(storageKeys.ID);
    const { [emailId]: { fullname, email, phone, nik } } = getData(storageKeys.PROFILE);

    const renderContentToTarget = (selectors, content) => {
        selectors.forEach((selector) => {
            const allTargets = [...(document.querySelectorAll(selector) || [])];
            allTargets.forEach((node) => {
                if (node instanceof HTMLInputElement) {
                    node.value = content;
                } else {
                    node.textContent = content;
                }
            });
        });
    }


    renderContentToTarget(fullnameSelectors, fullname);
    renderContentToTarget(emailSelectors, email);
    renderContentToTarget(phoneSelectors, phone);
    renderContentToTarget(nikSelectors, nik);
    renderContentToTarget(initialSelectors, fullname.split(" ").map(d => d[0]).join());

}

function UserDropdownSubmenu({ fullname = "", email = "" } = {}) {
    return createElement(
        "div",
        {
            class: "position-abs w-80 left-0 bg-brand-third border border-brand-default radius-1 h-fit nav-profile-submenu hidden gap-2 items-center justify-center flex-column",
        },
        "",
        [
            // Info user
            createElement(
                "div",
                { class: "w-full pad-1 flex items-start justify-between flex-column gap-2" },
                "",
                [
                    createElement("span", { class: "font-public-sans weight-600 font-size-1" }, fullname),
                    createElement("span", { class: "font-ibm-plex-mono weight-400 text-color-default" }, email),
                ],
            ),

            // My Filed Reports
            createElement(
                "div",
                { class: "w-full pad-1 items-center justify-center flex border-t border-t-brand-default" },
                "",
                [
                    createElement(
                        "button",
                        {
                            type: "button",
                            class: "border-0 font-size-1 bg-transparent font-public-sans w-full text-color-default outline-none flex items-center justify-start flex-row gap-2",
                        },
                        "",
                        [
                            svgIcon("0 0 12 12", [
                                createElement("g", { "clipPath": "url(#clip0_601_272)" }, "", [
                                    strokePath(
                                        "M10 10.5V9.5C10 8.96957 9.78929 8.46086 9.41421 8.08579C9.03914 7.71071 8.53043 7.5 8 7.5H4C3.46957 7.5 2.96086 7.71071 2.58579 8.08579C2.21071 8.46086 2 8.96957 2 9.5V10.5",
                                        "1",
                                    ),
                                    strokePath(
                                        "M8 3.5C8 4.60457 7.10457 5.5 6 5.5C4.89543 5.5 4 4.60457 4 3.5C4 2.39543 4.89543 1.5 6 1.5C7.10457 1.5 8 2.39543 8 3.5Z",
                                        "1",
                                    ),
                                ]),
                                createElement("defs", {}, "", [
                                    createElement("clipPath", { id: "clip0_601_272" }, "", [
                                        createElement("rect", { width: "12", height: "12", fill: "white" }),
                                    ]),
                                ]),
                            ]),
                            createElement("span", {}, "My Filed Reports"),
                        ],
                    ),
                ],
            ),

            // Sign Out
            createElement(
                "div",
                { class: "w-full pad-1 items-center justify-center flex border-t border-t-brand-default" },
                "",
                [
                    createElement(
                        "button",
                        {
                            type: "button",
                            class: "border-0 cursor-pointer font-size-1 bg-transparent font-public-sans w-full text-color-default outline-none flex items-center justify-start flex-row gap-2",
                        },
                        "",
                        [
                            svgIcon(
                                "0 0 12 12",
                                [
                                    createElement("g", { "clipPath": "url(#clip0_601_279)" }, "", [
                                        strokePath(
                                            "M4.5 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76522 1.5 9.5V2.5C1.5 2.23478 1.60536 1.98043 1.79289 1.79289C1.98043 1.60536 2.23478 1.5 2.5 1.5H4.5",
                                            "1",
                                        ),
                                        strokePath("M8 8.5L10.5 6L8 3.5", "1"),
                                        strokePath("M10.5 6H4.5", "1"),
                                    ]),
                                    createElement("defs", {}, "", [
                                        createElement("clipPath", { id: "clip0_601_279" }, "", [
                                            createElement("rect", { width: "12", height: "12", fill: "white" }),
                                        ]),
                                    ]),
                                ],
                                { class: "text-color-red" },
                            ),
                            createElement(
                                "span",
                                { class: "text-color-red font-public-sans weight-400" },
                                "Sign Out",
                            ),
                        ],
                        {
                            click: () => {
                                removeData(storageKeys.ID);
                                removeData(storageKeys.CREDENTIAL);
                                location.reload();
                            },
                        },
                    ),
                ],
            ),
        ],
    );
}

/**
 * @param {{ fullname: string, email: string }} user
 */
function UserDropdownMenuComponent({ fullname = "", email = "" } = {}) {
    const dropdownMenu = UserDropdownSubmenu({ fullname, email });
    return createElement(
        "div",
        {
            class: "border border-brand-default position-rel select-none bg-brand-third radius-2 pad-half flex items-center justify-center gap-4",
        },
        "",
        [
            // Avatar
            createElement(
                "div",
                {
                    class: "bg-brand-secondary font-public-sans weight-600 font-size-1 text-color-primary pad-half radius-2",
                },
                fullname
                    .split(" ")
                    .map((name) => name[0])
                    .join("")
                    .toUpperCase(),
            ),

            // Nama & role
            createElement(
                "div",
                { class: "flex items-start justify-center flex-column" },
                "",
                [
                    createElement("span", { class: "font-public-sans weight-600 font-size-1" }, fullname),
                    createElement("span", { class: "font-ibm-plex-mono text-color-primary" }, "Citizen"),
                ],
            ),

            // Chevron
            createElement(
                "div",
                { class: "flex items-center h-full justify-center flex-column" },
                "",
                [
                    svgIcon(
                        "0 0 12 12",
                        [
                            createElement("g", { "clipPath": "url(#clip0_214_711)" }, "", [
                                createElement("path", {
                                    d: "M3 4.5L6 7.5L9 4.5",
                                    "strokeLinecap": "round",
                                    "strokeLinejoin": "round",
                                    stroke: "#84928A",
                                }),
                            ]),
                            createElement("defs", {}, "", [
                                createElement("clipPath", { id: "clip0_214_711" }, "", [
                                    createElement("rect", { width: "12", height: "12", fill: "white" }),
                                ]),
                            ]),
                        ],
                        { class: "font-size-1fourth" },
                    ),
                ],
            ),

            // Submenu
            dropdownMenu
        ],
        {
            click() {
                dropdownMenu.classList.toggle("hidden");
                dropdownMenu.classList.toggle("flex");
            }
        }
    );
}

function FormSigninComponent() {
    return createElement(
        "form",
        {
            class: "w-full flex items-center justify-center flex-column gap-4",
            action: "",
        },
        "",
        [
            // Email
            createElement(
                "div",
                { class: "flex justify-start items-center flex-column gap-4 w-full" },
                "",
                [
                    createElement(
                        "label",
                        {
                            class: "font-ibm-plex-mono w-full text-color-default weight-400 text-upper font-size-1",
                            for: "email",
                        },
                        "Email Address",
                    ),
                    createElement(
                        "div",
                        {
                            class: "w-full flex items-center justify-between flex-row bg-brand-third border border-brand-default radius-1",
                        },
                        "",
                        [
                            svgIcon(
                                "0 0 14 14",
                                [
                                    strokePath(
                                        "M2.33333 2.33331H11.6667C12.311 2.33331 12.8333 2.85565 12.8333 3.49998V10.5C12.8333 11.1443 12.311 11.6666 11.6667 11.6666H2.33333C1.689 11.6666 1.16667 11.1443 1.16667 10.5V3.49998C1.16667 2.85565 1.689 2.33331 2.33333 2.33331Z",
                                        "1.16667",
                                    ),
                                    strokePath(
                                        "M12.8333 4.08331L7 7.58331L1.16667 4.08331",
                                        "1.16667",
                                    ),
                                ],
                                { class: "text-color-default m-x-1" },
                            ),
                            createElement("input", {
                                placeholder: "Enter your email",
                                id: "email",
                                name: "email",
                                type: "text",
                                class: "bg-brand-third grow border-0 radius-1 pad-y-1 text-color-default font-size-1 font-public-sans weight-400 outline-none",
                            }),
                        ],
                    ),
                ],
            ),

            // Password
            createElement(
                "div",
                { class: "flex justify-start items-center flex-column gap-4 w-full" },
                "",
                [
                    createElement(
                        "label",
                        {
                            class: "font-ibm-plex-mono text-color-default w-full weight-400 text-upper font-size-1",
                            for: "password",
                        },
                        "Password",
                    ),
                    createElement(
                        "div",
                        {
                            class: "w-full flex items-center justify-between flex-row bg-brand-third border border-brand-default radius-1",
                        },
                        "",
                        [
                            svgIcon(
                                "0 0 14 14",
                                [
                                    createElement("g", { "clipPath": "url(#clip0_199_241)" }, "", [
                                        strokePath(
                                            "M2.91667 6.41669H11.0833C11.7277 6.41669 12.25 6.93902 12.25 7.58335V11.6667C12.25 12.311 11.7277 12.8334 11.0833 12.8334H2.91667C2.27233 12.8334 1.75 12.311 1.75 11.6667V7.58335C1.75 6.93902 2.27233 6.41669 2.91667 6.41669Z",
                                            "1.16667",
                                        ),
                                        strokePath(
                                            "M4.08333 6.41669V4.08335C4.08333 3.30981 4.39062 2.56794 4.9376 2.02096C5.48459 1.47398 6.22645 1.16669 7 1.16669C7.77355 1.16669 8.51541 1.47398 9.06239 2.02096C9.60937 2.56794 9.91667 3.30981 9.91667 4.08335V6.41669",
                                            "1.16667",
                                        ),
                                    ]),
                                    createElement("defs", {}, "", [
                                        createElement("clipPath", { id: "clip0_199_241" }, "", [
                                            createElement("rect", {
                                                width: "14",
                                                height: "14",
                                                fill: "white",
                                            }),
                                        ]),
                                    ]),
                                ],
                                { class: "text-color-default m-x-1" },
                            ),
                            createElement("input", {
                                placeholder: "Enter your password",
                                id: "password",
                                name: "password",
                                type: "password",
                                class: "bg-brand-third grow border-0 radius-1 pad-y-1 text-color-default font-size-1 font-public-sans weight-400 outline-none",
                            }),
                            svgIcon(
                                "0 0 16 16",
                                [
                                    strokePath(
                                        "M1.33331 7.99998C1.33331 7.99998 3.73331 3.33331 7.99998 3.33331C12.2666 3.33331 14.6666 7.99998 14.6666 7.99998C14.6666 7.99998 12.2666 12.6666 7.99998 12.6666C3.73331 12.6666 1.33331 7.99998 1.33331 7.99998Z",
                                        "1.33333",
                                    ),
                                    strokePath(
                                        "M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z",
                                        "1.33333",
                                    ),
                                ],
                                { class: "text-color-default m-x-1 font-size-1fourth cursor-pointer" },
                            ),
                        ],
                        {
                            click: (e) => {
                                const icon = e.target.closest("svg");
                                const wrapper = e.currentTarget;
                                if (!icon || icon !== wrapper.lastElementChild) return;
                                const input = wrapper.querySelector("input");
                                input.type = input.type === "password" ? "text" : "password";
                            },
                        },
                    ),
                ],
            ),

            // Submit
            createElement(
                "button",
                {
                    type: "submit",
                    class: "bg-brand-primary text-color-white pad-1 font-public-sans weight-600 font-size-1 border-0 outline-none radius-1half w-full flex items-center justify-center flex-row gap-2",
                },
                "",
                [
                    createElement("span", {}, "Sign In"),
                    svgIcon("0 0 13 13", [
                        strokePath("M2.70834 6.5H10.2917", "1.08333"),
                        strokePath("M6.5 2.70831L10.2917 6.49998L6.5 10.2916", "1.08333"),
                    ]),
                ],
            ),
        ],
        {
            submit: (e) => {
                signinUser(e);
            },
        },
    );
}

function FormRegisterComponent() {
    return createElement(
        "form",
        {
            class: "w-full hidden items-center justify-center flex-column gap-4",
            action: "",
        },
        "",
        [
            // Full name
            createElement(
                "div",
                { class: "flex justify-start items-center flex-column gap-4 w-full" },
                "",
                [
                    createElement(
                        "label",
                        {
                            class: "font-ibm-plex-mono w-full text-color-default weight-400 text-upper font-size-1",
                            for: "fullname",
                        },
                        "Full name (nama lengkap) *",
                    ),
                    createElement(
                        "div",
                        {
                            class: "w-full flex items-center justify-between flex-row bg-brand-third border border-brand-default radius-1",
                        },
                        "",
                        [
                            svgIcon(
                                "0 0 14 14",
                                [
                                    strokePath(
                                        "M11.6667 12.25V11.0833C11.6667 10.4645 11.4209 9.871 10.9833 9.43342C10.5457 8.99583 9.95221 8.75 9.33337 8.75H4.66671C4.04787 8.75 3.45438 8.99583 3.01679 9.43342C2.57921 9.871 2.33337 10.4645 2.33337 11.0833V12.25",
                                        "1.16667",
                                    ),
                                    strokePath(
                                        "M9.33329 4.08333C9.33329 5.372 8.28862 6.41667 6.99996 6.41667C5.71129 6.41667 4.66663 5.372 4.66663 4.08333C4.66663 2.79467 5.71129 1.75 6.99996 1.75C8.28862 1.75 9.33329 2.79467 9.33329 4.08333Z",
                                        "1.16667",
                                    ),
                                ],
                                { class: "text-color-default m-x-1" },
                            ),
                            createElement("input", {
                                placeholder: "e.g. Budi Santoso",
                                id: "fullname",
                                name: "fullname",
                                type: "text",
                                required: "",
                                class: "bg-brand-third grow border-0 radius-1 pad-y-1 text-color-default font-size-1 font-public-sans weight-400 outline-none",
                            }),
                        ],
                    ),
                ],
            ),

            // Email + phone
            createElement(
                "div",
                {
                    class: "flex md-flex-column items-center justify-between flex-row gap-4 w-full",
                },
                "",
                [
                    createElement(
                        "div",
                        {
                            class: "flex justify-start items-center flex-column gap-4 w-full",
                        },
                        "",
                        [
                            createElement(
                                "label",
                                {
                                    class: "font-ibm-plex-mono w-full text-color-default weight-400 text-upper font-size-1",
                                    for: "email",
                                },
                                "Email address *",
                            ),
                            createElement(
                                "div",
                                {
                                    class: "w-full flex items-center justify-between flex-row bg-brand-third border border-brand-default radius-1",
                                },
                                "",
                                [
                                    svgIcon(
                                        "0 0 14 14",
                                        [
                                            strokePath(
                                                "M2.33333 2.33331H11.6667C12.311 2.33331 12.8333 2.85565 12.8333 3.49998V10.5C12.8333 11.1443 12.311 11.6666 11.6667 11.6666H2.33333C1.689 11.6666 1.16667 11.1443 1.16667 10.5V3.49998C1.16667 2.85565 1.689 2.33331 2.33333 2.33331Z",
                                                "1.16667",
                                            ),
                                            strokePath(
                                                "M12.8333 4.08331L7 7.58331L1.16667 4.08331",
                                                "1.16667",
                                            ),
                                        ],
                                        { class: "text-color-default m-x-1" },
                                    ),
                                    createElement("input", {
                                        placeholder: "e.g. budi@wargareport.id",
                                        id: "email",
                                        name: "email",
                                        type: "email",
                                        required: "",
                                        class: "bg-brand-third grow border-0 radius-1 pad-y-1 text-color-default font-size-1 font-public-sans weight-400 outline-none",
                                    }),
                                ],
                            ),
                        ],
                    ),
                    createElement(
                        "div",
                        {
                            class: "flex justify-start items-center flex-column gap-4 w-full",
                        },
                        "",
                        [
                            createElement(
                                "label",
                                {
                                    class: "font-ibm-plex-mono w-full text-color-default weight-400 text-upper font-size-1",
                                    for: "phone",
                                },
                                "Phone / Whatsapp *",
                            ),
                            createElement(
                                "div",
                                {
                                    class: "w-full flex items-center justify-between flex-row bg-brand-third border border-brand-default radius-1",
                                },
                                "",
                                [
                                    createElement("input", {
                                        placeholder: "+62 812-...",
                                        id: "phone",
                                        name: "phone",
                                        type: "tel",
                                        required: "",
                                        class: "bg-brand-third grow border-0 radius-1 pad-1 text-color-default font-size-1 font-public-sans weight-400 outline-none",
                                    }),
                                ],
                            ),
                        ],
                    ),
                ],
            ),

            // NIK
            createElement(
                "div",
                { class: "flex justify-start items-center flex-column gap-4 w-full" },
                "",
                [
                    createElement(
                        "label",
                        {
                            class: "font-ibm-plex-mono w-full text-color-default weight-400 text-upper font-size-1",
                            for: "nik",
                        },
                        "nik *",
                    ),
                    createElement(
                        "div",
                        {
                            class: "w-full flex items-center justify-between flex-row bg-brand-third border border-brand-default radius-1",
                        },
                        "",
                        [
                            createElement("input", {
                                placeholder: "16 digits for verified resident badge (e.g. 3174...)",
                                id: "nik",
                                name: "nik",
                                type: "text",
                                inputmode: "numeric",
                                maxlength: "16",
                                pattern: "[0-9]{16}",
                                required: "",
                                class: "bg-brand-third grow border-0 radius-1 pad-1 text-color-default font-ibm-plex-mono font-size-1 font-public-sans weight-400 outline-none",
                            }),
                        ],
                    ),
                    createElement(
                        "span",
                        { class: "w-full text-color-default font-size-075rem" },
                        "Used exclusively for verification under UU PDP and never shown to the public.",
                    ),
                ],
            ),

            // Password
            createElement(
                "div",
                { class: "flex justify-start items-center flex-column gap-4 w-full" },
                "",
                [
                    createElement(
                        "label",
                        {
                            class: "font-ibm-plex-mono text-color-default w-full weight-400 text-upper font-size-1",
                            for: "password",
                        },
                        "Password",
                    ),
                    createElement(
                        "div",
                        {
                            class: "w-full flex items-center justify-between flex-row bg-brand-third border border-brand-default radius-1",
                        },
                        "",
                        [
                            svgIcon(
                                "0 0 14 14",
                                [
                                    createElement("g", { "clipPath": "url(#clip0_199_241)" }, "", [
                                        strokePath(
                                            "M2.91667 6.41669H11.0833C11.7277 6.41669 12.25 6.93902 12.25 7.58335V11.6667C12.25 12.311 11.7277 12.8334 11.0833 12.8334H2.91667C2.27233 12.8334 1.75 12.311 1.75 11.6667V7.58335C1.75 6.93902 2.27233 6.41669 2.91667 6.41669Z",
                                            "1.16667",
                                        ),
                                        strokePath(
                                            "M4.08333 6.41669V4.08335C4.08333 3.30981 4.39062 2.56794 4.9376 2.02096C5.48459 1.47398 6.22645 1.16669 7 1.16669C7.77355 1.16669 8.51541 1.47398 9.06239 2.02096C9.60937 2.56794 9.91667 3.30981 9.91667 4.08335V6.41669",
                                            "1.16667",
                                        ),
                                    ]),
                                    createElement("defs", {}, "", [
                                        createElement("clipPath", { id: "clip0_199_241" }, "", [
                                            createElement("rect", {
                                                width: "14",
                                                height: "14",
                                                fill: "white",
                                            }),
                                        ]),
                                    ]),
                                ],
                                { class: "text-color-default m-x-1" },
                            ),
                            createElement("input", {
                                placeholder: "Enter your password",
                                id: "password",
                                name: "password",
                                type: "password",
                                required: "",
                                class: "bg-brand-third grow border-0 radius-1 pad-y-1 text-color-default font-size-1 font-public-sans weight-400 outline-none",
                            }),
                            svgIcon(
                                "0 0 16 16",
                                [
                                    strokePath(
                                        "M1.33331 7.99998C1.33331 7.99998 3.73331 3.33331 7.99998 3.33331C12.2666 3.33331 14.6666 7.99998 14.6666 7.99998C14.6666 7.99998 12.2666 12.6666 7.99998 12.6666C3.73331 12.6666 1.33331 7.99998 1.33331 7.99998Z",
                                        "1.33333",
                                    ),
                                    strokePath(
                                        "M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z",
                                        "1.33333",
                                    ),
                                ],
                                { class: "text-color-default m-x-1 font-size-1fourth cursor-pointer" },
                            ),
                        ],
                        {
                            click: (e) => {
                                const icon = e.target.closest("svg");
                                const wrapper = e.currentTarget;
                                if (!icon || icon !== wrapper.lastElementChild) return;
                                const input = wrapper.querySelector("input");
                                input.type = input.type === "password" ? "text" : "password";
                            },
                        },
                    ),
                ],
            ),

            // Submit
            createElement(
                "button",
                {
                    type: "submit",
                    class: "bg-brand-primary text-color-white pad-1 font-public-sans weight-600 font-size-1 border-0 outline-none radius-1half w-full flex items-center justify-center flex-row gap-2",
                },
                "",
                [
                    svgIcon("0 0 13 13", [
                        createElement("g", { "clipPath": "url(#clip0_199_513)" }, "", [
                            strokePath(
                                "M11.9167 6.0017V6.50003C11.916 7.66809 11.5378 8.80464 10.8384 9.74018C10.139 10.6757 9.15599 11.3601 8.03586 11.6913C6.91573 12.0225 5.71856 11.9827 4.62288 11.5779C3.5272 11.1731 2.59173 10.425 1.95598 9.44511C1.32023 8.46521 1.01826 7.30606 1.09512 6.14053C1.17197 4.975 1.62353 3.86554 2.38244 2.97761C3.14136 2.08968 4.16697 1.47086 5.30631 1.21344C6.44565 0.956021 7.63769 1.07379 8.70463 1.5492",
                                "1.08333",
                            ),
                            strokePath("M4.875 5.95835L6.5 7.58335L11.9167 2.16669", "1.08333"),
                        ]),
                        createElement("defs", {}, "", [
                            createElement("clipPath", { id: "clip0_199_513" }, "", [
                                createElement("rect", { width: "13", height: "13", fill: "white" }),
                            ]),
                        ]),
                    ]),
                    createElement("span", {}, "Create Account & Continue"),
                ],
            ),
        ],
        {
            submit: (e) => {
                registerUser(e);
            },
        },
    );
}

function ModalComponentLoginRegister() {

    const formSigninComponent = FormSigninComponent();
    const fromRegister = FormRegisterComponent();
    const modalBody = createElement(
        "div",
        {
            class: "bg-brand-third modal-body pad-1half w-full radius-bl-1 radius-br-1 flex items-center justify-center flex-column gap-4",
        },
        "",
        [
            createElement(
                "div",
                { class: "w-full flex items-center justify-between flex-row gap-4" },
                "",
                [
                    createElement(
                        "button",
                        {
                            id: "signin-form",
                            class: "w-1/2 signin-btn bg-brand-primary text-color-white border-0 outline-none decoration-none flex justify-center items-center font-public-sans weight-400 cursor-pointer pad-1 font-size-1 radius-1half",
                        },
                        "Sign In Existing Account",
                        [],
                        {
                            click(e) {
                                fromRegister.classList.add("hidden");
                                fromRegister.classList.remove("flex");
                                formSigninComponent.classList.add("flex");
                                formSigninComponent.classList.remove("hidden");

                                const t = document.getElementById("register-form");
                                e.target.classList.remove("bg-brand-main-color");
                                e.target.classList.remove("border border-brand-default");
                                e.target.classList.remove("outline-none");
                                e.target.classList.remove("text-color-default");

                                e.target.classList.add("bg-brand-primary");
                                e.target.classList.add("text-color-white");
                                e.target.classList.add("border-0");

                                t.classList.add("bg-brand-main-color");
                                t.classList.add("border border-brand-default");
                                t.classList.add("outline-none");
                                t.classList.add("text-color-default");

                                t.classList.remove("bg-brand-primary");
                                t.classList.remove("text-color-white");
                                t.classList.remove("border-0");
                            }
                        }
                    ),
                    createElement(
                        "button",
                        {
                            id: "register-form",
                            class: "w-1/2 register-btn decoration-none flex justify-center items-center bg-brand-main-color border border-brand-default outline-none text-color-default font-public-sans weight-400 cursor-pointer pad-1 font-size-1 radius-1half",
                        },
                        "Register as Citizen",
                        [],
                        {
                            click(e) {
                                fromRegister.classList.add("flex");
                                fromRegister.classList.remove("hidden");
                                formSigninComponent.classList.add("hidden");
                                formSigninComponent.classList.remove("flex");

                                const t = document.getElementById("signin-form");
                                e.target.classList.remove("bg-brand-main-color");
                                e.target.classList.remove("border border-brand-default");
                                e.target.classList.remove("outline-none");
                                e.target.classList.remove("text-color-default");

                                e.target.classList.add("bg-brand-primary");
                                e.target.classList.add("text-color-white");
                                e.target.classList.add("border-0");

                                t.classList.add("bg-brand-main-color");
                                t.classList.add("border border-brand-default");
                                t.classList.add("outline-none");
                                t.classList.add("text-color-default");

                                t.classList.remove("bg-brand-primary");
                                t.classList.remove("text-color-white");
                                t.classList.remove("border-0");

                            }
                        }
                    ),
                ],
            ),
            formSigninComponent,
            fromRegister
        ]
    );

    return createElement(
        "div",
        {
            class: "w-full h-full position-fix z-i20 bg-black/75 container-modal hidden items-center justify-center flex-column",
        },
        "",
        [
            createElement(
                "div",
                {
                    class: "radius-1 md-w-[90%] md-height-90percent md-overflow-y-scroll md-justify-start modal-form flex items-center justify-center flex-column",
                },
                "",
                [

                    // Header
                    createElement(
                        "div",
                        {
                            class: "pad-1half w-full bg-brand-main-color radius-tl-1 radius-tr-1 flex items-start justify-between flex-row",
                        },
                        "",
                        [
                            createElement(
                                "div",
                                {
                                    class: "flex w-[70%] items-start justify-center flex-column gap-2",
                                },
                                "",
                                [
                                    createElement(
                                        "span",
                                        { class: "font-fraunces weight-600 font-size-1fourth" },
                                        "Sign In to WargaReport",
                                    ),
                                    createElement(
                                        "span",
                                        { class: "font-public-sans weight-400 text-color-default" },
                                        "Sign in to lodge a complaint or upvote issues.",
                                    ),
                                ],
                            ),
                            createElement(
                                "div",
                                { class: "w-1/3 flex items-start flex-row justify-end" },
                                "",
                                [
                                    createElement(
                                        "button",
                                        {
                                            type: "button",
                                            class: "bg-transparent border-0 outline-none font-size-1fourth text-color-default",
                                        },
                                        "",
                                        [
                                            svgIcon("0 0 17 17", [
                                                strokePath("M12.75 4.25L4.25 12.75", "1.41667"),
                                                strokePath("M4.25 4.25L12.75 12.75", "1.41667"),
                                            ]),
                                        ],
                                        {
                                            click: (e) => {
                                                e.currentTarget.closest(".container-modal").classList.toggle("flex");
                                                e.currentTarget.closest(".container-modal").classList.toggle("hidden");
                                            },
                                        },
                                    ),
                                ],
                            ),
                        ],
                    ),

                    // Body
                    modalBody,
                ],
            ),
        ],
    );
}
