import { useEffect } from "react";

import { APP_ENV } from "@/constants";

import { useAppDispatch } from "@/store/hooks";
import { disableFeature, toggleFeatureAvailability } from "@/store/settings/features/featuresSlice";

const useFeatures = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === APP_ENV.DEV) {
      console.log("DEv");
      dispatch(disableFeature("qrcode:email"));
    } else {
      console.log("Prod");
      dispatch(toggleFeatureAvailability("convert:image"));
      dispatch(disableFeature("qrcode:location"));
    }
  }, [dispatch]);

  return {};
};

export default useFeatures;
