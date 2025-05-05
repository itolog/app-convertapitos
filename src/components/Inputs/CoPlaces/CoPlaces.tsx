"use client";

import { ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { FC, useCallback, useState } from "react";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

import { Item } from "@/components/Inputs/CoPlaces/types";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Search = dynamic(() => import("@/components/Inputs/CoPlaces/components/Search/Search"), {
  ssr: false,
});

interface CoPlacesProps {
  onChange: (item: Item) => void;
}

const CoPlaces: FC<CoPlacesProps> = ({ onChange }) => {
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
        <Button variant="outline" role="combobox" className={cn("select-border justify-between")}>
          {displayName}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent side="bottom" className={cn("p-0")}>
        <Search selectedResult={selected} onSelectResult={handleSetActive} />
      </PopoverContent>
    </Popover>
  );
};

export default CoPlaces;
