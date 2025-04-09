import { useTranslations } from "next-intl";
import Link from "next/link";

import CoCard from "@/components/common/Cards/CoCard/CoCard";

export default function NotFound() {
  const t = useTranslations();

  return (
    <CoCard>
      <div className={"flex flex-col p-4 gap-6"}>
        <h2 className={"font-bold text-9xl"}>404</h2>
        <p className={"text-3xl break-words"}>{t("Page not found")}</p>
        <Link className={"co-anim-btn-1"} href="/">
          {t("Go to Home")}
        </Link>
      </div>
    </CoCard>
  );
}
