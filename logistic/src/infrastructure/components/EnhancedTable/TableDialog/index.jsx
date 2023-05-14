import CloseIcon from "@mui/icons-material/Close";
import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from "@mui/material";
import * as Provider from "infrastructure/components/EnhancedTable/TableContext";
import { defaultDialogProps } from "infrastructure/components/common/main/dialog";
import useTableDialog from "./useTableDialog";

export const useTableDialogUpdater = () => {
    const { getContext, setContext } = Provider;
    const { tableDialog = defaultDialogProps } = getContext();
    const setStateContext = setContext();

    const updateTableDialog = (payload) => setStateContext("tableDialog", payload);
    return { tableDialog, updateTableDialog };
};

const TableDialog = () => {
    const {
        closeDialog,
        content = null,
        isOpen = false,
        large = false,
        shrink = false,
        size = "sm",
        title = ""
    } = useTableDialog();
    return (
        <Dialog
            fullWidth
            maxWidth={size}
            open={isOpen}
            PaperProps={{
                sx: {
                    padding: shrink ? "0" : "24px",
                    borderRadius: "16px",
                    maxHeight: window?.screen?.availHeight < 1050 ? "90%" : large ? "900px" : "700px"
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
                        padding: !shrink ? "0" : "24px",
                        paddingBottom: "24px"
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: "700",
                            fontSize: "20px",
                            lineHeight: "30px"
                        }}
                    >
                        {title}
                    </Typography>
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
