import { Divider, List, ListItem, ListItemText } from "@mui/material";
import { imgArrowRight } from "presentation/assets/image";

export const ListYear = ({ handleYear, periodStyle, year }) => {
    return (
        <List component="nav" {...periodStyle.year}>
            {[2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013].map((yearValue, key) => (
                <div key={key}>
                    <ListItem
                        button
                        onClick={() => handleYear(yearValue)}
                        data-testid={`List ${key}`}
                        className={year === yearValue ? "active" : "inactive"}
                    >
                        <ListItemText primary={yearValue} />
                        <img src={imgArrowRight} alt="" />
                    </ListItem>
                    <Divider />
                </div>
            ))}
        </List>
    );
};

export default ListYear;
