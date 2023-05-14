import { useContext } from "react";
import TableContext from "../TableContext";
import TableBodyRow from "./TableBodyRow";

const TableBody = ({ data = [] }) => {
    const bodyProps = useContext(TableContext);
    const { columns = [] } = bodyProps;
    console.log({ columns, data });
    return (
        <thead>
            {data.map((datum, key) => (
                <TableBodyRow key={key} {...datum} />
            ))}
        </thead>
    );
};

export default TableBody;
