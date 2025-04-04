"use client";

import { ReactNode } from "react";

import cl from "clsx";
import { useTheme } from "next-themes";

const AppMain = ({ children }: { children: ReactNode }) => {
  const { resolvedTheme } = useTheme();

  return (
    <main
      className={cl({
        "gradient-bg-2": resolvedTheme !== "dark",
        "gradient-bg-3": resolvedTheme === "dark",
      })}>
      {children}
    </main>
  );
};

export default AppMain;
