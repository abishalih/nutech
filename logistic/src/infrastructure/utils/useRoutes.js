import jwtDecode from "jwt-decode";
import {
    deleteAuthToken,
    deleteRefreshAuthToken,
    getAuthToken,
    getRefreshAuthToken,
    setAuthToken,
    setRefreshAuthToken
} from "./useAuthToken";

export const getCookie = () => {
    const isToken = getAuthToken();
    const isRefreshToken = getRefreshAuthToken();
    return { isToken, isRefreshToken };
};

export const getUserInformation = (payload) => jwtDecode(payload);

export const clearStorage = () => {
    deleteAuthToken();
    deleteRefreshAuthToken();
};

export const setStorage = (isToken, isRefreshToken) => {
    setAuthToken(isToken);
    setRefreshAuthToken(isRefreshToken);
};
