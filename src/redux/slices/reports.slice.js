import { createSlice } from "@reduxjs/toolkit";

const reportsSlice = createSlice({
    name: "reports",
    initialState: {
        reports: [], // reportType[]
    },
    reducers: {
        addReport(prevState, { payload }) {
            return {
                ...prevState,
                reports: [...prevState.reports, payload],
            };
        },
        updateReport(prevState, { payload }) {
            return {
                ...prevState,
                reports: prevState.reports.map((d) => {
                    if (d.id == payload.id) {
                        return { ...d, ...payload };
                    }
                    return d;
                }),
            };
        },
    },
});

export const reportsActions = reportsSlice.actions;
export default reportsSlice.reducer;
