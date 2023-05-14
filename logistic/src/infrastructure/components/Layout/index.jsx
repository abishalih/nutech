import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Navigation from "./Navigation";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 6fr;
    gap: 1.5rem;
    padding: 1rem;
    width: 95%;
`;

export const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Navigation />
            <SubWrapper>
                <Header />
                <Main>{children}</Main>
                <Footer />
            </SubWrapper>
        </Wrapper>
    );
};

export default Layout;
