import { camelCase, mapKeys } from "lodash";

export const generateCamelKey = (data) => mapKeys(data, (_, key) => camelCase(key));
