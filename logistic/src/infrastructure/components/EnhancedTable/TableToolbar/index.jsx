import EnhancedBox from "./EnhancedBox";
import ToolbarActions from "./ToolbarActions";
import ToolbarFilter from "./ToolbarFilter";
import { useTableToolbar } from "./useTableToolbar";

export default function EnhancedTableToolbar(props) {
    const { isEmptyContent, styleIsExist, ...payload } = useTableToolbar(props);
    if (!isEmptyContent) {
        return (
            <EnhancedBox sx={styleIsExist}>
                <ToolbarFilter {...payload} />
                <ToolbarActions {...payload} />
            </EnhancedBox>
        );
    }
    return;
}
