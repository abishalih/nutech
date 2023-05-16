import { LIST_FEATURE } from "app/common";
import styled from "styled-components";
import NavigationMenuList from "./NavigationMenuList";
import useLayoutNavigation from "./useLayoutNavigation";

const Container = styled.div`
    align-items: flex-start;
    border: 1px solid #e2e8f0; /**border */
    border-radius: 0.75rem; /*rounded-xl 12px */
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); /**shadow */
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    padding: 1.5rem 0;
    width: 100%;
`;
const List = styled.div`
    display: flex;
    flex-direction: column;
`;
const Navigation = () => {
    const navProps = useLayoutNavigation();
    return (
        <Container>
            <List>
                {LIST_FEATURE.map((listProps, menuKey) => (
                    <NavigationMenuList {...navProps} {...listProps} key={menuKey} idx={menuKey} />
                ))}
            </List>
        </Container>
    );
};

export default Navigation;
