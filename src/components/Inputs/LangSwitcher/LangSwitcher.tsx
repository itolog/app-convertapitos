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
      classes={{
        trigger: "px-2",
      }}
      icon={
        <Image
          src={`https://flagcdn.com/20x15/${optionsNormalized[value].code}.png`}
          alt={value}
          width={20}
          height={15}
          priority
        />
      }
      options={options}
      onSelect={handleChange}
    />
  );
};

export default LangSwitcher;
