import TableBodyRow from "./TableBodyRow";

const TableBody = ({ actions = false, data = [] }) => {
    return (
        <thead>
            {data.map((datum, key) => (
                <TableBodyRow key={key} {...datum} isActions={actions} />
            ))}
        </thead>
    );
};

export default TableBody;
