import React from "react";

import usePageAnimations from "@/hooks/animations/usePageAnimations";
import { useTranslations } from "next-intl";

import CoCard from "@/components/common/Cards/CoCard/CoCard";
import CoLink from "@/components/Links/CoLink/CoLink";

const UnavailableFeature = () => {
  const t = useTranslations();
  const { animatePageOut } = usePageAnimations();

  return (
    <CoCard>
      <div className={"flex h-full flex-col items-center gap-6 p-3 text-xl md:text-2xl"}>
        {t("The feature is unavailable")}
        <CoLink
          href={"/"}
          onNavigate={(e) => {
            e.preventDefault();
            animatePageOut("/");
          }}>
          {t("Go to Home")}
        </CoLink>
      </div>
    </CoCard>
  );
};

export default UnavailableFeature;
