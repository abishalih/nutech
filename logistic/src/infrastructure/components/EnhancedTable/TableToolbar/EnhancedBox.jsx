import { Box } from "@mui/material";

const EnhancedBox = ({ children, ...props }) => {
    return <Box sx={{ display: "flex", gap: ".5rem", ...props?.sx }}>{children}</Box>;
};

export default EnhancedBox;
