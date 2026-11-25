import { persistCombineReducers, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

import { usersReducer } from "./slices/users.slice.js";
import reportsReducer from "./slices/reports.slice.js";
import officersReducer from "./slices/officers.slice.js";
import categoriesReducer from "./slices/categories.slice.js";
import agenciesReducer from "./slices/agencies.slice.js";
import { PAUSE, PERSIST, REHYDRATE, PURGE, REGISTER, FLUSH } from "redux-persist/lib/constants.js";

const storage = {
    getItem: (key) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key, item) => Promise.resolve(localStorage.setItem(key, item)),
    removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
};

const rootPersistConfig = {
    key: "wargarep",
    storage
};

const store = configureStore({
    reducer: persistCombineReducers(rootPersistConfig, {
        users: usersReducer.users, // register update
        user: usersReducer.user, // login logout
        categories: categoriesReducer,
        agencies: agenciesReducer,
        officers: officersReducer,
        reports: reportsReducer,
    }),
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        })
    }
});

export const persistor = persistStore(store);
export default store;
