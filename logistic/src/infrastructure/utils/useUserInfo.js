import { selectUserInformation } from "features/authentication/authSlice";
import { useSelector } from "react-redux";
import { generateCamelKey } from "./useCustomCase";

export const useUserInfo = () => {
    const { userInformation = {} } = useSelector(selectUserInformation);
    const { username = "" } = generateCamelKey(userInformation);
    return { username };
};
