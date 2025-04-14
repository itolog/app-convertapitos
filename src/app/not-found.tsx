import { useTranslations } from "next-intl";

import CoLink from "@/components/Buttons/CoLink/CoLink";
import CoCard from "@/components/common/Cards/CoCard/CoCard";

export default function NotFound() {
  const t = useTranslations();

  return (
    <CoCard>
      <div className={"flex flex-col p-4 gap-6"}>
        <h2 className={"font-bold text-9xl"}>404</h2>
        <p className={"text-3xl break-words"}>{t("Page not found")}</p>
        <CoLink href="/">{t("Go to Home")}</CoLink>
      </div>
    </CoCard>
  );
}
