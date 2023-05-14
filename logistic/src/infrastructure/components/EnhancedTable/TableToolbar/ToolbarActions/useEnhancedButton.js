import { defaultDialogProps } from "infrastructure/components/common/main/dialog";

export function useEnhancedButton(props, key) {
    const {
        data = [],
        numSelected = 0,
        dialogContainer,
        dialogPayload,
        dialogSize,
        icon,
        label,
        onClick,
        refreshTable,
        selected = [],
        tooltip,
        setStateContext
    } = props;
    const filteredData = data.filter((_, dataKey) => selected.includes(dataKey));

    const buttonProps = {
        "data-testid": `Batch Button ${key}`,
        dialogContainer,
        dialogPayload,
        dialogSize,
        label: `${label} (${numSelected})`,
        icon,
        idxButton: key,
        onClick: (event) => {
            if (onClick) onClick({ ...event, selected: filteredData });
        },
        refreshTable,
        selected: filteredData,
        sx: {
            border: "2px solid",
            textTransform: "none",
            fontSize: 16
        },
        toggleDialog: async () => {
            await setStateContext("tableDialog", defaultDialogProps);
            refreshTable();
        },
        tooltip,
        updateDialog: (payload) => setStateContext("tableDialog", payload),
        variant: "outlined"
    };
    return { buttonProps };
}

export function useEnhancedButtonMenu(props, key) {
    const {
        dialogContainer,
        dialogPayload,
        dialogSize,
        icon,
        label,
        onClick,
        refreshTable,
        selected = [],
        tooltip,
        setStateContext
    } = props;
    const buttonProps = {
        tooltip,
        onClick,
        selected,
        icon,
        label,
        idxButton: key,
        dialogContainer,
        dialogPayload,
        dialogSize,
        refreshTable,
        toggleDialog: async () => {
            await setStateContext("tableDialog", defaultDialogProps);
            refreshTable();
        },
        updateDialog: (payload) => setStateContext("tableDialog", payload)
    };
    return { buttonProps };
}

export default useEnhancedButton;
