import { handleSelectAllClick } from "infrastructure/components/common/table/utils";
import * as Provider from "infrastructure/components/EnhancedTable/TableContext";

const useTableHeader = ({ data, ...props }) => {
    const { getContext, setContext } = Provider;
    const { tableHeader = {}, tableSelected = [] } = getContext();
    const setStateContext = setContext();
    const { sortBy, sortType } = tableHeader;

    const numSelected = tableSelected.length;
    const rowCount = data.length;

    const onSelectAllClick = (event) => handleSelectAllClick(event, data, setStateContext);
    return {
        ...props,
        sortBy,
        sortType,
        numSelected,
        rowCount,
        onSelectAllClick
    };
};

export default useTableHeader;
