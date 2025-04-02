import { useEffect } from "react";

import { APP_ENV } from "@/constants";
import { disabledFeatures } from "@/hooks/features/data";

import { useAppDispatch } from "@/store/hooks";
import { disableFeatureMultiple, setLoading } from "@/store/settings/features/featuresSlice";

const useFeatures = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // TODO: refactor when connecting the backend API
    const setFeatureState = async () => {
      dispatch(setLoading(true));
      if (process.env.NODE_ENV === APP_ENV.PROD) {
        dispatch(disableFeatureMultiple(disabledFeatures));
      }
    };

    setFeatureState().then(() => {
      dispatch(setLoading(false));
    });
  }, [dispatch]);
};

export default useFeatures;
