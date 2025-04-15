"use client";

import { FC } from "react";

import usePageAnimations from "@/hooks/animations/usePageAnimations";
import { useTranslations } from "next-intl";

import CoCard from "@/components/common/Cards/CoCard/CoCard";
import CoLink from "@/components/Links/CoLink/CoLink";

interface NavigationCardProps {
  title: string;
  description?: string;
  href: string;
  className?: string;
}

const NavigationCard: FC<NavigationCardProps> = ({ title, description, href, className }) => {
  const t = useTranslations();
  const { animatePageOut } = usePageAnimations();

  const handleNavigation = (e) => {
    e.preventDefault();
    animatePageOut(href);
  };

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
        <CoLink href={href} onNavigate={handleNavigation}>
          {t("Go to")}
        </CoLink>
      </div>
    </CoCard>
  );
};

export default NavigationCard;
