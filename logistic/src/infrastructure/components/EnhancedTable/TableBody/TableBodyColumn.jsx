const TableBodyColumn = ({ id, row, type }) => {
    if (type === "image")
        return (
            <td align="center">
                <img src={row[id]} alt="Foto" width="125px" />
            </td>
        );
    return <td align="center">{row[id]}</td>;
};

export default TableBodyColumn;
