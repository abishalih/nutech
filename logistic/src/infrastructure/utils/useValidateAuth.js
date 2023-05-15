import { signOut } from "features/authentication/authSlice";
import { getAuthToken } from "infrastructure/utils/useAuthToken";
import { isAuthenticated } from "infrastructure/utils/useAuthenticationValidation";
import { generateCamelKey } from "infrastructure/utils/useCustomCase";
import { getUserInformation } from "infrastructure/utils/useRoutes";

export const useValidateAuth = async (dispatch, pathname = "/") => {
    const redirectLogin = () => {
        dispatch(signOut());
        if (pathname !== "/login") window.location = `/login?redirect_uri=${pathname}`;
    };

    const isAuth = await isAuthenticated();
    if (isAuth) {
        const isToken = await getAuthToken();
        const userInformation = await generateCamelKey(getUserInformation(isToken));
        return userInformation;
    } else redirectLogin();
};
