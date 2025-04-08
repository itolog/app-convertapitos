"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

import SignInButton from "@/components/Buttons/SignInButton/SignInButton";
import SignOut from "@/components/Buttons/SignOut/SignOut";
import SvgIcons from "@/components/common/SvgIcon/SvgIcons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/common/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/common/ui/dropdown-menu";
import LangSwitcher from "@/components/Inputs/LangSwitcher/LangSwitcher";
import { ThemeSwitch } from "@/components/Inputs/ThemeSwitch/ThemeSwitch";

import { useAppSelector } from "@/store/hooks";
import { getUser } from "@/store/user/selectors";

const AppSettings = () => {
  const t = useTranslations();
  const user = useAppSelector(getUser);

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
              <Link className={"text-center w-full"} href={"/profile"}>
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
