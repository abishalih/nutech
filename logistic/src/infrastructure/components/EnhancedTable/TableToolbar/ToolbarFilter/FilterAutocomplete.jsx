import AutoComplete from "infrastructure/components/common/main/AutoComplete";
import { useState } from "react";

const FilterAutocomplete = ({ id, onChange, type, placeholder = "Cari", noIcon = false }) => {
    const [labelValue, setLabelValue] = useState("");
    const handleChange = ({ key, customerNumber }) => {
        if (onChange) onChange(id === "customerNumber" ? customerNumber : key, id);
    };
    return (
        <AutoComplete
            id="key"
            delay={2000}
            labelValue={labelValue}
            noIcon={noIcon}
            onChange={handleChange}
            placeholder={placeholder}
            setLabelValue={setLabelValue}
            type={type}
        />
    );
};

export default FilterAutocomplete;
