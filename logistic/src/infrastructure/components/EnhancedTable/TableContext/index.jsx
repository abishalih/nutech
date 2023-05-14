import { createContext, useState } from "react";

export const defaultDialogPayload = {
    container: null,
    isOpen: false,
    payload: {},
    title: "Dialog"
};

const TableContext = createContext({
    columns: [],
    data: [],
    dialog: defaultDialogPayload,
    toggleDialog: () => {},
    updateContext: () => {}
});

export const TableProvider = ({ defaultProps = {}, children }) => {
    const { columns = [], data = [] } = defaultProps;
    const [tableData, setTableData] = useState({ columns, data, dialog: defaultDialogPayload });

    const updateContext = (newData) => {
        setTableData({ ...tableData, ...newData });
    };

    const toggleDialog = (dialogPayload) => {
        const isDialogExist = !!dialogPayload;
        if (isDialogExist) updateContext({ ...tableData, dialog: { ...tableData.dialog, ...dialogPayload } });
        else updateContext({ ...tableData, dialog: defaultDialogPayload });
    };

    return (
        <TableContext.Provider value={{ ...tableData, toggleDialog, updateContext }}>{children}</TableContext.Provider>
    );
};

export default TableContext;
