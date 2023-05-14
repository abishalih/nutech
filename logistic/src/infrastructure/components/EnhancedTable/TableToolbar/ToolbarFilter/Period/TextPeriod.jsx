import { InputAdornment } from "@mui/material";
import TextBox from "infrastructure/components/common/TextBox";
import { imgCalendar } from "presentation/assets/image";

export const TextPeriod = ({ inputProps, isOpen, placeholder, periodStyle, toggleDropdown, textValue }) => {
    return (
        <TextBox
            value={textValue}
            onClick={() => toggleDropdown(!isOpen)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <img src={imgCalendar} style={{ height: "20px", marginRight: "12px" }} /> |
                    </InputAdornment>
                )
            }}
            placeholder={placeholder}
            inputProps={{
                "data-testid": "TextBox",
                style: { ...inputProps?.style, ...periodStyle.text }
            }}
        />
    );
};

export default TextPeriod;
