"use client";

import { cn } from "@/lib/utils";

import CoLogo from "@/components/CoLogo/CoLogo";

const PageTransition = () => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-100 h-screen min-h-screen w-full overflow-hidden bg-[rgba(0,0,0,0.8)]",
        "grid grid-cols-8 grid-rows-8 gap-1",
        "page-transition",
      )}>
      {Array.from({ length: 64 }, (_value, index) => index).map((value) => {
        return (
          <div
            key={value}
            className={cn(
              "bg-card rounded-md",
              "inset-shadow-foreground inset-shadow-sm dark:inset-shadow-indigo-500",
              "page-transition--box",
            )}>
            <CoLogo classes={{ root: "size-full" }} />
          </div>
        );
      })}
    </div>
  );
};

export default PageTransition;
