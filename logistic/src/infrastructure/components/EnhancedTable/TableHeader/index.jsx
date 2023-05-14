import { useContext } from "react";
import TableContext from "../TableContext";
import TableHeaderColumn from "./TableHeaderColumn";

const TableHeader = ({ actions = false }) => {
    const headerProps = useContext(TableContext);
    const { columns = [] } = headerProps;
    return (
        <thead>
            <tr>
                {columns.map((column, key) => (
                    <TableHeaderColumn {...column} {...headerProps} key={key} />
                ))}
                {actions && <TableHeaderColumn label="Aksi" />}
            </tr>
        </thead>
    );
};

export default TableHeader;
