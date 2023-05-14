import * as Provider from "infrastructure/components/EnhancedTable/TableContext";

export const useTablePagination = ({ pagination = {}, rowsPerPageOptions = [10, 20, 30, 40] }) => {
    const { getContext, setContext } = Provider;
    const { tablePagination } = getContext();
    const setStateContext = setContext();

    const handlePageChange = async (_, page) => {
        await setStateContext("tableSelected", []);
        setStateContext("tablePagination", { page });
    };

    const handleShowChange = async ({ target }) => {
        await setStateContext("tableSelected", []);
        setStateContext("tablePagination", { page: 1, show: target.value });
    };
    const { page = 1, show = rowsPerPageOptions[0] } = tablePagination;
    const { count = 0 } = pagination;
    return {
        count,
        handlePageChange,
        handleShowChange,
        page,
        rowsPerPageOptions,
        show
    };
};
