import { createSlice } from "@reduxjs/toolkit";

const agenciesSlice = createSlice({
    name: "agencies",
    initialState: {
        agencies: [], // agencyType[]
    },
    reducers: {
        addNewAgency(prevState, { payload }) {
            return {
                ...prevState,
                agencies: [...prevState.agencies, payload],
            };
        },
        updateNewAgency(prevState, { payload }) {
            return {
                ...prevState,
                agencies: prevState.agencies.map((d) => {
                    if (d.id == payload.id) {
                        return { ...d, ...payload };
                    }
                    return d;
                }),
            };
        },
    },
});

export const agenciesActions = agenciesSlice.actions;
export default agenciesSlice.reducer;
