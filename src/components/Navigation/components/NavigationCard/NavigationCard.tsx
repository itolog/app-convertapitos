import React, { FC } from "react";

import { useTranslations } from "next-intl";
import Link from "next/link";

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

        <Link
          href={href}
          className=" border text-gray-50  duration-300 relative group cursor-pointer overflow-hidden h-12 w-full min-w-32 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500" />
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500" />
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500" />
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600" />
          <p className="z-10 absolute left-0 top-0 flex justify-center items-center h-full w-full text-base">
            {t("Go to")}
          </p>
        </Link>
      </div>
    </CoCard>
  );
};

export default NavigationCard;
