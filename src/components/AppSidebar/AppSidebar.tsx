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
} from "@/components/ui/sidebar";

import LangSwitcher from "../Inputs/LangSwitcher/LangSwitcher";
import ThemeSwitch from "../Inputs/ThemeSwitch/ThemeSwitch";

export function AppSidebar() {
  const { navigations } = useNavigationItems();
  const { animatePageOut } = usePageAnimations();
  const pathname = usePathname();

  return (
    <Sidebar collapsible={"icon"} variant={"floating"}>
      <SidebarHeader>
        <AppSettings />
      </SidebarHeader>
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
      <SidebarFooter className={"flex w-full flex-row gap-2 md:flex-col"}>
        <LangSwitcher />
        <ThemeSwitch />
      </SidebarFooter>
    </Sidebar>
  );
}
