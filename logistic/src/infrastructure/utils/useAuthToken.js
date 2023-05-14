import constants from "app/common/env";
import Cookies from "js-cookie";

const { COOKIE_DOMAIN, COOKIE_REFRESH_TOKEN, COOKIE_TOKEN } = constants;

export const getAuthToken = () => {
    const domainCookies = Cookies.get(COOKIE_TOKEN, {
        domain: COOKIE_DOMAIN,
        SameSite: COOKIE_DOMAIN ? "none" : "Lax",
        secure: !!COOKIE_DOMAIN
    });
    const localCookies = Cookies.get(COOKIE_TOKEN);
    const authToken = domainCookies ? domainCookies : localCookies || "";
    return authToken;
};

export const setAuthToken = (token) => {
    Cookies.set(COOKIE_TOKEN, token || "", {
        domain: COOKIE_DOMAIN,
        SameSite: COOKIE_DOMAIN ? "none" : "Lax",
        secure: !!COOKIE_DOMAIN
    });
    Cookies.set(COOKIE_TOKEN, token || "");
};

export const deleteAuthToken = () => {
    Cookies.remove(COOKIE_TOKEN, {
        domain: COOKIE_DOMAIN,
        SameSite: COOKIE_DOMAIN ? "none" : "Lax",
        secure: !!COOKIE_DOMAIN
    });
    Cookies.remove(COOKIE_TOKEN);
};

export const getRefreshAuthToken = () => {
    const domainCookies = Cookies.get(COOKIE_REFRESH_TOKEN, {
        domain: COOKIE_DOMAIN,
        SameSite: COOKIE_DOMAIN ? "none" : "Lax",
        secure: !!COOKIE_DOMAIN
    });
    const localCookies = Cookies.get(COOKIE_REFRESH_TOKEN);
    const authToken = domainCookies ? domainCookies : localCookies || "";
    return authToken;
};

export const setRefreshAuthToken = (token) => {
    Cookies.set(COOKIE_REFRESH_TOKEN, token || "", {
        domain: COOKIE_DOMAIN,
        SameSite: COOKIE_DOMAIN ? "none" : "Lax",
        secure: !!COOKIE_DOMAIN
    });
    Cookies.set(COOKIE_REFRESH_TOKEN, token || "");
};

export const deleteRefreshAuthToken = () => {
    Cookies.remove(COOKIE_REFRESH_TOKEN, {
        domain: COOKIE_DOMAIN,
        SameSite: COOKIE_DOMAIN ? "none" : "Lax",
        secure: !!COOKIE_DOMAIN
    });
    Cookies.remove(COOKIE_REFRESH_TOKEN);
};
