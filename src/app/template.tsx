"use client";

import { useGSAP } from "@gsap/react";
import { ReactNode, useEffect, useState } from "react";

import usePageAnimations from "@/hooks/animations/usePageAnimations";
import cl from "clsx";
import { usePathname } from "next/navigation";

import checkIsLoading from "@/utils/checkIsLoading";
import { checkFeatureUnavailableRoute } from "@/utils/features";

import AppSpinner from "@/components/common/Loaders/AppSpinner/AppSpinner";
import UnavailableFeature from "@/components/UnavailableFeature/UnavailableFeature";

import { getAppLoading } from "@/store/app/selectors";
import { getDisabledFeatures } from "@/store/features/selectors";
import { useAppSelector } from "@/store/hooks";

const baseBannerClass = "min-h-screen bg-background z-10 fixed top-0 w-1/4";

export default function Template({ children }: { children: ReactNode }) {
  const disabledFeatures = useAppSelector(getDisabledFeatures);
  const loading = useAppSelector(getAppLoading);
  const pathName = usePathname();
  const { animatePageIn } = usePageAnimations();

  const [featureDisabled, setFeatureDisabled] = useState(false);

  useGSAP(
    () => {
      animatePageIn();
    },
    { dependencies: [pathName] },
  );

  useEffect(() => {
    disabledFeatures.forEach((feature) => {
      if (checkFeatureUnavailableRoute(feature, pathName)) {
        setFeatureDisabled(true);
      } else {
        setFeatureDisabled(false);
      }
    });
  }, [disabledFeatures, pathName]);

  return (
    <div className={"wrapper flex items-center justify-center p-4 md:p-10"}>
      <div id="banner-1" className={cl(baseBannerClass, "left-0")} />
      <div id="banner-2" className={cl(baseBannerClass, "left-1/4")} />
      <div id="banner-3" className={cl(baseBannerClass, "left-2/4")} />
      <div id="banner-4" className={cl(baseBannerClass, "left-3/4")} />
      {checkIsLoading(loading) ? (
        <AppSpinner />
      ) : featureDisabled ? (
        <UnavailableFeature />
      ) : (
        children
      )}
    </div>
  );
}
