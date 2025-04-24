"use client";

import * as React from "react";
import { useCallback, useState } from "react";

import { useLocale } from "next-intl";
import Image from "next/image";

import { setUserLocale } from "@/services/locale";

import CoAutocomplete from "@/components/Inputs/CoAutocomplete/CoAutocomplete";
import useOptions from "@/components/Inputs/LangSwitcher/hooks/useOptions";

const LangSwitcher = () => {
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
      onlyIcon
      withSortIcon={false}
      classes={{
        trigger: "p-0 flex justify-center items-center size-[32px]",
      }}
      icon={
        <Image
          src={`https://flagcdn.com/${optionsNormalized[value].code}.svg`}
          alt={value}
          width={16}
          height={16}
          style={{ width: "16px", height: "16px" }}
          priority
        />
      }
      options={options}
      onSelect={handleChange}
    />
  );
};

export default LangSwitcher;
