import { signIn } from "features/authentication/authSlice";
import { SubmitButton } from "features/master/Product/AddProduct";
import TextField from "infrastructure/components/Forms/TextField";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 300px;
    justify-content: center;
    margin: 5rem auto;
    padding: 1rem;
    width: 500px;
`;
const Form = styled.div`
    display: grid;
    grid-gap: 1rem;
    margin: 1rem 0;
    width: 100%;
`;
function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}
const Login = () => {
    const query = useQuery();
    const dispatch = useDispatch();
    const [formData, setForm] = useState({
        username: "",
        password: ""
    });
    const updateForm = (payload) => {
        setForm({ ...formData, ...payload });
    };
    const handleLogin = async () => {
        const redirectUri = await query.get("redirect_uri");
        dispatch(signIn({ ...formData, redirectUri }));
    };
    const getFormLength = Object.keys(formData);
    const getDisabled =
        Object.keys(formData)
            .map((key) => formData[key])
            .filter((data) => data).length !== getFormLength.length;
    return (
        <Container>
            <Form>
                <TextField label="Username" name="username" onChange={updateForm} value={formData["username"]} />
                <TextField
                    label="Password"
                    name="password"
                    onChange={updateForm}
                    value={formData["password"]}
                    type="password"
                />
            </Form>
            <SubmitButton onClick={handleLogin} disabled={getDisabled}>
                Login
            </SubmitButton>
        </Container>
    );
};

export default Login;
