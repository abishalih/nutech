import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "features/authentication/authSlice";
import productReducer from "features/master/Product/masterProductSlice";
import componentReducer from "infrastructure/components/componentSlice";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import storage from "./syncStorage";

const rootReducer = combineReducers({
    auth: authReducer,
    generalComponent: componentReducer,
    masterProduct: productReducer
});

const rootPersistConfig = {
    key: "root",
    storage,
    stateReconciler: hardSet
};

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
});

export const persistor = persistStore(store);

export const originalStore = configureStore({
    reducer: {
        auth: authReducer,
        generalComponent: componentReducer,
        masterProduct: productReducer
    }
});
