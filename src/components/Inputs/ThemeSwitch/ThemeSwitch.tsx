"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { FC } from "react";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { items } from "@/components/Inputs/ThemeSwitch/data/items";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Classes = {
  button?: string;
};

interface ThemeSwitchProps {
  classes?: Classes;
}

const ThemeSwitch: FC<ThemeSwitchProps> = ({ classes }) => {
  const { setTheme } = useTheme();
  const t = useTranslations("Theme");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn("select-border size-[32px]", classes?.button)}
          size="icon">
          <SunIcon className="h-full w-full scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <MoonIcon className="absolute h-full w-full scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"select-border"} align="start">
        {items.map((item) => {
          return (
            <div key={item.label}>
              <DropdownMenuItem className={item.className} onClick={() => setTheme(item.value)}>
                {t(item.label)}
              </DropdownMenuItem>
              {item.divider && <DropdownMenuSeparator />}
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitch;
