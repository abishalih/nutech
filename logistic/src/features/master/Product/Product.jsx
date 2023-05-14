const Product = (props) => {
    const { handleDeleteProduct, handleUpdateProduct, id, name } = props;
    return (
        <li>
            <span>{name}</span>
            <button onClick={() => handleUpdateProduct(id, { ...props, name: "Updated Product" })}>Update</button>
            <button onClick={() => handleDeleteProduct(id)}>Delete</button>
        </li>
    );
};

export default Product;
