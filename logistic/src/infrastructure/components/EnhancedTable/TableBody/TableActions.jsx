import { TableCell } from "@mui/material";
import TableActionButton from "./TableActionButton";

const TableActions = ({ actions, actionsCellProps, ...props }) => {
    if (actions.length > 0)
        return (
            <TableCell {...actionsCellProps}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "1rem"
                    }}
                >
                    {actions
                        .filter((action) => action.type === "Column")
                        .map((payload, key) => {
                            return <TableActionButton {...props} {...payload} key={key} />;
                        })}
                </div>
            </TableCell>
        );
    return null;
};

export default TableActions;
