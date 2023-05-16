import { selectUserInformation } from "features/authentication/authSlice";
import { useSelector } from "react-redux";

export const useUserInfo = () => {
    const userInformation = useSelector(selectUserInformation);
    const { username = "" } = userInformation;
    return { username };
};
