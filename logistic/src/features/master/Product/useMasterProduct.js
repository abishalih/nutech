import { useDispatch, useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import { LIST_PRODUCT_COLUMNS } from "./common";
import { addProduct, deleteProduct, selectProduct, updateProduct } from "./masterProductSlice";

const useMasterProduct = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProduct);
    const handleAddProduct = (newProduct) => {
        dispatch(addProduct(newProduct));
    };

    const handleUpdateProduct = (product) => {
        const { id } = product;
        dispatch(updateProduct({ id, product }));
    };

    const handleDeleteProduct = (product) => {
        const { id } = product;
        dispatch(deleteProduct({ id }));
    };
    const actionAdd = {
        dialog: AddProduct,
        label: "Tambah barang",
        onClick: handleAddProduct
    };
    const actionUpdate = {
        dialog: UpdateProduct,
        label: "Update",
        onClick: handleUpdateProduct,
        title: "Update barang"
    };
    const actionDelete = {
        label: "Hapus",
        onClick: handleDeleteProduct
    };
    return {
        actions: true,
        columns: LIST_PRODUCT_COLUMNS,
        data: products.map((product) => ({ ...product, actions: [actionUpdate, actionDelete] })),
        toolbarActions: [actionAdd]
    };
};

export default useMasterProduct;
