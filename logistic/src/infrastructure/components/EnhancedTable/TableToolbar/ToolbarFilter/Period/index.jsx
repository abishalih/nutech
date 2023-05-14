import { useClickOutside } from "infrastructure/utils/useClickOutside";
import { getPeriodProps } from "./common";
import ListMonth from "./ListMonth";
import ListYear from "./ListYear";
import TextPeriod from "./TextPeriod";
import { usePeriod } from "./usePeriod";

export const Period = ({ inputProps, ...props }) => {
    const [ref, targetRef, isOpen, toggleDropdown] = useClickOutside();
    const { monthToggle, ...periodProps } = usePeriod(props);
    const periodStyle = getPeriodProps(isOpen, monthToggle);
    const { list } = periodStyle;
    return (
        <div>
            <div ref={ref}>
                <TextPeriod
                    {...periodProps}
                    periodStyle={periodStyle}
                    inputProps={inputProps}
                    isOpen={isOpen}
                    toggleDropdown={toggleDropdown}
                />
            </div>
            <div {...list} ref={targetRef}>
                <ListYear {...periodProps} periodStyle={periodStyle} />
                <ListMonth {...periodProps} periodStyle={periodStyle} />
            </div>
        </div>
    );
};
export default Period;
