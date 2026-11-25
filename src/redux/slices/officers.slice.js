import { createSlice } from "@reduxjs/toolkit";

const officerSlice = createSlice({
    name: "officers",
    initialState: {
        officers: [], // officerType[]
    },
    reducers: {
        addNewOfficer(prevState, { payload }) {
            return {
                ...prevState,
                officers: [...prevState.officers, payload],
            };
        },
        updateOfficer(prevState, { payload }) {
            return {
                ...prevState,
                officers: prevState.officers.map((d) => {
                    if (d.id == payload.id) {
                        return { ...d, ...payload };
                    }
                    return d;
                }),
            };
        },
    },
});

export const officersActions = officerSlice.actions;
export default officerSlice.reducer;
