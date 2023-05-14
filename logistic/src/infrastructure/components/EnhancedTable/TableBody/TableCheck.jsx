import { Checkbox, TableCell } from "@mui/material";
import { handleClick } from "infrastructure/components/common/table/utils";
import { containsMatchingElements } from "infrastructure/utils/useArray";

const TableCheck = ({
    actions,
    checkbox,
    disabledActions,
    idx,
    isCheckAction,
    isItemSelected,
    labelId,
    tableSelected,
    setStateContext
}) => {
    if (isCheckAction)
        return (
            <TableCell padding="checkbox" align="center">
                <Checkbox
                    color="primary"
                    size="small"
                    checked={isItemSelected}
                    inputProps={{
                        "aria-labelledby": labelId
                    }}
                    sx={{ width: "30px", height: "30px" }}
                    onClick={(event) => checkbox && handleClick(event, idx, tableSelected, setStateContext)}
                    data-testid={`CheckBox ${idx}`}
                    disabled={containsMatchingElements(
                        disabledActions,
                        actions.filter(({ type }) => type === "Batch").map((action) => action.id)
                    )}
                />
            </TableCell>
        );
    return null;
};

export default TableCheck;
