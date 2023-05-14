const AddProduct = ({ label = "", onClick, toggleDialog }) => {
    const handleClick = async (payload) => {
        await onClick(payload);
        toggleDialog();
    };
    return (
        <div>
            <button onClick={handleClick}>{label}</button>
        </div>
    );
};

export default AddProduct;
