/* eslint-disable no-restricted-globals */
export const getHost = () => {
    if (location.host === "localhost") {
        return "localhost";
    }

    if (location.host.slice(0, location.host.search(":")) === "localhost") {
        return "localhost";
    }

    return "";
};

export const BULANAN = "bulan";
export const MINGGUAN = "minggu";
export const HARIAN = "hari";

export default {
    API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT || "/",
    AUTH_API_ENDPOINT: process.env.REACT_APP_AUTH_API_ENDPOINT || "/",
    REDIRECT_LOGIN_URL: process.env.REACT_APP_REDIRECT_LOGIN_URL || "/login",
    REDIRECT_URI: process.env.REACT_APP_REDIRECT_URI || "/",
    COOKIE_TOKEN: process.env.REACT_APP_COOKIE_TOKEN || "app_token",
    COOKIE_REFRESH_TOKEN: process.env.REACT_APP_COOKIE_REFRESH_TOKEN || "refresh_app_token",
    COOKIE_DOMAIN: getHost()
};
