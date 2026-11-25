import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const fetchCategoriesThunk = createAsyncThunk(
    "fetch/categories",
    async (payload, thunkApi) => {
        try {
            const raw = await fetch("/categories.json");
            const cooked = await raw.json();
            return cooked;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message);
        }
    },
    {
        condition(payload, thunkApi) {
            return thunkApi.getState().categories.categories.length <= 0;
        }
    }
);

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [], // categoryType[]
        info: {
            isLoading: false,
            isFulfilled: false,
            errorMessage: null,
        },
    },
    reducers: {
        addCategory(prevState, {payload}) {
            return {
                ...prevState,
                categories: [
                    ...prevState.categories,
                    payload
                ]
            }
        },
        updateCategory(prevState, {payload}) {
            return {
                ...prevState,
                categories: prevState.categories.map((d) => {
                    if (d.id == payload.id) {
                        return { ...d, ...payload };
                    }
                    return d;
                })
            }
        }
    },
    extraReducers(builder) {
        return builder.addAsyncThunk(fetchCategoriesThunk, {
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
                    categories: payload,
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

export const categoriesActions = {
    ...categoriesSlice.actions,
    fetchCategoriesThunk,
};
export default categoriesSlice.reducer;
