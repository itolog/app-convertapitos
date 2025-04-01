"use client";

import { useSession } from "next-auth/react";
import React, { ReactNode, useEffect } from "react";

import useFeatures from "@/hooks/features/useFeatures";

import { useAppDispatch } from "@/store/hooks";
import { Me } from "@/store/user/types";
import { setUser } from "@/store/user/userSlice";

import ProgressBarProvider from "@/providers/progressbar-provider";
import { ThemeProvider } from "@/providers/theme-provider";

const BootstrapAppProvider = ({ children }: { children: ReactNode }) => {
  const session = useSession();
  const dispatch = useAppDispatch();
  useFeatures();

  useEffect(() => {
    const user: Me | undefined = session?.data?.user;

    dispatch(
      setUser({
        user,
        status: session.status,
      }),
    );
  }, [dispatch, session]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ProgressBarProvider>{children}</ProgressBarProvider>
    </ThemeProvider>
  );
};

export default BootstrapAppProvider;
