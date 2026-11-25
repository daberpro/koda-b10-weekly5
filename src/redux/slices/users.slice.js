import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserThunk = createAsyncThunk(
    "fetch/users",
    async (payload, thunkApi) => {
        try {
            const raw = await fetch("/users.json");
            const cooked = await raw.json();
            return cooked;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    },
    {
        condition(payload, api) {
            const users = api.getState().users?.users || [];
            return users.length <= 0;
        },
    },
);

const registerOrUpdateSlice = createSlice({
    name: "users",
    initialState: {
        users: [], // userType[]
        info: {
            isLoading: false,
            isFulfilled: false,
            errorMessage: null,
        },
    },
    reducers: {
        registerUser(prevState, { payload }) {
            return {
                ...prevState,
                users: [...prevState.users, payload],
            };
        },
        updateUser(prevState, { payload }) {
            return {
                ...prevState,
                users: prevState.users.map((d) => {
                    if (d.id == payload.id) {
                        return { ...d, ...payload };
                    }
                    return d;
                }),
            };
        },
    },
    extraReducers(builder) {
        return builder.addAsyncThunk(fetchUserThunk, {
            pending(prevState) {
                return {
                    ...prevState,
                    info: {
                        ...prevState.info,
                        isLoading: true,
                        isFulfilled: false,
                        errorMessage: null,
                    },
                };
            },
            fulfilled(prevState, { payload }) {
                return {
                    ...prevState,
                    users: [...prevState.users, payload],
                    info: {
                        ...prevState.info,
                        isLoading: false,
                        isFulfilled: true,
                    },
                };
            },
            rejected(prevState, { payload }) {
                return {
                    ...prevState,
                    info: {
                        ...prevState.info,
                        isLoading: false,
                        errorMessage: payload,
                    },
                };
            },
        });
    },
});

const usersSlice = createSlice({
    name: "user",
    initialState: {
        currentLoginUser: null, // userType
    },
    reducers: {
        loginUser(prevState, { payload }) {
            return {
                ...prevState,
                currentLoginUser: payload,
            };
        },
        logoutUser(prevState) {
            return {
                ...prevState,
                currentLoginUser: null,
            };
        },
    },
});

export const usersActions = {
    ...usersSlice.actions,
    ...registerOrUpdateSlice.actions,
    fetchUserThunk,
};

export const usersReducer = {
    users: registerOrUpdateSlice.reducer,
    user: usersSlice.reducer,
};
