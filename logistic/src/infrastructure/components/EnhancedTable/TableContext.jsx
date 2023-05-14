import { createContext, useContext, useState } from "react";
import { defaultDialogProps } from "../common/main/dialog";

const GetContext = createContext();
const SetContext = createContext();

export const getContext = () => useContext(GetContext);
export const setContext = () => useContext(SetContext);

export const Provider = ({ children, tablePayload }) => {
    const defaultState = {
        tableDialog: defaultDialogProps,
        tableFilter: {
            key: "",
            period: ""
        },
        tableHeader: {
            sortType: "",
            sortBy: ""
        },
        tablePagination: {
            page: 1,
            show: 10
        },
        tablePayload,
        tableSelected: []
    };
    const [state, setState] = useState(defaultState);

    const updateState = (name, value) => {
        setState((prevState) => {
            const newState = { ...prevState };
            if (name === "tableSelected") newState[name] = value;
            else newState[name] = { ...prevState[name], ...value };
            return newState;
        });
    };
    return (
        <GetContext.Provider value={state}>
            <SetContext.Provider value={updateState}>{children}</SetContext.Provider>
        </GetContext.Provider>
    );
};

export default Provider;
