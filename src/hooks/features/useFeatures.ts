"use client";

import { useEffect, useState } from "react";

import useErrors from "@/hooks/errors/useErrors";
import { disabledFeatures } from "@/hooks/features/data";

import { APP_ENV } from "@/constants/appConstants";

import { setFeatureMultipleAsync } from "@/store/features/featuresSlice";
import { useAppDispatch } from "@/store/hooks";

const useFeatures = () => {
  const dispatch = useAppDispatch();
  const { handleError } = useErrors();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        if (process.env.NODE_ENV === APP_ENV.PROD) {
          await dispatch(setFeatureMultipleAsync(disabledFeatures));
        }
      } catch (e) {
        handleError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [dispatch, handleError]);

  return {
    loading,
  };
};

export default useFeatures;
