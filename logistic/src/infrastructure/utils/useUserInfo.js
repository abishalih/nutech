import { selectUserInformation } from "features/authentication/authSlice";
import { useSelector } from "react-redux";
import { generateCamelKey } from "./useCustomCase";

export const useUserInfo = () => {
    const { userInformation = {} } = useSelector(selectUserInformation);
    const {
        email = "",
        iss = "",
        menu = [],
        name = "",
        poolCode = "",
        realToken = "",
        roleDesc = ""
    } = generateCamelKey(userInformation);
    return { email, iss, menu, name, poolCode, realToken, roleDesc };
};
