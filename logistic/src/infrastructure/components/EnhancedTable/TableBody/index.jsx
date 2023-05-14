import TableBodyRow from "./TableBodyRow";

const TableBody = ({ data = [] }) => {
    return (
        <thead>
            {data.map((datum, key) => (
                <TableBodyRow key={key} {...datum} />
            ))}
        </thead>
    );
};

export default TableBody;
