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
export function getData(storageKey) {
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

// /**
//  *
//  * @returns {RegisterField}
//  */
// export function getUserData({allUsers: []}) {
//     if (verifyUserCredential()) {
//         const { id } = getData(storageKeys.ID);
//         return getData(storageKeys.PROFILE)[id];
//     }
//     return {};
// }

/**
 *
 * @param {String} token
 * @returns {Boolean}
 */
export function verifyUserCredential(allUsers) {
    // console.log(allUsers)
    // token was generate using user email
    // const email = atob(userData.token);
    const { id } = getData(storageKeys.ID) || { id: "" };
    const { token } = getData(storageKeys.CREDENTIAL) || { token: "" };

    if (id && token && allUsers) {
        const user = allUsers.find(d => d.id == id);
        const email = atob(token);
        if (email == user?.email) {
            return user;
        }
        return null;
    }

    return null;
}

/**
 *
 * @param {SubmitEvent} e
 */
export function signinUser({ password, email, allUsers }) {
    const user = allUsers.find((profile) => {
        return profile.password == btoa(password) && profile.email == email;
    });
    if (user) {
        const token = createUserCredential(email);
        saveData(storageKeys.CREDENTIAL, JSON.stringify({ token }));
        saveData(storageKeys.ID, JSON.stringify({ id: user.id }));
        return user;
    } else {
        return null;
    }
}

/**
 *
 * @param {SubmitEvent} e
 */
export function registerUser({
    fullname,
    email,
    phone,
    nik,
    password,
    allUsers,
}) {
    if (
        allUsers === null ||
        (allUsers &&
            !allUsers.find(
                ({ email: usrMail }) =>
                    usrMail?.trim()?.toLowerCase() === email?.trim()?.toLowerCase(),
            ))
    ) {
        const userId = window.crypto.randomUUID();
        const registerInfo = {
            fullname,
            email,
            phone,
            nik,
            password: btoa(password),
            id: userId,
            role: "user"
        };
        return registerInfo;
    }

    return null;
}
