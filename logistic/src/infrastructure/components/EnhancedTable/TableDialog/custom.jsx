import { Dialog, withStyles } from "@mui/material";

const styles = {
    dialogPaper: {
        maxHeight: "80vh"
    }
};

const YourDialog = ({ classes, children }) => <Dialog classes={{ paper: classes.dialogPaper }}>{children}</Dialog>;

export default withStyles(styles)(YourDialog);
