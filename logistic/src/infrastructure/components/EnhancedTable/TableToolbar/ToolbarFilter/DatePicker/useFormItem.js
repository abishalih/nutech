import { getFormattedDate } from "infrastructure/utils/useDate";
import { useState } from "react";

export function useFormItem({ disabled, id = "datepicker", onChange, testId }) {
    const [formPayload, setFormPayload] = useState({});
    const updateFormPayload = (updatedPayload) => setFormPayload({ ...formPayload, ...updatedPayload });
    const handleChange = (value) => {
        const newDate = new Date(value);
        updateFormPayload({ [id]: newDate });
        onChange(getFormattedDate(newDate, "YYYY-MM-DD"), id);
    };

    return {
        disabled,
        handleChange,
        testId,
        value: formPayload[id]
    };
}
