"use client";

import usePageAnimations from "@/hooks/animations/usePageAnimations";
import useNavigationItems from "@/hooks/navigations/useNavigationItems";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { checkFeatureAvailability } from "@/utils/features";

import AppSettings from "@/components/AppSettings/AppSettings";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";

import LangSwitcher from "../Inputs/LangSwitcher/LangSwitcher";
import ThemeSwitch from "../Inputs/ThemeSwitch/ThemeSwitch";
import { Separator } from "../ui/separator";

export function AppSidebar() {
  const { navigations } = useNavigationItems();
  const t = useTranslations("Theme");
  const { theme } = useTheme();
  const { animatePageOut } = usePageAnimations();
  const pathname = usePathname();
  const { setOpenMobile, open } = useSidebar();

  return (
    <Sidebar collapsible={"icon"} variant={"floating"}>
      <SidebarHeader className={"flex w-full flex-col gap-4"}>
        <div className={"flex w-full gap-4 overflow-hidden"}>
          <ThemeSwitch
            classes={{
              button: "min-w-[32px]",
            }}
          />
          <div
            className={
              "flex w-full items-center justify-center border-b text-base font-medium capitalize dark:border-sky-500"
            }>
            {theme && t(theme[0].toUpperCase() + theme.slice(1))}
          </div>
        </div>

        <LangSwitcher
          classes={{
            root: "w-full",
            trigger: cn("w-full md:w-[32px]", {
              "md:w-full": open,
            }),
          }}
        />
      </SidebarHeader>
      <Separator className="my-1 dark:bg-sky-500/40" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigations.map((item) => {
                if (checkFeatureAvailability(item)) return null;

                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      tooltip={item.label}
                      asChild
                      isActive={item.href === pathname}>
                      <Link
                        href={item.href}
                        onNavigate={(e) => {
                          e.preventDefault();
                          animatePageOut(item.href);
                          setOpenMobile(false);
                        }}
                        className="font-medium">
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                    {item.children?.length ? (
                      <SidebarMenuSub>
                        {item.children.map((item) => {
                          if (!item.enabled) return null;

                          return (
                            <SidebarMenuSubItem key={item.label}>
                              <SidebarMenuSubButton asChild isActive={item.href === pathname}>
                                <Link
                                  href={item.href}
                                  onNavigate={(e) => {
                                    e.preventDefault();
                                    animatePageOut(item.href);
                                    setOpenMobile(false);
                                  }}>
                                  {item.label}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    ) : null}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Separator className="my-1 dark:bg-sky-500/40" />
      <SidebarFooter>
        <AppSettings />
      </SidebarFooter>
    </Sidebar>
  );
}
