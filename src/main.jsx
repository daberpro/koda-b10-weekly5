import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider as ReduxProvider } from "react-redux";
import store, { persistor } from "./redux/store";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ReduxProvider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </ReduxProvider>
    </StrictMode>,
);
