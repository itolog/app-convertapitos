"use client";

import React, { ReactNode, useEffect } from "react";

import useFeatures from "@/hooks/features/useFeatures";
import useUser from "@/hooks/users/useUser";
import cl from "clsx";

import { setAppLoading } from "@/store/app/appSlice";
import { useAppDispatch } from "@/store/hooks";

const BootstrapAppProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  const { loading: featureLoading } = useFeatures();
  const { loading: userLoading } = useUser();

  useEffect(() => {
    dispatch(setAppLoading(featureLoading || userLoading));
  }, [dispatch, featureLoading, userLoading]);

  return (
    <div className={cl("grid grid-rows-[auto_1fr_auto] app-font min-h-screen relative")}>
      {children}
    </div>
  );
};

export default BootstrapAppProvider;
