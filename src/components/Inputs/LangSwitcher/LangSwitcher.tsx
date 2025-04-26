"use client";

import * as React from "react";
import { FC, useCallback, useState } from "react";

import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import Image from "next/image";

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
      icon={
        <Image
          alt={value}
          src={`https://flagcdn.com/16x12/${optionsNormalized[value].code}.png`}
          width="14"
          height="12"
          style={{ width: "14px", height: "12px" }}
          priority
        />
      }
      options={options}
      onSelect={handleChange}
    />
  );
};

export default LangSwitcher;
