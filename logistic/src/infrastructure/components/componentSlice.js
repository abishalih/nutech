import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    drawerState: false,
    userAccountState: false,
    status: "idle"
};

export const componentSlice = createSlice({
    name: "generalComponent",
    initialState,
    reducers: {
        setDrawer: (state, action) => {
            state.drawerState = action.payload;
        },
        setUserAccount: (state, action) => {
            state.setUserAccount = action.payload;
        }
    }
});

export const { setDrawer, setUserAccount } = componentSlice.actions;

export const selectDrawerState = (state) => state.generalComponent.drawerState;
export const selectUserAccountState = (state) => state.generalComponent.userAccountState;

export default componentSlice.reducer;
