import PopUp from "infrastructure/components/common/main/popup";

const useRender = ({ dialog, label, type, value, onClick = false }) => {
    const openDialog = (e) => {
        PopUp.dialog.md(e, { title: label, content: dialog });
    };
    const textProps = {
        href: "javascript:void(0)",
        style: {
            display: "flex",
            gap: "8px",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            color: "#00B496",
            textDecoration: "none"
        },
        span: {
            style: {
                fontSize: "18px"
            }
        },
        onClick: dialog ? openDialog : onClick
    };
    return {
        label,
        textProps,
        type,
        value
    };
};

export default useRender;
