import { FormControl, Grid, MenuItem, Pagination, Select } from "@mui/material";
import { useTablePagination } from "./useTablePagination";

const TablePagination = (props) => {
    const { count, handlePageChange, handleShowChange, page, rowsPerPageOptions, show } = useTablePagination(props);
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item md={2} display="flex" alignItems="center" gap={1}>
                Show
                <FormControl variant="standard" margin="dense">
                    <Select
                        disableUnderline
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={show}
                        onChange={handleShowChange}
                        data-testid="table-pagination-rows-per-page"
                    >
                        {rowsPerPageOptions.map((value, key) => (
                            <MenuItem value={value} key={key}>
                                {value} lines
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <Pagination
                    color="primary"
                    count={Math.ceil(count / show)}
                    page={page}
                    onChange={handlePageChange}
                    shape="rounded"
                    data-testid="table-pagination-page"
                />
            </Grid>
        </Grid>
    );
};

export default TablePagination;
