import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { persistor, store } from "@/store/store.ts";

import { routeTree } from "./routeTree.gen";

import "@styles/main.scss";

const theme = createTheme({});

const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Suspense fallback={<div>Loading...</div>}>
              <RouterProvider router={router} />
            </Suspense>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </StrictMode>,
  );
}
