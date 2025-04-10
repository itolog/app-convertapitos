"use client";

import { ReactNode, useEffect, useState } from "react";

import checkIsLoading from "@/helpers/checkIsLoading";
import { checkFeatureUnavailableRoute } from "@/helpers/features";
import { usePathname } from "next/navigation";

import AppSpinner from "@/components/common/Loaders/AppSpinner/AppSpinner";
import UnavailableFeature from "@/components/UnavailableFeature/UnavailableFeature";

import { getAppLoading } from "@/store/app/selectors";
import { getDisabledFeatures } from "@/store/features/selectors";
import { useAppSelector } from "@/store/hooks";

export default function Template({ children }: { children: ReactNode }) {
  const disabledFeatures = useAppSelector(getDisabledFeatures);
  const loading = useAppSelector(getAppLoading);
  const pathName = usePathname();

  const [featureDisabled, setFeatureDisabled] = useState(false);

  useEffect(() => {
    disabledFeatures.forEach((feature) => {
      if (checkFeatureUnavailableRoute(feature, pathName)) {
        setFeatureDisabled(true);
      } else {
        setFeatureDisabled(false);
      }
    });
  }, [disabledFeatures, pathName]);

  if (checkIsLoading(loading)) {
    return <AppSpinner />;
  }

  return (
    <div className={"wrapper flex items-center justify-center p-4 md:p-10"}>
      {featureDisabled ? <UnavailableFeature /> : children}
    </div>
  );
}
