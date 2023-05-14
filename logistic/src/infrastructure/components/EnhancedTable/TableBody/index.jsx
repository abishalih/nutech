import { TableBody } from "@mui/material";
import LoadingProgress from "infrastructure/components/common/LoadingProgress";
import { SpannedCell } from "infrastructure/components/common/table/components/cell";
import TableRow from "./TableRow";
import useTableBody from "./useTableBody";
import useTableBodyData from "./useTableBodyData";

const EnhancedTableBody = (props) => {
    const bodyProps = useTableBody(props);
    const { columns = [], data = [], emptyRows, loading } = bodyProps;
    return (
        <TableBody>
            {loading && (
                <SpannedCell columns={columns}>
                    <LoadingProgress />
                </SpannedCell>
            )}
            {!loading && emptyRows && <SpannedCell columns={columns}>Data tidak ditemukan</SpannedCell>}
            {!loading &&
                !emptyRows &&
                data.map((row, idx) => {
                    const dataProps = useTableBodyData({ ...bodyProps, idx, row });
                    return <TableRow {...bodyProps} {...dataProps} />;
                })}
        </TableBody>
    );
};

export default EnhancedTableBody;
