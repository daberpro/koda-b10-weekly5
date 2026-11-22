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
        id: getData(storageKeys.ID)?.id,
    };
}

/**
 *
 * @param {String} password
 */
export function createUserCredential(email) {
    return btoa(email);
}

/**
 *
 * @returns {RegisterField}
 */
export function getUserData() {
    if (verifyUserCredential()) {
        const { id } = getData(storageKeys.ID);
        return getData(storageKeys.PROFILE)[id];
    }
    return {};
}

/**
 *
 * @param {String} token
 * @returns {Boolean}
 */
export function verifyUserCredential() {

    // token was generate using user email
    // const email = atob(userData.token);
    const { id } = getData(storageKeys.ID) || {id: ""};
    const users = getData(storageKeys.PROFILE) || {};
    const { token } = getData(storageKeys.CREDENTIAL) || {token: ""};

    if (users && id && token) {
        const user = users[id];
        const email = atob(token);
        return email == user.email;
    }

    return false;

    //     const { token, inputMail } = userData;
    //     const decrypt = atob(token || getData(storageKeys.CREDENTIAL)?.token || "");
    //     const { id } = getData(storageKeys.ID) || { id: "" };
    //     const userProfile = getData(storageKeys.PROFILE);
    //
    //     if ((id && userProfile) || (inputMail && userProfile)) {
    //         const { password, email: profileMail } =
    //             userProfile[email || inputMail];
    //         let restLength = 60 - atob(password).length;
    //         if (restLength < 0) {
    //             restLength = 0;
    //         }
    //         const data = atob(password) + "#".repeat(restLength);
    //         return (
    //             data === decrypt &&
    //             (email === profileMail || inputMail === profileMail)
    //         );
    //     }
    //     return false;
}

/**
 *
 * @param {SubmitEvent} e
 */
export function signinUser({ password, email }) {

    const users = getData(storageKeys.PROFILE) || {};
    const user = Object.values(users).find((profile) => {
        return profile.password == btoa(password);
    });
    if (user) {
        const token = createUserCredential(email);
        saveData(storageKeys.CREDENTIAL, JSON.stringify({ token }));
        saveData(storageKeys.ID, JSON.stringify({ id: user.id }));
        return true;
    } else {
        return false;
    }
}

/**
 *
 * @param {SubmitEvent} e
 */
export function registerUser({ fullname, email, phone, nik, password }) {
    const allUsers = getData(storageKeys.PROFILE);
    if (
        allUsers === null ||
        (allUsers &&
            !Object.values(allUsers).find(
                ({ email: usrMail }) =>
                    usrMail.trim().toLowerCase() === email.trim().toLowerCase(),
            ))
    ) {
        const userId = Date.now();
        const registerInfo = {
            fullname,
            email,
            phone,
            nik,
            password: btoa(password),
            id: userId,
        };
        saveData(storageKeys.ID, JSON.stringify({ id: registerInfo.id }));
        saveData(
            storageKeys.PROFILE,
            JSON.stringify({ ...allUsers, [registerInfo.id]: registerInfo }),
        );
        return true;
    }

    return false;
}
