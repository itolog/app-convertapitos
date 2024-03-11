import { Outlet } from "@tanstack/react-router";

import { Box } from "@mui/material";

import CoAppBar from "@/components/CoAppBar/CoAppBar";
import TanStackRouterDevtools from "@/components/TanStackRouterDevtools/TanStackRouterDevtools";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CoAppBar />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>

      <TanStackRouterDevtools />
    </Box>
  );
};

export default MainLayout;
