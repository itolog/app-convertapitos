import React from "react";

import { useTranslations } from "next-intl";

import CoLink from "@/components/Buttons/CoLink/CoLink";
import CoCard from "@/components/common/Cards/CoCard/CoCard";

const UnavailableFeature = () => {
  const t = useTranslations();

  return (
    <CoCard>
      <div className={"flex h-full flex-col gap-6 items-center p-3 text-xl md:text-2xl"}>
        {t("The feature is unavailable")}
        <CoLink href={"/"}>{t("Go to Home")}</CoLink>
      </div>
    </CoCard>
  );
};

export default UnavailableFeature;
