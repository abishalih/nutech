import { useContext } from "react";
import TableContext from "../TableContext";
import TableBodyColumn from "./TableBodyColumn";

const TableBody = () => {
    const bodyProps = useContext(TableContext);
    const { columns = [], data = [] } = bodyProps;
    console.log({ columns, data });
    return (
        <thead>
            <tr>
                {data.map((datum, key) => (
                    <TableBodyColumn {...datum} {...bodyProps} key={key} />
                ))}
            </tr>
        </thead>
    );
};

export default TableBody;
