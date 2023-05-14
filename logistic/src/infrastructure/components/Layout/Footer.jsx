import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    color: rgb(107 114 128);
`;

const Footer = () => (
    <Container>
        <p>Copyright © 2023 Logistic</p>
    </Container>
);

export default Footer;
