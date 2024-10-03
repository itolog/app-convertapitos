import React from "react";

import { useTranslations } from "next-intl";

import CoCard from "@/components/Cards/CoCard/CoCard";

const DevPlaceholder = () => {
  const t = useTranslations();

  return (
    <CoCard>
      <div className={"p-2 md:p-4"}>
        <h1 className={"text-3xl uppercase"}>{t("In development")}</h1>
      </div>
    </CoCard>
  );
};

export default DevPlaceholder;
