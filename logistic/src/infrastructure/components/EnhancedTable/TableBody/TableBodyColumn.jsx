import styled from "styled-components";

const Actions = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 0.25rem;
`;
const TableBodyColumn = ({ id, row, toggleDialog, type }) => {
    if (id === "actions") {
        const actions = row[id] || [];
        return (
            <td align="center">
                <Actions>
                    {actions.map(({ dialog, label, onClick, title = label }, key) => {
                        const handleDialog = (row) =>
                            toggleDialog({
                                container: dialog,
                                isOpen: true,
                                title,
                                payload: {
                                    label,
                                    onClick,
                                    row,
                                    toggleDialog
                                }
                            });
                        const isDialogExist = !!dialog;
                        const handleClick = isDialogExist ? handleDialog : onClick;
                        return (
                            <button key={key} onClick={() => handleClick(row)}>
                                {label}
                            </button>
                        );
                    })}
                </Actions>
            </td>
        );
    }
    if (type === "image")
        return (
            <td align="center">
                <img src={row[id]} alt="Foto" width="125px" />
            </td>
        );
    return <td align="center">{row[id]}</td>;
};

export default TableBodyColumn;
