"use client";

import usePageAnimations from "@/hooks/animations/usePageAnimations";
import useNavigationItems from "@/hooks/navigations/useNavigationItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const { animatePageOut } = usePageAnimations();
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar collapsible={"icon"} variant={"floating"}>
      <SidebarHeader className={"flex w-full flex-row gap-4 md:flex-col"}>
        <ThemeSwitch />
        <LangSwitcher
          classes={{
            trigger: "w-[140px] md:w-[32px] gap-2 p-2",
          }}
        />
      </SidebarHeader>
      <Separator className="my-1 dark:bg-sky-500/40" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigations.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild isActive={item.href === pathname}>
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
              ))}
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
