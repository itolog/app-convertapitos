"use client";

import { FC, useMemo } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

import { CoPhoneInputProps } from "@/components/Inputs/CoPhoneInput/types";

const CoPhoneInput: FC<CoPhoneInputProps> = ({ label, classes, ...props }) => {
  const locale = useLocale();

  const mapLocale = useMemo(() => {
    if (locale === "en") return "us";
    return locale;
  }, [locale]);

  return (
    <div className={cn("mb-0 flex flex-col gap-1", classes?.root)}>
      <span
        className={
          "block truncate text-left text-sm leading-none font-semibold capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        }>
        {label}
      </span>
      <PhoneInput
        defaultCountry={mapLocale}
        inputClassName={"co-phone-input"}
        countrySelectorStyleProps={{
          buttonClassName: "co-phone-btn",
          dropdownStyleProps: {
            className: "co-phone-dropdown",
          },
        }}
        {...props}
      />
    </div>
  );
};

export default CoPhoneInput;
