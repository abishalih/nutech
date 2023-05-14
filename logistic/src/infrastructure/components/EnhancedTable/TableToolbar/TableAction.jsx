export const TableAction = ({ dialog, label = "Action", onClick, title = label, toggleDialog }) => {
    const handleDialog = () =>
        toggleDialog({
            container: dialog,
            isOpen: true,
            title,
            payload: {
                label,
                onClick,
                toggleDialog
            }
        });
    const isDialogExist = !!dialog;
    const handleClick = isDialogExist ? handleDialog : onClick;
    return <button onClick={handleClick}>{label}</button>;
};
