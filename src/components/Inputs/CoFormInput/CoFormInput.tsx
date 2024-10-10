"use client";

import { FC } from "react";
import { Controller } from "react-hook-form";

import cl from "clsx";

import FormError from "@/components/Errors/FormError/FormError";
import { CoFormInputProps } from "@/components/Inputs/CoFormInput/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CoFormInput: FC<CoFormInputProps> = ({
  error,
  name = "input",
  label,
  control,
  classes,
  ...props
}) => {
  const rootClass = cl("relative w-full flex flex-col gap-1", classes?.root);
  const labelClass = cl("font-semibold capitalize text-left", classes?.label);

  const inputClass = cl(classes?.input, {
    "border-slate-950 dark:border-cyan-500": !error,
    "border-red-500 focus-visible:ring-red-500": error,
  });

  return (
    <div className={rootClass}>
      <Label className={labelClass} htmlFor={name}>
        {label}
      </Label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input id={name} className={inputClass} {...field} {...props} />}
      />

      <FormError error={error} />
    </div>
  );
};

export default CoFormInput;
