"use client";

import { useCallback, useEffect, useState } from "react";

import { APP_ENV } from "@/constants";
import useErrors from "@/hooks/errors/useErrors";
import { disabledFeatures } from "@/hooks/features/data";

import { setFeatureMultiple } from "@/store/features/featuresSlice";
import { useAppDispatch } from "@/store/hooks";

const useFeatures = () => {
  const dispatch = useAppDispatch();
  const { handleError } = useErrors();
  const [loading, setLoading] = useState(false);

  const setFeatureState = useCallback(async () => {
    if (process.env.NODE_ENV === APP_ENV.PROD) {
      dispatch(setFeatureMultiple(disabledFeatures));
    }
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        await setFeatureState();
      } catch (e) {
        handleError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [handleError, setFeatureState]);

  return {
    loading,
  };
};

export default useFeatures;
