"use client";

import useNavigationItems from "@/hooks/navigations/useNavigationItems";
import { useTranslations } from "next-intl";

import NavigationCard from "@/components/common/Cards/NavigationCard/NavigationCard";

export default function Home() {
  const t = useTranslations();
  const { navigations } = useNavigationItems();

  return (
    <div className="container h-full w-full">
      <h1 className="mb-4 text-center text-3xl font-bold">{t("Home Page Title")}</h1>

      <p className="mx-auto mb-12 max-w-3xl text-center text-2xl">{t("Home Page Description")}</p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {navigations.map((section) => {
          if (!section.enabled || section.children?.every((i) => !i.enabled)) return null;

          return <NavigationCard item={section} key={section.id} />;
        })}
      </div>
    </div>
  );
}
