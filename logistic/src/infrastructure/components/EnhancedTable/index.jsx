import { Box, Table, TableContainer } from "@mui/material";
import TableBody from "./TableBody";
import Provider from "./TableContext";
import TableDialog from "./TableDialog";
import TableHeader from "./TableHeader";
import TablePagination from "./TablePagination";
import TableToolbar from "./TableToolbar";
import useTable from "./useTable";

export const EnhancedTable = (props) => {
    const {
        payload,
        propsBody,
        propsHeader,
        propsPagination,
        propsTable,
        propsTableContainer,
        propsToolbar,
        refreshTable,
        searchKeyword
    } = useTable(props);
    return (
        <Box display={"grid"} mb={2} gap={"1rem"}>
            <Provider tablePayload={payload}>
                <TableToolbar {...propsToolbar} refreshTable={refreshTable} />
                <TableContainer {...propsTableContainer}>
                    <Table {...propsTable}>
                        <TableHeader {...propsHeader} />
                        <TableBody {...propsBody} refreshTable={refreshTable} searchKeyword={searchKeyword} />
                    </Table>
                </TableContainer>
                <TablePagination {...propsPagination} />
                <TableDialog />
            </Provider>
        </Box>
    );
};

export default EnhancedTable;
