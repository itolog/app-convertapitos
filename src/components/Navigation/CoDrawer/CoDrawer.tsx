"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { FC, useState } from "react";

import checkIsLoading from "@/helpers/checkIsLoading";
import useNavigationItems from "@/hooks/navigations/useNavigationItems";
import Link from "next/link";

import CoDrawerSkeleton from "@/components/Navigation/CoDrawer/components/CoDrawerSkeleton/CoDrawerSkeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { getAppLoading } from "@/store/app/selectors";
import { useAppSelector } from "@/store/hooks";

interface CoDrawerProps {}

const CoDrawer: FC<CoDrawerProps> = () => {
  const { navigations } = useNavigationItems();
  const loading = useAppSelector(getAppLoading);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={"flex md:hidden items-center"}>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className={"cursor-pointer"} asChild>
          <HamburgerMenuIcon width={30} height={30} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-w-[50vw]">
          <CoDrawerSkeleton visible={checkIsLoading(loading)} />

          {!checkIsLoading(loading) && (
            <DropdownMenuGroup>
              {navigations.map((item) => {
                if (!item.enabled) return null;

                if (!item.content) {
                  return <DropdownMenuItem key={item.label}>{item.label}</DropdownMenuItem>;
                } else {
                  return (
                    <DropdownMenuSub key={item.label}>
                      <DropdownMenuSubTrigger className={"text-base font-semibold break-all"}>
                        {item.label}
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className={"max-w-[50vw]"}>
                          {item.content.map((content) => {
                            if (!content.enabled) return null;

                            return (
                              <DropdownMenuItem key={content.label}>
                                <Link
                                  onClick={handleClose}
                                  key={content.label}
                                  href={content.href}
                                  className="text-base font-semibold break-all capitalize"
                                  prefetch={false}>
                                  {content.label}
                                </Link>
                              </DropdownMenuItem>
                            );
                          })}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  );
                }
              })}
            </DropdownMenuGroup>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CoDrawer;
