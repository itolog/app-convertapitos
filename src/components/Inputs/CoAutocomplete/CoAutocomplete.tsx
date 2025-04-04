"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { FC, useCallback, useState, useTransition } from "react";

import { cn } from "@/lib/utils";
import cl from "clsx";
import { useTranslations } from "next-intl";

import { Button } from "@/components/common/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/common/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/common/ui/popover";
import FormError from "@/components/Errors/FormError/FormError";
import { CoAutocompleteProps } from "@/components/Inputs/CoAutocomplete/types";

const CoAutocomplete: FC<CoAutocompleteProps> = ({
  options,
  onSelect,
  classes,
  placeholder = "Select",
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

  const contentClass = cl("w-[200px] p-0", classes?.content);
  const triggerClass = cl("justify-between w-full", classes?.trigger);

  return (
    <div className={"relative flex w-full"}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className={"select-border"} disabled={disabled} asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className={triggerClass}>
            <div className={"flex gap-1 relative overflow-hidden text-ellipsis"}>
              {icon && icon}
              {onlyIcon
                ? null
                : value
                  ? options.find((option) => option.value === value)?.label
                  : t(placeholder)}
            </div>

            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={contentClass}>
          <Command>
            <CommandInput placeholder={t("Search")} className="h-9" />
            <CommandList>
              <CommandEmpty>{t("No Options")}</CommandEmpty>
              <CommandGroup>
                {options.map((item) => (
                  <CommandItem
                    disabled={item.value === disabledOption}
                    key={item.value}
                    value={item.value}
                    onSelect={handleChange}>
                    {item.label}
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
