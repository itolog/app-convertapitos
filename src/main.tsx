import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "@/App.tsx";
import { snackbar } from "@/config";
import { SnackbarProvider } from "notistack";

import { CssBaseline } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { persistor, store } from "@/store/store.ts";

import i18n from "./translations";

import "@styles/main.scss";

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<CssBaseline />
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<I18nextProvider i18n={i18n}>
						<SnackbarProvider {...snackbar}>
							<App />
						</SnackbarProvider>
					</I18nextProvider>
				</PersistGate>
			</Provider>
		</StrictMode>,
	);
}
