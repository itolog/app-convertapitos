import React from "react";

import { useTranslations } from "next-intl";
import Link from "next/link";

import CoCard from "@/components/common/Cards/CoCard/CoCard";

const UnavailableFeature = () => {
  const t = useTranslations();

  return (
    <CoCard>
      <div className={"flex h-full flex-col gap-6 items-center p-3 text-xl md:text-2xl"}>
        {t("The feature is unavailable")}
        <Link href={"/"} className="co-anim-btn-1">
          {t("Go to Home")}
        </Link>
      </div>
    </CoCard>
  );
};

export default UnavailableFeature;
