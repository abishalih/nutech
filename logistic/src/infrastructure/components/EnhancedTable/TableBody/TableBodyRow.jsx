import { useContext } from "react";
import TableContext from "../TableContext";
import TableBodyColumn from "./TableBodyColumn";

const TableBodyRow = (row) => {
    const { columns = [] } = useContext(TableContext);
    return (
        <tr>
            {columns.map((column, key) => (
                <TableBodyColumn {...column} row={row} key={key} />
            ))}
        </tr>
    );
};

export default TableBodyRow;
