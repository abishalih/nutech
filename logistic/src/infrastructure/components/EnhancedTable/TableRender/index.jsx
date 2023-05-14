import useRender from "./useRender";

const TableRender = ({ disabled, ...props }) => {
    const { textProps, value, label } = useRender(props);
    if (!disabled)
        return (
            <a {...textProps}>
                <span {...textProps.span}>•</span> <span>{label || value}</span>
            </a>
        );
    return label || value;
};

export default TableRender;
