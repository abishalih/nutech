import { useUserInfo } from "infrastructure/utils/useUserInfo";

const useFilterListNavigation = (list = []) => {
    const { roleId } = useUserInfo();
    return list.filter(({ role }) => (role && role.includes(roleId)) || !role).filter(({ withLayout }) => withLayout);
};

export default useFilterListNavigation;
