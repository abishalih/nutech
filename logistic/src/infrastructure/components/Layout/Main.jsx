import styled from "styled-components";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    border: 1px solid #e2e8f0;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    min-height: 75vh;
    height: 100%;
    overflow: auto;
    width: 100%;
    padding: 0.5rem 1.25rem;
    margin: 0;
    ::-webkit-scrollbar: {
        height: 10px;
        width: 10px;
    }
    ::-webkit-scrollbar-thumb: {
        background-color: #dedede;
        border-radius: 2;
    }
`;

export const Main = ({ children }) => (
    <Container disableGutters fixed maxWidth={false}>
        {children}
    </Container>
);

export default Main;
