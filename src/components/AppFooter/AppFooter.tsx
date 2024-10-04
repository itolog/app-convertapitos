import React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";

import SvgIcons from "@/components/ui/SvgIcon/SvgIcons";
import { Icons } from "@/components/ui/SvgIcon/types";

const components: { title: Icons; href: string }[] = [
  {
    title: "git",
    href: "https://github.com/itolog",
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/serhii-romanichenko-92788a148/",
  },
];

const AppFooter = () => {
  return (
    <div className={"relative py-2.5 mt-3 shadow-inner footer-shadow"}>
      <div className={"wrapper flex justify-end"}>
        <ul className={"flex gap-2"}>
          {components.map((item) => {
            return (
              <li
                className={"flex text-xl rounded-md hover:shadow shadow-cyan-100 cursor-pointer"}
                key={item.title}>
                <Link
                  target={"_blank"}
                  className={cn(
                    "block select-none no-underline rounded-md transition-colors p-1 hover:bg-accent dark:hover:bg-white hover:text-accent-foreground focus:bg-accent",
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
