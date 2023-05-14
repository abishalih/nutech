import LoadingPage from "infrastructure/components/common/LoadingPage";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./app/App";
import { originalStore, persistor } from "./app/store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <StrictMode>
        <Provider store={originalStore}>
            <PersistGate loading={LoadingPage} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
