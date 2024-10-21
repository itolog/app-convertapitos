import { Check } from "lucide-react";
import * as React from "react";
import { useEffect, useState } from "react";

import { useDebounce } from "@uidotdev/usehooks";
import clsx from "clsx";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { useTranslations } from "next-intl";

import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { Input } from "@/components/ui/input";

import { Item, SearchResponse } from "../../types";

interface SearchProps {
  selectedResult?: Item;
  onSelectResult: (item: Item) => void;
}

export function Search({ selectedResult, onSelectResult }: SearchProps) {
  const t = useTranslations();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectResult = (item: Item) => {
    onSelectResult(item);
  };

  return (
    <Command shouldFilter={false} className="h-auto rounded-lg border border-b-0 shadow-md w-full">
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={t("Searching for a place")}
      />

      <SearchResults
        query={searchQuery}
        selectedResult={selectedResult}
        onSelectResult={handleSelectResult}
      />
    </Command>
  );
}

interface SearchResultsProps {
  query: string;
  selectedResult: SearchProps["selectedResult"];
  onSelectResult: SearchProps["onSelectResult"];
}

const provider = new OpenStreetMapProvider();

function SearchResults({ query, selectedResult, onSelectResult }: SearchResultsProps) {
  const t = useTranslations();
  const debouncedSearchQuery = useDebounce(query, 600);

  const [data, setData] = useState<Item[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const enabled = !!debouncedSearchQuery;

  const isLoading = enabled && isSearching;

  useEffect(() => {
    (async () => {
      if (debouncedSearchQuery) {
        setIsSearching(true);

        if (debouncedSearchQuery) {
          const results: SearchResponse = await provider.search({ query: debouncedSearchQuery });

          setData(results);
          setIsSearching(false);
        }
      }
    })();
  }, [debouncedSearchQuery]);

  if (!enabled) return null;

  return (
    <CommandList>
      {isLoading && <div className="p-4 text-sm">{t("Searching")}</div>}
      {!isLoading && !data.length && <div className="p-4 text-sm">{t("Not Found")}</div>}

      {data.map((item) => {
        return (
          <CommandItem
            key={item.raw.osm_id}
            onSelect={() => onSelectResult(item)}
            value={item?.raw.name}>
            <Check
              className={clsx(
                "mr-2 h-4 w-4",
                selectedResult?.raw?.osm_id === item.raw.osm_id ? "opacity-100" : "opacity-0",
              )}
            />
            {item.raw.display_name}
          </CommandItem>
        );
      })}
    </CommandList>
  );
}
