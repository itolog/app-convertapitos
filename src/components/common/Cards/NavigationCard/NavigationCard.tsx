"use client";

import { SquareArrowRight } from "lucide-react";
import { FC } from "react";

import usePageAnimations from "@/hooks/animations/usePageAnimations";
import { NavigationItem } from "@/hooks/navigations/useNavigationItems";
import cl from "clsx";

import CoLink from "@/components/Links/CoLink/CoLink";

type Classes = {
  root?: string;
  cardHeader?: string;
  cardContent?: string;
  title?: string;
  description?: string;
};

interface NavigationCardProps {
  item: NavigationItem;
  classes?: Classes;
}

const NavigationCard: FC<NavigationCardProps> = ({ item, classes }) => {
  const { animatePageOut } = usePageAnimations();

  return (
    <div
      className={cl(
        "bg-card relative flex cursor-pointer flex-col rounded-sm border-2 border-solid border-[#0d1117] p-5 transition-shadow duration-[0.2s] ease-[ease-in-out] hover:shadow-lg dark:border-cyan-900 dark:hover:shadow-cyan-500/30",
        classes?.root,
      )}>
      <div className={"mb-[15px] flex items-center gap-2"}>
        <span className={"inline-block h-3 w-3 rounded-[50%] bg-[#ff5f57]"} />
        <span className={"inline-block h-3 w-3 rounded-[50%] bg-[#ffbd2e]"} />
        <span className={"inline-block h-3 w-3 rounded-[50%] bg-[#28c941]"} />
      </div>
      {/* CARD HEADER */}
      <div className={cl("flex flex-col gap-2 overflow-hidden", classes?.cardHeader)}>
        <div className={"text-primary flex items-center gap-2"}>
          <div className={"h-[24px] w-[24px]"}>{item?.icon}</div>
          <span className={"truncate text-lg leading-none font-bold"}>{item.label}</span>
        </div>

        <p className={"mb-2 line-clamp-2 text-sm break-all"}>{item.description}</p>
      </div>
      {/* CARD CONTENT*/}
      <div
        className={
          "bg-card flex-1 overflow-auto rounded-sm border border-solid border-[#333] p-2 text-sm leading-normal text-[#dcdcdc]"
        }>
        <div className={"grid grid-cols-1 gap-4 sm:grid-cols-2"}>
          {item.children?.map((subItem) => {
            return (
              <CoLink
                key={subItem.id}
                href={subItem.href}
                onNavigate={(e) => {
                  e.preventDefault();
                  animatePageOut(subItem.href);
                }}
                classes={{
                  content: "px-2 justify-between",
                }}>
                <span className={"truncate"}>{subItem.label}</span>

                <SquareArrowRight />
              </CoLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavigationCard;
