import { useContext } from "react";
import styled from "styled-components";
import TableContext from "../TableContext";

const Screen = styled.div`
    background-color: rgba(72, 61, 61, 0.5);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
`;
const Wrapper = styled.div`
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); /**shadow */
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
    min-height: 300px;
    margin: 15% auto;
    padding: 2rem;
    width: 50%;
`;
const Header = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;
const CloseButton = styled.button`
    cursor: pointer;
    height: 25px;
    width: 25px;
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
                    <CloseButton onClick={handleClose}>X</CloseButton>
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
