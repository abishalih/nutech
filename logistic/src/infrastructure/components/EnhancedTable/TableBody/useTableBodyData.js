const useTableBodyData = ({ actions, checkbox, idx, isSelected, row }) => {
    const { disabledActions = [] } = row;
    const isItemSelected = isSelected(idx);
    const labelId = `enhanced-table-checkbox-${idx}`;
    const isCheckAction = checkbox && actions.filter(({ type }) => type === "Batch").length > 0;

    const numberCellProps = {
        component: "th",
        scope: "row",
        style: {
            borderBottomLeftRadius: "0.5em",
            borderTopLeftRadius: "0.5em",
            border: 0,
            fontSize: "11px"
        },
        boxTableProps: { noBorder: !isCheckAction, height: "2em" }
    };

    const actionsCellProps = {
        align: "right",
        style: {
            position: "sticky",
            right: 0,
            borderBottomRightRadius: "0.5em",
            borderTopRightRadius: "0.5em",
            border: 0,
            paddingLeft: "0.3em"
        }
    };
    return {
        actionsCellProps,
        disabledActions,
        idx,
        isCheckAction,
        isItemSelected,
        labelId,
        numberCellProps,
        row
    };
};

export default useTableBodyData;
