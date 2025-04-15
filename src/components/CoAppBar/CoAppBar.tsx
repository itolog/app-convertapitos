"use client";

import usePageAnimations from "@/hooks/animations/usePageAnimations";
import Link from "next/link";

import AppSettings from "@/components/AppSettings/AppSettings";
import CoLogo from "@/components/CoLogo/CoLogo";
import BaseNavigation from "@/components/Navigation/BaseNavigation/BaseNavigation";
import CoDrawer from "@/components/Navigation/CoDrawer/CoDrawer";

function CoAppBar() {
  const { animatePageOut } = usePageAnimations();

  return (
    <header className="relative flex items-center justify-center h-16 shadow-sm dark:shadow-cyan-400">
      <div
        className={
          "wrapper grid grid-cols-[80px_1fr] md:grid-cols-[40px_1fr_170px] w-full items-center justify-between"
        }>
        <div className={"flex gap-2"}>
          <CoDrawer />

          <Link
            href="/"
            onNavigate={(e) => {
              e.preventDefault();
              animatePageOut("/");
            }}
            className="flex items-center gap-2"
            prefetch={false}>
            <CoLogo />
          </Link>
        </div>

        <div className={"hidden md:flex items-center justify-center"}>
          <BaseNavigation />
        </div>

        <div className="flex items-center justify-end gap-4 w-full">
          <AppSettings />
        </div>
      </div>
    </header>
  );
}

export default CoAppBar;
