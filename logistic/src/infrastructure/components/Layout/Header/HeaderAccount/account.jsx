import { signOut } from "features/authentication/authSlice";
import { generateInitialName } from "infrastructure/utils/useStringManipulation";
import { useUserInfo } from "infrastructure/utils/useUserInfo";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 1.25rem;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h1 {
        font-size: 12px;
        font-weight: 400;
        color: rgb(75 85 99); /** text-gray-600 */
    }
    h2 {
        font-weight: 400;
        font-size: 14px;
        color: rgb(55 65 81); /** text-gray-800 */
    }
`;
const Avatar = styled.div`
    align-items: center;
    background: #eee;
    border: 2px solid #027cb7;
    border-radius: 100%;
    color: #027cb7;
    cursor: pointer;
    display: flex;
    font-size: 21px;
    font-weight: 900;
    height: 50px;
    justify-content: center;
    width: 50px;
`;

const HeaderAccount = () => {
    const dispatch = useDispatch();
    const { username = "User Name" } = useUserInfo();
    const toggleDrawer = () => dispatch(signOut());
    return (
        <Container>
            <Wrapper>
                <h1 className={"text-gray-600"}>Selamat pagi,</h1>
                <h2 className={"text-gray-800"}>{username ? username : "Login is under construction!"}</h2>
            </Wrapper>
            <Avatar onClick={toggleDrawer}>{generateInitialName(username)}</Avatar>
        </Container>
    );
};

export default HeaderAccount;
