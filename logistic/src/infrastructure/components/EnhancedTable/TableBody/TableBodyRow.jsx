import { useContext } from "react";
import TableContext from "../TableContext";
import TableBodyColumn from "./TableBodyColumn";

const TableBodyRow = ({ isActions = false, ...row }) => {
    const { columns = [], toggleDialog } = useContext(TableContext);
    return (
        <tr>
            {columns.map((column, key) => (
                <TableBodyColumn {...column} row={row} key={key} />
            ))}
            {isActions && <TableBodyColumn row={row} id="actions" toggleDialog={toggleDialog} />}
        </tr>
    );
};

export default TableBodyRow;
