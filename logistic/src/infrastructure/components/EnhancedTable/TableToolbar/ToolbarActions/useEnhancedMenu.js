export function useEnhancedMenu(props, key) {
    const { icon, label, anchorEl, setAnchorEl, menuOpen, closeMenu, menu } = props;
    const menuProps = {
        anchorEl,
        closeMenu,
        icon,
        idxMenu: key,
        label,
        menuOpen,
        menu,
        setAnchorEl
    };
    return { menuProps };
}

export default useEnhancedMenu;
