"use client";

import { ChevronsUpDown } from "lucide-react";

import usePageAnimations from "@/hooks/animations/usePageAnimations";
import { useTranslations } from "next-intl";
import Link from "next/link";

import SvgIcons from "@/components/common/SvgIcon/SvgIcons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { useAppSelector } from "@/store/hooks";
import { getUser } from "@/store/user/selectors";

import SignInButton from "../Buttons/SignInButton/SignInButton";
import SignOut from "../Buttons/SignOut/SignOut";

const AppSettings = () => {
  const t = useTranslations();
  const { isMobile } = useSidebar();
  const user = useAppSelector(getUser);
  const { animatePageOut } = usePageAnimations();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <Avatar className="h-8 w-8 rounded-md">
                <AvatarImage src={user?.image ?? ""} alt={user?.name ?? "avatar"} />
                <AvatarFallback>
                  <SvgIcons
                    classes={{
                      root: "p-1",
                    }}
                    name={"anonymous"}
                  />
                </AvatarFallback>
                <span className="sr-only">Toggle user menu</span>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user?.name}</span>
                <span className="truncate text-xs">{user?.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="start"
            sideOffset={4}>
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={user?.image ?? ""} alt={user?.name ?? "avatar"} />
                  <AvatarFallback>
                    <SvgIcons
                      classes={{
                        root: "p-1",
                      }}
                      name={"anonymous"}
                    />
                  </AvatarFallback>
                  <span className="sr-only">Toggle user menu</span>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user?.name}</span>
                  <span className="truncate text-xs">{user?.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>

            {user && (
              <DropdownMenuItem>
                <Link
                  className={"w-full text-center"}
                  href={"/profile"}
                  onNavigate={(e) => {
                    e.preventDefault();
                    animatePageOut("/profile");
                  }}>
                  {t("Profile")}
                </Link>
              </DropdownMenuItem>
            )}
            {user && <DropdownMenuSeparator />}
            <DropdownMenuItem>{user ? <SignOut /> : <SignInButton />}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default AppSettings;
