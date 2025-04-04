"use client";

import React, { ReactNode, useEffect } from "react";

import useErrors from "@/hooks/errors/useErrors";
import useFeatures from "@/hooks/features/useFeatures";
import useUser from "@/hooks/users/useUser";
import { ThemeProvider } from "next-themes";

import { setAppLoading } from "@/store/app/appSlice";
import { useAppDispatch } from "@/store/hooks";

import ProgressBarProvider from "@/providers/progressbar-provider";

const BootstrapAppProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const { handleError } = useErrors();
  const { setFeatureState } = useFeatures();
  const { setUser } = useUser();

  useEffect(() => {
    (async () => {
      dispatch(setAppLoading(true));
      try {
        await setUser();
        await setFeatureState();
      } catch (e) {
        handleError(e);
      } finally {
        dispatch(setAppLoading(false));
      }
    })();
  }, [dispatch, handleError, setFeatureState, setUser]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ProgressBarProvider>{children}</ProgressBarProvider>
    </ThemeProvider>
  );
};

export default BootstrapAppProvider;
