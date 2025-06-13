import React from "react";

import usePageAnimations from "@/hooks/animations/usePageAnimations";
import { useTranslations } from "next-intl";
import Link from "next/link";

import SignInButton from "@/components/Buttons/SignInButton/SignInButton";
import SignOut from "@/components/Buttons/SignOut/SignOut";
import { DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

import { useAppSelector } from "@/store/hooks";
import { getUser } from "@/store/user/selectors";

const MenuItems = () => {
  const t = useTranslations();

  const user = useAppSelector(getUser);

  const { animatePageOut } = usePageAnimations();

  return (
    <div>
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
    </div>
  );
};

export default MenuItems;
