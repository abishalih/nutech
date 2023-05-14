export const generateInitialName = (string) => {
    if (string) {
        const names = string.split(" ");
        let initials = names[0].substring(0, 1).toUpperCase();

        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    }

    return "";
};

export const generateMaxLength = (string, maxLength) => {
    if (string) {
        if (string.length > maxLength) {
            return `${string.substr(0, maxLength - 1)}...`;
        }
        return string;
    }

    return "";
};

const stringUtils = {
    generateInitialName,
    generateMaxLength
};

export default stringUtils;
