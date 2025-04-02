"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { FC, useState } from "react";

import useNavigationItems from "@/hooks/navigations/useNavigationItems";
import Link from "next/link";

import CoDrawerSkeleton from "@/components/CoDrawer/components/CoDrawerSkeleton/CoDrawerSkeleton";
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

import { useAppSelector } from "@/store/hooks";
import { getLoading } from "@/store/settings/features/selectors";

interface CoDrawerProps {}

const CoDrawer: FC<CoDrawerProps> = () => {
  const { navigations } = useNavigationItems();
  const loading = useAppSelector(getLoading);

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
        <DropdownMenuContent className="w-56 p-2">
          <CoDrawerSkeleton visible={loading} />

          {!loading && (
            <DropdownMenuGroup>
              {navigations.map((item) => {
                if (!item.content) {
                  return <DropdownMenuItem key={item.label}>{item.label}</DropdownMenuItem>;
                } else {
                  return (
                    <DropdownMenuSub key={item.label}>
                      <DropdownMenuSubTrigger>{item.label}</DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          {item.content.map((content) => {
                            return (
                              <DropdownMenuItem key={content.label}>
                                <Link
                                  onClick={handleClose}
                                  key={content.label}
                                  href={content.href}
                                  className="text-sm font-semibold w-full capitalize p-2 flex underline-offset-4"
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
