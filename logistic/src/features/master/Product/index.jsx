import EnhancedTable from "infrastructure/components/EnhancedTable";
import useMasterProduct from "./useMasterProduct";

const MasterProduct = () => {
    const tableProps = useMasterProduct();
    return <EnhancedTable {...tableProps} />;
};

export default MasterProduct;
