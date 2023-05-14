import * as Provider from "infrastructure/components/EnhancedTable/TableContext";

const useTableBody = ({
    actions = [],
    checkbox = false,
    columns = [],
    data = [],
    isLoading = false,
    refreshTable = false
}) => {
    const { getContext, setContext } = Provider;
    const {
        tableDialog = {},
        tableSelected = [],
        tableFilter = {},
        tableHeader = {},
        tablePagination = {}
    } = getContext();
    const tableMeta = { ...tableFilter, ...tableHeader, ...tablePagination };
    const setStateContext = setContext();
    const isSelected = (name) => tableSelected.includes(name);
    const emptyRows = data.length < 1;

    return {
        actions,
        checkbox,
        columns,
        data,
        emptyRows,
        isSelected,
        isLoading,
        refreshTable,
        setStateContext,
        tableDialog,
        tableMeta,
        tableSelected
    };
};

export default useTableBody;
