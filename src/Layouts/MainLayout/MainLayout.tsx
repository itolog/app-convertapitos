import { Outlet } from "@tanstack/react-router";

import useTheme from "@/hooks/settings/useTheme.tsx";

import { Box } from "@mui/material";

import CoAppBar from "@/components/CoAppBar/CoAppBar";
import TanStackRouterDevtools from "@/components/TanStackRouterDevtools/TanStackRouterDevtools";

const MainLayout = () => {
  useTheme();

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
