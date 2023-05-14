import Proof from "infrastructure/components/common/template/dialog/proof";
import { getKeyByValue } from "infrastructure/utils/objUtils";
import { getFormattedDate } from "infrastructure/utils/useDate";
import TableRender from "./TableRender";

export const generateContent = (value = "", type = "string", attr = {}, prefix = "", suffix = "") => {
    let result;
    if (value === "") result = "-";
    else {
        const {
            // dialog = {},
            disabled = false,
            format,
            lang = "id",
            style = {}
            // row=[],
        } = attr;
        const props = { value, type, style };
        switch (type) {
            case "date":
                result = getFormattedDate(value, format, lang);
                break;

            case "string":
                if (typeof value === "string") {
                    result = value.toString().substring(0, 44);
                    if (value.toString().length > 44) result += "...";
                    else result = `${prefix} ${result} ${suffix}`;
                } else result = value;
                break;

            case "proof":
                result = (
                    <TableRender
                        {...props}
                        disabled={disabled}
                        label={disabled ? "-" : lang === "id" ? "Lihat Bukti" : "See the proof"}
                        dialog={<Proof {...value} />}
                    />
                );
                break;

            default:
                result = <TableRender {...props} />;
                break;
        }
    }
    return result;
};
export const generateLookup = (value, lookup = {}) => {
    const result = getKeyByValue(lookup, value);
    if (result) return result;
    return "-";
};

export function descendingComparator(a, b, sortBy) {
    if (b[sortBy] < a[sortBy]) {
        return -1;
    }
    if (b[sortBy] > a[sortBy]) {
        return 1;
    }
    return 0;
}

export function getComparator(sortType, sortBy) {
    return sortType === "desc"
        ? (a, b) => descendingComparator(a, b, sortBy)
        : (a, b) => -descendingComparator(a, b, sortBy);
}

export function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
