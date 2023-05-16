import styled from "styled-components";

const List = styled.a`
    align-items: center;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.75rem;
    text-decoration: none;
    &:hover {
        background-color: #eee;
    }
`;
const NavigationMenuList = ({ icon, title, url }) => {
    return (
        <List href={url}>
            <img src={icon} alt="icon" />
            <span>{title}</span>
        </List>
    );
};

export default NavigationMenuList;
