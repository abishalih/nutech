import { defaultDialogProps } from "infrastructure/components/common/main/dialog";
import * as Provider from "infrastructure/components/EnhancedTable/TableContext";

const useTableDialog = () => {
    const { getContext, setContext } = Provider;
    const { tableDialog = defaultDialogProps } = getContext();
    const setStateContext = setContext();
    const closeDialog = () => setStateContext("tableDialog", defaultDialogProps);
    return {
        ...tableDialog,
        closeDialog,
        setStateContext
    };
};

export default useTableDialog;
