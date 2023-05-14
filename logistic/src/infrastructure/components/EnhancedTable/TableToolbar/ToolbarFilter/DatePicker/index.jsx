import Picker from "infrastructure/components/common/forms/components/picker/datepicker";
import { useFormItem } from "./useFormItem";

const DatePicker = ({ placeholder, ...props }) => {
    const { disabled, handleChange, testId, value } = useFormItem(props);
    return (
        <Picker
            data-testid={testId}
            disabled={disabled}
            onChange={handleChange}
            placeholder={placeholder}
            value={value}
        />
    );
};

export default DatePicker;
