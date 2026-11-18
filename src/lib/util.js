/**
 * @typedef {Object} RegisterField
 *
 * @property {String} fullname
 * @property {String} email
 * @property {String} phone
 * @property {String} nik
 * @property {String} password
 */

export const storageKeys = {
    CREDENTIAL: "credential",
    PROFILE: "profile",
    REPORTS: "reports",
    ID: "user-id",
};

/**
 *
 * @param {String} storageKey
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
 * @param {String} storageKey
 * @param {String} data
 */
export function saveData(storageKey, data) {
    localStorage.setItem(storageKey, data);
}

/**
 *
 * @param {String} storageKey
 */
export function removeData(storageKey) {
    localStorage.removeItem(storageKey);
}

export function getUserCredentialWithId() {
    return {
        token: getData(storageKeys.CREDENTIAL)?.token,
        email: getData(storageKeys.ID)?.email,
    };
}

/**
 *
 * @param {String} password
 */
export function createUserCredential(password) {
    let restLength = 30 - password.length;
    if (restLength < 0) {
        restLength = 0;
    }
    const data = password + "#".repeat(restLength);
    return btoa(data.substring(0, 30));
}

/**
 *
 * @returns {RegisterField}
 */
export function getUserData() {
    if (verifyUserCredential()) {
        const { email } = getData(storageKeys.ID);
        return getData(storageKeys.PROFILE)[email];
    }
    return {};
}

/**
 *
 * @param {String} token
 * @returns {Boolean}
 */
export function verifyUserCredential(userData = { token: "", inputMail: "" }) {
    const { token, inputMail } = userData;
    const decrypt = atob(token || getData(storageKeys.CREDENTIAL)?.token || "");
    const { email } = getData(storageKeys.ID) || { email: "" };
    const userProfile = getData(storageKeys.PROFILE);
    if ((email && userProfile) || (inputMail && userProfile)) {
        const { password, email: profileMail } =
            userProfile[email || inputMail];
        let restLength = 30 - password.length;
        if (restLength < 0) {
            restLength = 0;
        }
        const data = password + "#".repeat(restLength);
        return (
            data === decrypt &&
            (email === profileMail || inputMail === profileMail)
        );
    }
    return false;
}

/**
 *
 * @param {SubmitEvent} e
 */
export function signinUser({ password, email }) {
    const token = createUserCredential(password);

    if (!getData(storageKeys.CREDENTIAL)) {
        removeData(storageKeys.ID);
    }

    if (verifyUserCredential({ token, inputMail: email })) {
        saveData(storageKeys.CREDENTIAL, JSON.stringify({ token }));
        saveData(storageKeys.ID, JSON.stringify({ email: email }));
        return true;
    } else {
        removeData(storageKeys.CREDENTIAL);
        return false;
    }
}

/**
 *
 * @param {SubmitEvent} e
 */
export function registerUser({ fullname, email, phone, nik, password }) {
    const allUsers = getData(storageKeys.PROFILE);
    console.log(allUsers)
    console.log({
        fullname,
        email,
        phone,
        nik,
        password,
        id: 0,
    });

    if (
        allUsers === null ||
        (allUsers &&
            !Object.values(allUsers).find(
                ({ email: usrMail }) =>
                    usrMail.trim().toLowerCase() ===
                    email.trim().toLowerCase(),
            ))
    ) {
        const userId = Date.now();
        const registerInfo = {
            fullname,
            email,
            phone,
            nik,
            password,
            id: userId,
        };
        saveData(storageKeys.ID, JSON.stringify({ email: registerInfo.email }));
        saveData(
            storageKeys.PROFILE,
            JSON.stringify({ ...allUsers, [registerInfo.email]: registerInfo }),
        );
        return true;
    }

    return false;
}
