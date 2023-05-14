export const isExpired = (exp) => Date.now() >= exp * 1000;
