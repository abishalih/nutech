import AccessDeny from "infrastructure/templates/AccessDeny";
import { useUserInfo } from "infrastructure/utils/useUserInfo";
import { useValidateAuth } from "infrastructure/utils/useValidateAuth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

export function useCheckAuth({ component, withLayout, role = [], ...rest }) {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { roleId } = useUserInfo();
    useEffect(() => {
        if (pathname !== "/login") useValidateAuth(dispatch, pathname);
    }, [pathname]);
    return {
        Component: pathname === "/login" || role.length === 0 || role.includes(roleId) ? component : AccessDeny,
        withLayout: withLayout,
        ...rest
    };
}

export default useCheckAuth;
