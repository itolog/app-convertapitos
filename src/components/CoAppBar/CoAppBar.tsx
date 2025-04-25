"use client";

import CoAppBreadcrumb from "@/components/CoAppBar/components/CoAppBreadcrumb/CoAppBreadcrumb";

import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";

function CoAppBar() {
  return (
    <header className="bg-sidebar border-sidebar-border app-shadow sticky top-0 z-40 flex h-16 shrink-0 items-center gap-2 border-1 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 md:mt-2 md:mr-2 md:rounded-lg">
      <div className="flex h-full items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1 [&>svg]:size-5" />
        <Separator orientation="vertical" className="mr-2 h-4 dark:bg-sky-500/40" />
        <CoAppBreadcrumb />
      </div>
    </header>
  );
}

export default CoAppBar;
