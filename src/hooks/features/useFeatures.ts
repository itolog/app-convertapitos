import { useEffect } from "react";

import { APP_ENV } from "@/constants";
import { disabledFeatures } from "@/hooks/features/data";

import { useAppDispatch } from "@/store/hooks";
import { disableFeature, setLoading } from "@/store/settings/features/featuresSlice";

const useFeatures = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    if (process.env.NODE_ENV === APP_ENV.PROD) {
      disabledFeatures.forEach((feature) => {
        dispatch(disableFeature(feature));
      });
    }

    dispatch(setLoading(false));
  }, [dispatch]);

  return {};
};

export default useFeatures;
