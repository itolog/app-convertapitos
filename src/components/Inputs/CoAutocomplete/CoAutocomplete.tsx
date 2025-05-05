"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { FC, useCallback, useMemo, useState, useTransition } from "react";

import { cn } from "@/lib/utils";
import cl from "clsx";
import { useTranslations } from "next-intl";

import FormError from "@/components/Errors/FormError/FormError";
import { CoAutocompleteProps } from "@/components/Inputs/CoAutocomplete/types";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const CoAutocomplete: FC<CoAutocompleteProps> = ({
  options,
  onSelect,
  classes,
  placeholder = "Select",
  withSortIcon = true,
  popoverContentAlign = "start",
  icon,
  disabled,
  disabledOption,
  onlyIcon = false,
  value,
  error,
}) => {
  const t = useTranslations();
  const [, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  const handleChange = useCallback(
    (value: string) => {
      startTransition(() => {
        setOpen(false);

        if (onSelect) {
          onSelect(value);
        }
      });
    },
    [onSelect],
  );

  const rootClass = cl("relative flex", classes?.root);
  const contentClass = cl("w-[200px] p-0", classes?.content);
  const triggerClass = cl("justify-between w-full", classes?.trigger);

  const triggerText = useMemo(() => {
    if (onlyIcon) return null;

    if (value) {
      return (
        <span className={"truncate leading-normal"}>
          {options.find((option) => option.value === value)?.label}
        </span>
      );
    }

    return <span className={"truncate leading-normal"}>{t(placeholder)}</span>;
  }, [onlyIcon, options, placeholder, t, value]);

  return (
    <div className={rootClass}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className={"select-border"} disabled={disabled} asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className={triggerClass}>
            <div
              className={
                "relative flex h-full w-full items-center justify-start gap-1 overflow-hidden"
              }>
              {icon && icon}
              {triggerText}
            </div>

            {withSortIcon && <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />}
          </Button>
        </PopoverTrigger>
        <PopoverContent align={popoverContentAlign} className={contentClass}>
          <Command>
            <CommandInput placeholder={t("Search")} className="h-9 text-base" />
            <CommandList>
              <CommandEmpty>{t("No Options")}</CommandEmpty>
              <CommandGroup className={"overflow-hidden"}>
                {options.map((item) => (
                  <CommandItem
                    disabled={item.value === disabledOption}
                    key={item.value}
                    value={item.value}
                    onSelect={handleChange}>
                    <span className={cl("cursor-pointer text-base break-words", classes?.itemText)}>
                      {item.label}
                    </span>

                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === item.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <FormError error={error} />
    </div>
  );
};

export default CoAutocomplete;
