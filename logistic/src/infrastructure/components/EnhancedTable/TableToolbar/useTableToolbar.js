import * as Provider from "infrastructure/components/EnhancedTable/TableContext";
import _debounce from "lodash/debounce";
import { useCallback, useEffect, useState } from "react";

export function useTableToolbar(props) {
    const {
        toolbarActions,
        title,
        period,
        tableFilterOptions = [],
        refreshTable = false,
        searchPlaceholder,
        setSearchKeyword
    } = props;
    const { getContext, setContext } = Provider;
    const {
        tableDialog = {},
        tablePayload = {},
        tableSelected = [],
        tableFilter = {},
        tableHeader = {},
        tablePagination = {}
    } = getContext();
    const tableMeta = { ...tableFilter, ...tableHeader, ...tablePagination };
    const setStateContext = setContext();
    const numSelected = tableSelected.length;

    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);
    const closeMenu = () => setAnchorEl(null);
    const searchKeyword = useCallback(_debounce(setSearchKeyword, 1000), []);
    const isEmptyContent = !(
        tableFilterOptions.length > 0 ||
        period ||
        searchPlaceholder ||
        numSelected > 0 ||
        (toolbarActions && toolbarActions.length > 0) ||
        title
    );
    const styleIsExist = {
        justifyContent: tableFilterOptions.length > 0 || title || searchPlaceholder ? "space-between" : "flex-end"
    };
    useEffect(() => {
        refreshTable(tableMeta);
    }, [JSON.stringify(tableMeta)]);

    return {
        anchorEl,
        tableMeta,
        closeMenu,
        isEmptyContent,
        menuOpen,
        numSelected,
        searchKeyword,
        tableSelected,
        setAnchorEl,
        styleIsExist,
        tableDialog,
        tablePayload,
        setStateContext,
        ...props
    };
}

export default useTableToolbar;
