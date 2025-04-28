"use client";

import * as React from "react";
import { FC, useCallback, useState } from "react";
import { FlagImage } from "react-international-phone";

import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

import { setUserLocale } from "@/services/locale";

import CoAutocomplete from "@/components/Inputs/CoAutocomplete/CoAutocomplete";
import useOptions from "@/components/Inputs/LangSwitcher/hooks/useOptions";

type Classes = {
  root?: string;
  trigger?: string;
};

type LangSwitcherProps = {
  onlyIcon?: boolean;
  classes?: Classes;
};

const LangSwitcher: FC<LangSwitcherProps> = ({ onlyIcon = false, classes }) => {
  const { options, optionsNormalized } = useOptions();
  const locale = useLocale();
  const [value, setValue] = useState(locale);

  const handleChange = useCallback(async (locale: string) => {
    await setUserLocale(locale);
    setValue(locale);
  }, []);

  return (
    <CoAutocomplete
      value={value}
      placeholder={"Choose a language"}
      onlyIcon={onlyIcon}
      withSortIcon={false}
      classes={{
        root: classes?.root,
        trigger: cn("p-2 flex justify-center items-center size-[32px]", classes?.trigger),
      }}
      icon={<FlagImage iso2={optionsNormalized[value].code} size={14} />}
      options={options}
      onSelect={handleChange}
    />
  );
};

export default LangSwitcher;
