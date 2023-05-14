import EnhancedBox from "../EnhancedBox";
import EnhancedButton from "./EnhancedButton";
import EnhancedMenu from "./EnhancedMenu";
import { useEnhancedButton, useEnhancedButtonMenu } from "./useEnhancedButton";
import { useEnhancedMenu } from "./useEnhancedMenu";

export const ToolbarActions = ({ actions = [], styleIsExist, toolbarActions, ...props }) => {
    const {
        numSelected
        // anchorEl,
        // closeMenu,
        // data,
        // menuOpen,
        // refreshTable,
        // selected,
        // setAnchorEl,
        // setStateContext,
    } = props;
    const isActionExist = numSelected > 0 && actions.length > 0;
    const isToolbarActionExist = toolbarActions && toolbarActions.length > 0;
    return (
        <EnhancedBox sx={styleIsExist}>
            {isActionExist &&
                actions
                    .filter(({ type }) => type === "Batch")
                    .map((actionProps, actionKey) => {
                        const { buttonProps } = useEnhancedButton({ ...props, ...actionProps }, actionKey);
                        return <EnhancedButton key={actionKey} {...props} {...buttonProps} />;
                    })}
            {isToolbarActionExist &&
                toolbarActions.map((toolbarProps, toolbarKey) => {
                    const { menu = [] } = toolbarProps;
                    const { menuProps } = useEnhancedMenu(toolbarProps, toolbarKey);
                    const { buttonProps } = useEnhancedButtonMenu({ ...props, ...toolbarProps }, toolbarKey);
                    if (menu.length > 0) return <EnhancedMenu key={toolbarKey} {...props} {...menuProps} />;
                    return <EnhancedButton key={toolbarKey} {...props} {...buttonProps} />;
                })}
        </EnhancedBox>
    );
};

export default ToolbarActions;
