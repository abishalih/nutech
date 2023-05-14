import { useUserInfo } from "./useUserInfo";
export const useAuthorization = () => {
    const { roleId } = useUserInfo();
    const isRoleSales = roleId === 11;
    const isRoleAdminSales = roleId === 12;
    const isRoleOperation = roleId === 21;
    const isRoleAdminOperation = roleId === 22;
    const isRoleDedicated = roleId === 41;
    const isRolePic = roleId === 42;
    const isRoleAkFinance = roleId === 31;
    const isRoleAdminAccount = roleId === 1;
    return {
        roleId,
        isRoleSales,
        isRoleAdminSales,
        isRoleOperation,
        isRoleAdminOperation,
        isRoleDedicated,
        isRolePic,
        isRoleAkFinance,
        isRoleAdminAccount
    };
};
