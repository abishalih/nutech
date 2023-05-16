import styled from "styled-components";
import HeaderAccount from "./HeaderAccount/account";

const Container = styled.a`
    align-items: center;
    border: 1px solid #e2e8f0; /**border */
    border-radius: 0.75rem; /*rounded-xl 12px */
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); /**shadow */
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    padding: 1.25rem; /*p-5 20px */
    text-decoration: none;
    width: 100%;
`;

const Header = () => (
    <Container href="/">
        <p>Logistic</p>
        <HeaderAccount />
    </Container>
);

export default Header;
