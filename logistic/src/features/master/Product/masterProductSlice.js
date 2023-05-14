import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
};

export const masterProductSlice = createSlice({
    name: "masterProduct",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        updateProduct: (state, action) => {
            const { id, product } = action.payload;
            const index = state.products.findIndex((p) => p.id === id);
            if (index !== -1) {
                state.products[index] = product;
            }
        },
        deleteProduct: (state, action) => {
            const { id } = action.payload;
            state.products = state.products.filter((p) => p.id !== id);
        }
    }
});
export const selectProduct = (state) => state.masterProduct.products;

export const { addProduct, updateProduct, deleteProduct } = masterProductSlice.actions;

const productReducer = masterProductSlice.reducer;
export default productReducer;
