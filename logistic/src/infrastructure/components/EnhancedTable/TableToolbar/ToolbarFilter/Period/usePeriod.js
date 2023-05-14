import { monthNames, namaBulan } from "infrastructure/components/common/main/select/month/constants";
import { useState } from "react";

export function usePeriod({ placeholder = "- Pilih Period -", lang = "en", onChange }) {
    const monthList = lang === "id" ? namaBulan : monthNames;
    const [monthToggle, toggleMonth] = useState(false);
    const [localValue, setLocalValue] = useState({
        year: "",
        month: []
    });
    const { year, month } = localValue;
    const selectedMonthName = month.map(({ label }) => label);

    const handleYear = (value) => {
        toggleMonth(true);
        setLocalValue({ ...localValue, month: [], year: value });
    };
    const handleMonth = ({ id, label }) => {
        let newMonth = [];
        if (selectedMonthName.includes(label)) newMonth = [...month.filter((old) => old.id !== id)];
        else newMonth = [...month.filter((old) => old.id !== id), { id, label }];

        setLocalValue({
            ...localValue,
            month: newMonth
        });

        const selectedMonth = newMonth.map((newSelected) => newSelected.id);
        if (onChange) {
            onChange({
                ...localValue,
                month: selectedMonth
            });
        }
    };

    const textMonth = selectedMonthName.length > 0 ? selectedMonthName.join(", ") : "all months";
    const textValue = year !== "" && textMonth !== "all months" ? `${year} ${textMonth}` : "";

    return {
        handleMonth,
        handleYear,
        setLocalValue,
        month,
        monthList,
        monthToggle,
        placeholder,
        selectedMonthName,
        textValue,
        year
    };
}
export default usePeriod;
