"use client";

import { useGSAP } from "@gsap/react";
import { ReactNode, useEffect, useState } from "react";

import usePageAnimations from "@/hooks/animations/usePageAnimations";
import gsap from "gsap";
import { usePathname } from "next/navigation";

import checkIsLoading from "@/utils/checkIsLoading";
import { checkFeatureUnavailableRoute } from "@/utils/features";

import AppSpinner from "@/components/common/Loaders/AppSpinner/AppSpinner";
import PageTransition from "@/components/common/Loaders/PageTransition/PageTransition";
import UnavailableFeature from "@/components/UnavailableFeature/UnavailableFeature";

import { getAppLoading } from "@/store/app/selectors";
import { getDisabledFeatures } from "@/store/features/selectors";
import { useAppSelector } from "@/store/hooks";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

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
    <div className={"flex h-full flex-1 items-center justify-center px-4 py-10 md:p-10"}>
      <PageTransition />
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
