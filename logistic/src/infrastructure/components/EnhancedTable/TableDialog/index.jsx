import { useContext } from "react";
import styled from "styled-components";
import TableContext from "../TableContext";

const Screen = styled.div`
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
`;
const Wrapper = styled.div`
    background-color: white;
    border: 1px solid black;
    height: 500px;
    margin: 15% auto;
    padding: 1rem;
    width: 50%;
`;
const Header = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    button {
        height: 25px;
        width: 25px;
    }
`;
const Content = styled.div`
    padding: 1rem 0;
`;
const Dialog = () => {
    const { dialog, toggleDialog } = useContext(TableContext);
    const { container: Container, isOpen, payload, title } = dialog;
    const handleClose = () => toggleDialog();

    if (!isOpen) return null;
    return (
        <Screen>
            <Wrapper>
                <Header>
                    <h3>{title}</h3>
                    <button onClick={handleClose}>X</button>
                </Header>
                <hr />
                <Content>
                    <Container {...payload} />
                </Content>
            </Wrapper>
        </Screen>
    );
};

export default Dialog;
