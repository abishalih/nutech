import CloseIcon from "@mui/icons-material/Close";
import {
    // Button,
    Dialog,
    // DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Typography
} from "@mui/material";
import { defaultDialogProps } from "infrastructure/components/common/main/dialog";
// import Dialog from "./custom";
import * as Provider from "infrastructure/components/common/table/components/context";

export const useTableDialogUpdater = () => {
    const { useState, useStateUpdate } = Provider;
    const state = useState();
    const { dialog } = state;
    const updateState = useStateUpdate();
    const updateDialogInfo = (props) => {
        updateState("dialog", {
            ...dialog,
            ...props
        });
    };
    return { dialog, updateDialogInfo };
};

const TableDialog = () => {
    const { useState, useStateUpdate } = Provider;
    const state = useState();
    const updateState = useStateUpdate();
    const { dialog = defaultDialogProps } = state;
    const {
        content = <></>,
        open = false,
        // options = [],
        title = "",
        size = "sm",
        large = false,
        shrink = false
    } = dialog;

    const closeDialog = () => updateState("dialog", { ...defaultDialogProps });
    return (
        <Dialog
            fullWidth
            maxWidth={size}
            open={open}
            // sx={{ maxHeight: "700px" }}
            PaperProps={{
                sx: {
                    padding: shrink ? "0" : "24px",
                    borderRadius: "16px",
                    maxHeight: large ? "900px" : "700px"
                }
            }}
        >
            {title && (
                <DialogTitle
                    id="alert-dialog-title"
                    sx={{
                        minWidth: "300px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: !shrink ? "0" : "18px",
                        paddingBottom: "12px"
                    }}
                >
                    <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>{title}</Typography>
                    <IconButton color="primary" aria-label="Close Alert" component="span" onClick={closeDialog}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
            )}
            <DialogContent sx={{ padding: 0 }}>
                <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default TableDialog;
