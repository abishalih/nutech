import { Checkbox, Divider, List, ListItem, ListItemText } from "@mui/material";

export const ListMonth = ({
    handleMonth,
    localValue,
    month,
    monthList,
    periodStyle,
    selectedMonthName,
    setLocalValue,
    year
}) => {
    return (
        <List component="nav" {...periodStyle.date}>
            <ListItem button onClick={() => setLocalValue({ ...localValue, year, month: [] })} data-testid={"List All"}>
                <Checkbox checked={month.length === 0} />
                <ListItemText primary={"- All months -"} />
            </ListItem>
            <Divider />
            {monthList?.length > 0 &&
                monthList.map((dateValue, key) => (
                    <div key={key}>
                        <ListItem
                            button
                            onClick={() => handleMonth({ id: key + 1, label: dateValue })}
                            data-testid={`List ${key}`}
                        >
                            <Checkbox checked={selectedMonthName?.includes(dateValue)} />
                            <ListItemText primary={dateValue} />
                        </ListItem>
                        <Divider />
                    </div>
                ))}
        </List>
    );
};

export default ListMonth;
