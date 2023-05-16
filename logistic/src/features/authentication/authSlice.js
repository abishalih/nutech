import { createSlice } from "@reduxjs/toolkit";
import { deleteAuthToken } from "infrastructure/utils/useAuthToken";
import { setStorage } from "infrastructure/utils/useRoutes";
import jwtEncode from "jwt-encode";

const initialState = {
    userInformation: {},
    isLogin: false,
    status: "idle"
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn: (state, action) => {
            try {
                const { redirectUri, ...payload } = action.payload;
                state.userInformation = payload;
                state.isLogin = true;

                const secret = "secret";
                const accessToken = jwtEncode(payload, secret);
                setStorage(accessToken, "");

                window.location.replace(redirectUri);
            } catch (error) {
                console.error("Error in signIn:", error);
            }
        },
        signOut: (state) => {
            state.userInformation = initialState.userInformation;
            state.isLogin = false;
            deleteAuthToken();
            location.reload();
        }
    }
});

export const { signIn, signOut } = authSlice.actions;

export const selectIsLogin = (state) => state.auth.isLogin;
export const selectUserInformation = (state) => state.auth.userInformation;

const authReducer = authSlice.reducer;
export default authReducer;
