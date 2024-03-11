import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { CssBaseline } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { routeTree } from "./routeTree.gen";

import "@styles/main.scss";

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
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>,
  );
}
