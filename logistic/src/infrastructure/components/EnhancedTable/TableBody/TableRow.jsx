import StyledTableRow from "infrastructure/components/common/table/components/row";
import TableActions from "./TableActions";
import TableCheck from "./TableCheck";
import TableColumn from "./TableColumn";

const TableRow = (props) => {
    return (
        <StyledTableRow>
            <TableCheck {...props} />
            <TableColumn {...props} />
            <TableActions {...props} />
        </StyledTableRow>
    );
};

export default TableRow;
