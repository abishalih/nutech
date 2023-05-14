import { Menu, MenuItem } from "@mui/material";
import Button from "infrastructure/components/common/main/Button";

export function EnhancedMenu(props) {
    const { icon, label, anchorEl, setAnchorEl, menuOpen, closeMenu, menu, idxMenu } = props;
    return (
        <div>
            <Button onClick={(e) => setAnchorEl(e.target)} data-testid={`Button ${idxMenu}`} icon={icon}>
                {label}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={closeMenu}
                MenuListProps={{
                    "aria-labelledby": "basic-button"
                }}
                PaperProps={{
                    style: { width: anchorEl && anchorEl.offsetWidth }
                }}
            >
                {menu.map((item, menuKey) => (
                    <MenuItem
                        onClick={(event) => {
                            item.onClick(event);
                            closeMenu();
                        }}
                        key={menuKey}
                    >
                        {item.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default EnhancedMenu;
