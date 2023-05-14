import { InputAdornment } from "@mui/material";
import TextBox from "infrastructure/components/common/TextBox";
import _debounce from "lodash/debounce";
import { imgSearch } from "presentation/assets/image";
import { useCallback } from "react";
import EnhancedBox from "../EnhancedBox";
import DatePicker from "./DatePicker";
import FilterAutocomplete from "./FilterAutocomplete";
import Period from "./Period";

export const ToolbarFilter = ({ title, tableFilterOptions = [], searchPlaceholder, styleIsExist, setStateContext }) => {
    const handlePeriod = ({ year, month }, id = "period") => {
        const value =
            month && month.length > 0
                ? month.map((monthValue) => `${year}-${monthValue < 10 ? "0" + monthValue : monthValue}`).join(",")
                : "";
        setStateContext("tableFilter", { [id]: value });
    };

    const handleAutocomplete = (value, id = "key") => {
        setStateContext("tableFilter", { [id]: value });
    };

    const debounceHandleAutocomplete = useCallback(_debounce(handleAutocomplete, 1000), []);

    return (
        <EnhancedBox sx={styleIsExist}>
            {searchPlaceholder && (
                <TextBox
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={imgSearch} alt="search icon" />
                            </InputAdornment>
                        )
                    }}
                    placeholder={`Cari ${searchPlaceholder}`}
                    onChange={({ target }) => debounceHandleAutocomplete(target.value)}
                    sx={{ width: "320px" }}
                />
            )}
            {tableFilterOptions.map(({ id, type, payload }, key) => {
                return (
                    <div style={{ width: "300px" }} key={key}>
                        {type === "datepicker" && <DatePicker {...payload} id={id} onChange={handleAutocomplete} />}
                        {type === "period" && <Period {...payload} id={id} onChange={handlePeriod} />}
                        {type === "autocomplete" && (
                            <FilterAutocomplete onChange={handleAutocomplete} {...payload} id={id} />
                        )}
                    </div>
                );
            })}
            {title}
        </EnhancedBox>
    );
};

export default ToolbarFilter;
