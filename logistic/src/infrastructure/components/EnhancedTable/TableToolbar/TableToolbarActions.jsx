import { TableAction } from "./TableAction";

const TableToolbarActions = ({ actions = [], toggleDialog }) => {
    return (
        <div>
            {actions.map((action, key) => (
                <TableAction {...action} toggleDialog={toggleDialog} key={key} />
            ))}
        </div>
    );
};

export default TableToolbarActions;
