import { TableCell, Tooltip } from "@mui/material";
import BoxTable from "infrastructure/components/common/table/components/box";
import { RenderedCell } from "infrastructure/components/common/table/components/cell";
import { generateContent, generateLookup } from "infrastructure/components/EnhancedTable/util";

const TableColumn = ({ checkbox, columns, idx, numberCellProps, row = {} }) => {
    const filteredColumns = columns.filter((column) => column.id !== "no").filter((column) => column.id !== "action");
    if (filteredColumns.length > 0)
        return (
            <>
                <TableCell {...numberCellProps}>
                    <BoxTable {...numberCellProps.boxTableProps}>{idx + 1}</BoxTable>
                </TableCell>
                {filteredColumns.map((column, key) => {
                    const { id, type, itemProps = {}, lookup, prefix = "", suffix = "" } = column;
                    const renderProps = {
                        checkbox,
                        column,
                        columns,
                        idx: key,
                        row
                    };
                    const generatedItemProps = typeof itemProps === "function" ? itemProps(row) : itemProps;
                    // if (column.RenderedCell) {
                    //   return (
                    //     <RenderedCell {...renderProps}>
                    //       {!row[column.id] && "-"}
                    //       {row[column.id] && (
                    //         <column.RenderedCell
                    //           {...row[column.id]}
                    //           payload={{ ...row, ...tablePayload }}
                    //         />
                    //       )}
                    //     </RenderedCell>
                    //   );
                    // }
                    return (
                        <Tooltip key={key} title={row[id]}>
                            <RenderedCell {...renderProps}>
                                {lookup
                                    ? generateLookup(row[id], lookup)
                                    : generateContent(row[id], type, generatedItemProps, prefix, suffix)}
                            </RenderedCell>
                        </Tooltip>
                    );
                })}
            </>
        );
    return null;
};

export default TableColumn;
