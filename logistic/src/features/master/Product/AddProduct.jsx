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
export const SubmitButton = styled.button`
    padding: 1rem;
    width: 100%;
`;
const AddProduct = ({ label = "", onClick, toggleDialog }) => {
    const [formData, setForm] = useState({
        name: "New Product",
        buyPrice: null,
        sellPrice: null,
        stock: 1,
        photoUrl: ""
    });
    const updateForm = (payload) => {
        setForm({ ...formData, ...payload });
    };
    const handleClick = async () => {
        await onClick({ ...formData, id: Date.now() });
        toggleDialog();
    };

    const handleFileChange = ({ target }) => {
        let imageFile = target.files[0];
        if (imageFile) {
            const photoUrl = URL.createObjectURL(imageFile);
            updateForm({ photoUrl });
        }
    };

    const getFormLength = Object.keys(formData);
    const getDisabled =
        Object.keys(formData)
            .map((key) => formData[key])
            .filter((data) => data).length !== getFormLength.length;
    return (
        <div>
            <Form>
                <TextField label="Nama barang" name="name" onChange={updateForm} value={formData["name"]} />
                <TextField
                    label="Harga beli"
                    name="buyPrice"
                    onChange={updateForm}
                    type="number"
                    value={formData["buyPrice"]}
                />
                <TextField
                    label="Harga jual"
                    name="sellPrice"
                    onChange={updateForm}
                    type="number"
                    value={formData["sellPrice"]}
                />
                <TextField label="Stok" name="stock" onChange={updateForm} type="number" value={formData["stock"]} />
            </Form>
            <Photo type="file" accept=".jpg,.jpeg,.png" max-size="100000" onChange={handleFileChange} />
            <SubmitButton onClick={handleClick} disabled={getDisabled}>
                {label}
            </SubmitButton>
        </div>
    );
};

export default AddProduct;
