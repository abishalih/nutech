import TextField from "infrastructure/components/Forms/TextField";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    margin: 1rem 0;
    width: 100%;
`;
const Photo = styled.input`
    margin: 1rem 0;
`;
const SubmitButton = styled.button`
    padding: 1rem;
    width: 100%;
`;
const AddProduct = ({ label = "", onClick, toggleDialog }) => {
    const [formData, setForm] = useState({});
    const updateForm = (payload) => {
        setForm({ ...formData, payload });
    };
    const handleClick = async (payload) => {
        await onClick(payload);
        toggleDialog();
    };
    return (
        <div>
            <Form>
                <TextField label="Nama barang" name="name" onChange={updateForm} value={formData["name"]} />
                <TextField
                    label="Harga beli"
                    name="buyPrice"
                    onChange={updateForm}
                    type="number"
                    value={formData["name"]}
                />
                <TextField
                    label="Harga jual"
                    name="sellPrice"
                    onChange={updateForm}
                    type="number"
                    value={formData["name"]}
                />
                <TextField label="Stok" name="stock" onChange={updateForm} type="number" value={formData["name"]} />
            </Form>
            <Photo type="file" accept=".jpg,.jpeg,.png" max-size="100000" />
            <SubmitButton onClick={handleClick}>{label}</SubmitButton>
        </div>
    );
};

export default AddProduct;
