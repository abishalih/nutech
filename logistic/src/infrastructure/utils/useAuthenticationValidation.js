import jwtDecode from "jwt-decode";
import { getAuthToken } from "./useAuthToken";
import { generateCamelKey } from "./useCustomCase";
import { isExpired } from "./useTime";

export const isAuthenticated = () => !!getAuthToken();

export const isAuthExpired = () => {
    const currToken = getAuthToken();
    const { realToken = {} } = generateCamelKey(jwtDecode(currToken));
    const { exp } = jwtDecode(realToken);
    return isExpired(exp);
};
