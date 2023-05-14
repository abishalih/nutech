import { IconButton, Tooltip } from "@mui/material";
import { defaultDialogProps } from "infrastructure/components/common/main/dialog";
import BoxTable from "infrastructure/components/common/table/components/box";

const TableActionButton = ({
    tableDialog,
    dialogPayload,
    dialogSize,
    disabledActions,
    tableMeta,
    icon,
    iconDisabled,
    id,
    label,
    labelDisabled,
    large = false,
    onClick,
    refreshTable,
    row = {},
    setStateContext,
    shrink = false,
    toolbarProps,
    tooltip,
    tooltipDisabled,
    ...Props
}) => {
    const DialogContainer = () => (
        <Props.dialogContainer
            {...row}
            {...dialogPayload}
            toolbarProps={toolbarProps}
            refreshTable={refreshTable}
            updateDialog={(updatePayload) => setStateContext("tableDialog", { ...tableDialog, ...updatePayload })}
            toggleDialog={async () => {
                await setStateContext("tableDialog", defaultDialogProps);
                refreshTable(tableMeta);
            }}
        />
    );
    const handleClick = () => {
        const isNotDisabled = !(disabledActions && disabledActions.includes(id));
        if (isNotDisabled) {
            if (onClick) onClick(row);
            if (Props.dialogContainer) {
                setStateContext("tableDialog", {
                    content: <DialogContainer />,
                    isOpen: true,
                    title: label,
                    large,
                    size: dialogSize || tableDialog.size,
                    shrink
                });
            }
        }
    };
    return (
        <BoxTable height="2em">
            <Tooltip
                title={
                    !(disabledActions && disabledActions.includes(id))
                        ? tooltip || label
                        : tooltipDisabled || labelDisabled
                }
                placement={!(disabledActions && disabledActions.includes(id)) ? "bottom" : "left"}
            >
                <IconButton color="primary" component="span" onClick={handleClick} size={"small"}>
                    {(!disabledActions || !disabledActions.includes(id)) && icon && icon}
                    {disabledActions && disabledActions.includes(id) && iconDisabled && iconDisabled}
                </IconButton>
            </Tooltip>
        </BoxTable>
    );
};

export default TableActionButton;
