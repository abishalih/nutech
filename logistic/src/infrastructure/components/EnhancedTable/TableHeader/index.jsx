import { Grid, TableHead, TableRow, Typography } from "@mui/material";
import BoxTable from "infrastructure/components/common/table/components/box";
import StyledTableCell from "infrastructure/components/common/table/components/cell";
import Checkbox from "infrastructure/components/common/table/components/checkbox";
import handleIcon from "infrastructure/utils/handleIconTable";
import TableCell from "./TableCell";
import useTableHeader from "./useTableHeader";

const TableHeader = (props) => {
    const {
        actions,
        checkbox,
        columns = [],
        handleWidth,
        idn,
        lang,
        lastSort = 1,
        sort,
        handleSort,
        startSortIndex,

        sortBy,
        sortType = "asc",
        numSelected,
        rowCount,
        onSelectAllClick
    } = useTableHeader(props);
    return (
        <TableHead style={{ backgroundColor: "white" }}>
            <TableRow>
                {checkbox && actions.filter(({ type }) => type === "Batch").length > 0 && (
                    <StyledTableCell
                        align="center"
                        padding="checkbox"
                        style={{
                            borderBottomLeftRadius: "0.5em",
                            borderTopLeftRadius: "0.5em"
                        }}
                    >
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onClick={onSelectAllClick}
                            size="small"
                            data-testid="CheckBox All"
                        />
                    </StyledTableCell>
                )}
                {columns.length > 0 &&
                    columns.map((obj, idx) => {
                        const cellProps = {
                            actions,
                            checkbox,
                            columns,
                            handleWidth,
                            idx,
                            obj,
                            sortBy,
                            sortType
                        };
                        const { label } = obj;
                        return (
                            <TableCell {...cellProps}>
                                <Grid item>
                                    {idx > 0 ? (
                                        <BoxTable columns>
                                            <Typography
                                                variant="caption"
                                                style={{
                                                    fontWeight: "bold",
                                                    color: "white",
                                                    fontSize: "11px"
                                                }}
                                            >
                                                {label}
                                            </Typography>
                                        </BoxTable>
                                    ) : (
                                        <div style={{ height: "1.9em" }}>
                                            <Typography
                                                variant="caption"
                                                style={{
                                                    fontWeight: "bold",
                                                    color: "white",
                                                    fontSize: "11px",
                                                    paddingLeft: "1em"
                                                }}
                                            >
                                                {label}
                                            </Typography>
                                        </div>
                                    )}
                                </Grid>
                                <Grid item>
                                    {(idx > startSortIndex && idx < columns.length - lastSort) ||
                                    columns[columns.length - 1].id !== "action"
                                        ? handleIcon(idx, idn, sort, obj, handleSort)
                                        : null}
                                </Grid>
                            </TableCell>
                        );
                    })}
                {actions && actions.filter(({ type }) => type === "Column").length > 0 && (
                    <StyledTableCell
                        style={{
                            position: "sticky",
                            right: 0,
                            background: "#005EB8",
                            border: 0,
                            borderBottomRightRadius: "0.5em",
                            borderTopRightRadius: "0.5em"
                        }}
                        align="center"
                    >
                        <BoxTable columns>
                            <Typography
                                variant="caption"
                                style={{
                                    fontWeight: "bold",
                                    color: "white",
                                    fontSize: "11px"
                                }}
                            >
                                {lang === "en" ? "Action" : "Aksi"}
                            </Typography>
                        </BoxTable>
                    </StyledTableCell>
                )}
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;
