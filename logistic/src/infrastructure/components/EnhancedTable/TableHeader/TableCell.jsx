import { Grid } from "@mui/material";
import StyledTableCell from "infrastructure/components/common/table/components/cell";

const TableCell = ({ actions, checkbox, children, columns, handleWidth, idx, obj = {}, sortType, sortBy }) => {
    return (
        <StyledTableCell
            key={idx}
            style={{
                borderBottomLeftRadius:
                    idx === 0 && !(checkbox && actions.filter(({ type }) => type === "Batch").length > 0) ? "0.5em" : 0,
                borderTopLeftRadius:
                    idx === 0 && !(checkbox && actions.filter(({ type }) => type === "Batch").length > 0) ? "0.5em" : 0,
                borderBottomRightRadius:
                    idx === columns.length - 1 &&
                    !(actions && actions.filter(({ type }) => type === "Column").length > 0)
                        ? "0.5em"
                        : 0,
                borderTopRightRadius:
                    idx === columns.length - 1 &&
                    !(actions && actions.filter(({ type }) => type === "Column").length > 0)
                        ? "0.5em"
                        : 0,
                border: 0
            }}
            align="center"
            sortDirection={sortBy === obj?.id ? sortType : false}
        >
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                style={{
                    width: handleWidth ? handleWidth(idx) : "inherit"
                }}
            >
                {children}
            </Grid>
        </StyledTableCell>
    );
};

export default TableCell;
