import styled from "styled-components";
import TableBody from "./TableBody";
import { TableProvider } from "./TableContext";
import TableDialog from "./TableDialog";
import TableHeader from "./TableHeader";
import TableToolbar from "./TableToolbar";
const Table = styled.table`
    width: 100%;
`;
const EnhancedTable = ({ actions = false, columns = [], data = [], toolbarActions = [] }) => {
    return (
        <TableProvider defaultProps={{ columns, data }}>
            <TableToolbar actions={toolbarActions} />
            <Table>
                <TableHeader actions={actions} />
                <TableBody actions={actions} data={data} />
            </Table>
            <TableDialog />
        </TableProvider>
    );
};

export default EnhancedTable;
