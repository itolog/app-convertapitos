"use client";

import usePageAnimations from "@/hooks/animations/usePageAnimations";
import { useTranslations } from "next-intl";
import Link from "next/link";

import SignInButton from "@/components/Buttons/SignInButton/SignInButton";
import SignOut from "@/components/Buttons/SignOut/SignOut";
import SvgIcons from "@/components/common/SvgIcon/SvgIcons";
import LangSwitcher from "@/components/Inputs/LangSwitcher/LangSwitcher";
import { ThemeSwitch } from "@/components/Inputs/ThemeSwitch/ThemeSwitch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useAppSelector } from "@/store/hooks";
import { getUser } from "@/store/user/selectors";

const AppSettings = () => {
  const t = useTranslations();
  const user = useAppSelector(getUser);
  const { animatePageOut } = usePageAnimations();

  return (
    <div className="flex flex-row gap-2">
      <ThemeSwitch />
      <div className={"flex w-[80px]"}>
        <LangSwitcher />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
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
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {user && (
            <DropdownMenuItem>
              <Link
                className={"text-center w-full"}
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
    </div>
  );
};

export default AppSettings;
