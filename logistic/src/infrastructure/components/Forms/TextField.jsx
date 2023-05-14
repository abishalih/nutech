import styled from "styled-components";

const Container = styled.div`
    label {
        display: block;
    }
    input {
        display: block;
        padding: 0.5rem;
        width: 95%;
    }
    width: 100%;
`;
const TextField = ({ form = "form", name, label = "Textfield", onChange, ...props }) => {
    const handleChange = ({ target }) => {
        const { value } = target;
        onChange({ [name]: value });
    };
    return (
        <Container>
            <label for="css">{label}</label>
            <input {...props} id={`${form}-${name}`} name={name} onChange={handleChange} />
        </Container>
    );
};

export default TextField;
