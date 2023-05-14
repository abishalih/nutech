import { Tooltip } from "@mui/material";
import Button from "infrastructure/components/common/main/Button";

export function EnhancedButton(Prop) {
    const {
        dialogContainer,
        dialogPayload,
        dialogSize,
        icon,
        idxButton,
        label,
        large = false,
        onClick,
        shrink = false,
        refreshTable,
        tableSelected = [],
        toggleDialog,
        tooltip,
        updateDialog
    } = Prop;

    const dialogProps = {
        content: (
            <Prop.dialogContainer
                {...dialogPayload}
                refreshTable={refreshTable}
                tableSelected={tableSelected}
                toggleDialog={toggleDialog}
                updateDialog={updateDialog}
            />
        ),
        isOpen: true,
        title: label,
        large,
        size: dialogSize,
        shrink
    };
    return (
        <Tooltip title={tooltip}>
            <Button
                onClick={(event) => {
                    if (dialogContainer) updateDialog(dialogProps);
                    if (onClick) onClick({ ...event, tableSelected });
                }}
                data-testid={`Button ${idxButton}`}
                icon={icon}
            >
                {label}
            </Button>
        </Tooltip>
    );
}
export default EnhancedButton;
