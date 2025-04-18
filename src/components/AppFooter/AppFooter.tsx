import React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";

import SvgIcons from "@/components/common/SvgIcon/SvgIcons";
import { Icons } from "@/components/common/SvgIcon/types";

const components: { title: Icons; href: string }[] = [
  {
    title: "git",
    href: process.env.NEXT_PUBLIC_SOCIAL_GIT ?? "",
  },
  {
    title: "linkedin",
    href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? "",
  },
];

const AppFooter = () => {
  return (
    <div className={"footer-shadow relative py-2.5 shadow-inner"}>
      <div className={"wrapper flex justify-end"}>
        <ul className={"flex gap-2"}>
          {components.map((item) => {
            return (
              <li
                className={"flex cursor-pointer rounded-md text-xl shadow-cyan-100 hover:shadow-sm"}
                key={item.title}>
                <Link
                  target={"_blank"}
                  className={cn(
                    "hover:bg-accent hover:text-accent-foreground focus:bg-accent block rounded-md p-1 no-underline transition-colors select-none dark:hover:bg-white",
                  )}
                  href={item.href}>
                  <SvgIcons name={item.title} size={"24px"} color={"black"} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AppFooter;
