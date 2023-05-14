import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = {
    userInformation: {
        email: "",
        iss: "",
        menu: [],
        name: "",
        poolCode: "",
        realToken: "",
        roleDesc: ""
    },
    isLogin: false,
    status: "idle"
};

export const incrementAsync = createAsyncThunk("auth/fetchCount", async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        signOut: (state) => {
            state.userInformation = initialState.userInformation;
            state.isLogin = false;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.value += action.payload;
            });
    }
});

export const { incrementByAmount, signOut } = authSlice.actions;

export const selectIsLogin = (state) => state.auth.isLogin;
export const selectUserInformation = (state) => state.auth.userInformation;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
    const currentValue = selectIsLogin(getState());
    if (currentValue % 2 === 1) {
        dispatch(incrementByAmount(amount));
    }
};

export default authSlice.reducer;
