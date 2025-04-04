"use client";

import React, { ReactNode, useEffect, useState } from "react";

import checkIsLoading from "@/helpers/checkIsLoading";
import { checkFeatureUnavailableRoute } from "@/helpers/features";
import { usePathname } from "next/navigation";

import AppSpinner from "@/components/common/Loaders/AppSpinner/AppSpinner";
import UnavailableFeature from "@/components/UnavailableFeature/UnavailableFeature";

import { getAppLoading } from "@/store/app/selectors";
import { getDisabledFeatures } from "@/store/features/selectors";
import { useAppSelector } from "@/store/hooks";

const FeatureProvider = ({ children }: { children: ReactNode }) => {
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

  return <>{featureDisabled ? <UnavailableFeature /> : children}</>;
};

export default FeatureProvider;
