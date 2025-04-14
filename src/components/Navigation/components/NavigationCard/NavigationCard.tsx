"use client";

import { FC } from "react";

import { useTranslations } from "next-intl";

import CoLink from "@/components/Buttons/CoLink/CoLink";
import CoCard from "@/components/common/Cards/CoCard/CoCard";

interface NavigationCardProps {
  title: string;
  description?: string;
  href: string;
  className?: string;
}

const NavigationCard: FC<NavigationCardProps> = ({ title, description, href, className }) => {
  const t = useTranslations();
  return (
    <CoCard
      classes={{
        root: className,
      }}>
      <div
        className={"flex flex-col gap-2 p-2 overflow-hidden max-w-[180px] h-full justify-between"}>
        <div className={"flex flex-col gap-2  "}>
          <h3 className={"text-lg font-bold truncate"}>{title}</h3>
          {description && <p className={"line-clamp-3 break-words text-sm"}>{description}</p>}
        </div>
        <CoLink href={href}>{t("Go to")}</CoLink>
      </div>
    </CoCard>
  );
};

export default NavigationCard;
