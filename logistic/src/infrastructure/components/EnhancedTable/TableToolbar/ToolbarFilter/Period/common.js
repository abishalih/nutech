export const getPeriodProps = (isOpen, isMonthOpen) => ({
    text: {
        borderRadius: "4px",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24px",
        padding: "12.5px"
    },
    list: {
        style: {
            background: "white",
            border: "1px solid #CCC",
            borderBottomRightRadius: "5px",
            borderBottomLeftRadius: "5px",
            display: isOpen ? "flex" : "none",
            maxHeight: "200px",
            overflow: "hidden",
            position: "absolute",
            // zIndex: "10",
            zIndex: 999
        }
    },
    year: {
        sx: {
            width: "150px",
            maxHeight: "200px",
            overflow: "auto",
            padding: 0,
            background: "#FFF",
            color: "inherit",
            fontWeight: 400,
            ".active": {
                background: "#F0F0F0",
                color: "blue",
                fontWeight: 700
            }
        }
    },
    date: {
        sx: {
            display: isMonthOpen ? "block" : "none",
            width: "350px",
            maxHeight: "200px",
            overflow: "auto",
            padding: 0
        }
    },
    option: {
        sx: {
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        }
    }
});
