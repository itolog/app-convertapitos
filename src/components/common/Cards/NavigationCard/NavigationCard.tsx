"use client";

import { FC } from "react";

import usePageAnimations from "@/hooks/animations/usePageAnimations";
import cl from "clsx";
import { useTranslations } from "next-intl";

import CoCard from "@/components/common/Cards/CoCard/CoCard";
import CoLink from "@/components/Links/CoLink/CoLink";

type Classes = {
  root?: string;
  content?: string;
  description?: string;
};

interface NavigationCardProps {
  title: string;
  description?: string;
  href: string;
  classes?: Classes;
}

const NavigationCard: FC<NavigationCardProps> = ({ title, description, href, classes }) => {
  const t = useTranslations();
  const { animatePageOut } = usePageAnimations();

  const handleNavigation = (e) => {
    e.preventDefault();
    animatePageOut(href);
  };

  return (
    <CoCard
      classes={{
        root: cl(classes?.root),
      }}>
      <div
        className={cl(
          "flex flex-col gap-2 p-2 overflow-hidden h-full justify-between",
          classes?.content,
        )}>
        <div className={"flex flex-col gap-2"}>
          <h3 className={"text-lg font-bold truncate"}>{title}</h3>
          {description && (
            <p className={cl("break-words line-clamp-3 text-sm", classes?.description)}>
              {description}
            </p>
          )}
        </div>
        <CoLink href={href} onNavigate={handleNavigation}>
          {t("Go to")}
        </CoLink>
      </div>
    </CoCard>
  );
};

export default NavigationCard;
