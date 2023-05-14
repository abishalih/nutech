import { selectDrawerState, setDrawer } from "infrastructure/components/componentSlice";
import { useAuthorization } from "infrastructure/utils/useAuthorization";
import find from "lodash/find";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useLayoutNavigation = () => {
    const { roleId } = useAuthorization();
    const dispatch = useDispatch();
    const history = useHistory();
    const drawerState = useSelector(selectDrawerState);
    const toggleHamburger = () => dispatch(setDrawer(!drawerState));
    const { pathname } = window.location;
    const isSelected = (path) => pathname === path;
    const isChildSelected = (childMenu) => find(childMenu, (o) => o.url === pathname);
    const [expandChild, setExpandChild] = useState(new Map());
    return {
        expandChild,
        drawerState,
        history,
        isSelected,
        isChildSelected,
        pathname,
        roleId,
        setExpandChild,
        toggleHamburger
    };
};

export default useLayoutNavigation;
