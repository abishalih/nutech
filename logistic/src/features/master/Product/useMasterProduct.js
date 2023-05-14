import { useDispatch, useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import { LIST_PRODUCT_COLUMNS } from "./common";
import { addProduct, deleteProduct, selectProduct, updateProduct } from "./masterProductSlice";

const useMasterProduct = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProduct);
    const handleAddProduct = (newProduct) => {
        dispatch(addProduct(newProduct));
    };

    const handleUpdateProduct = (id, product) => {
        dispatch(updateProduct({ id, product }));
    };

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct({ id }));
    };
    const actionAdd = {
        dialog: AddProduct,
        label: "Tambah barang",
        onClick: handleAddProduct
    };
    const actionUpdate = {
        label: "Update",
        onClick: handleUpdateProduct
    };
    const actionDelete = {
        label: "Hapus",
        onClick: handleDeleteProduct
    };
    return {
        columns: LIST_PRODUCT_COLUMNS,
        data: products.map((product) => ({ ...product, actions: [actionUpdate, actionDelete] })),
        toolbarActions: [actionAdd]
    };
};

export default useMasterProduct;
