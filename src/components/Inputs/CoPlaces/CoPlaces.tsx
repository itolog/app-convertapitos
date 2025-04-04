"use client";

import { ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { FC, useCallback, useState } from "react";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

import { Button } from "@/components/common/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/common/ui/popover";
import { Item } from "@/components/Inputs/CoPlaces/types";

const Search = dynamic(() => import("@/components/Inputs/CoPlaces/components/Search/Search"), {
  ssr: false,
});

interface CoPlacesProps {
  onChange: (item: Item) => void;
  width?: string;
}

const CoPlaces: FC<CoPlacesProps> = ({ onChange, width = "w-[250px]" }) => {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Item | undefined>();

  const handleSetActive = useCallback(
    (item: Item) => {
      setSelected(item);
      onChange(item);
      setOpen(false);
    },
    [onChange],
  );

  const displayName = selected ? selected?.raw.name : t("Search");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={clsx("justify-between select-border", width)}>
          {displayName}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent side="bottom" className={clsx("p-0", width)}>
        <Search selectedResult={selected} onSelectResult={handleSetActive} />
      </PopoverContent>
    </Popover>
  );
};

export default CoPlaces;
