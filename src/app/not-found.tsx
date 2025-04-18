"use client";

import usePageAnimations from "@/hooks/animations/usePageAnimations";
import { useTranslations } from "next-intl";

import CoCard from "@/components/common/Cards/CoCard/CoCard";
import CoLink from "@/components/Links/CoLink/CoLink";

export default function NotFound() {
  const t = useTranslations();
  const { animatePageOut } = usePageAnimations();

  return (
    <CoCard>
      <div className={"flex flex-col gap-6 p-4"}>
        <h2 className={"text-9xl font-bold"}>404</h2>
        <p className={"text-3xl break-words"}>{t("Page not found")}</p>
        <CoLink
          href="/"
          onNavigate={(e) => {
            e.preventDefault();
            animatePageOut("/");
          }}>
          {t("Go to Home")}
        </CoLink>
      </div>
    </CoCard>
  );
}
