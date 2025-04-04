"use client";

import { useCallback } from "react";

import { APP_ENV } from "@/constants";
import { disabledFeatures } from "@/hooks/features/data";

import { disableFeatureMultiple } from "@/store/features/featuresSlice";
import { useAppDispatch } from "@/store/hooks";

const useFeatures = () => {
  const dispatch = useAppDispatch();

  const setFeatureState = useCallback(async () => {
    if (process.env.NODE_ENV === APP_ENV.PROD) {
      dispatch(disableFeatureMultiple(disabledFeatures));
    }
  }, [dispatch]);

  return {
    setFeatureState,
  };
};

export default useFeatures;
