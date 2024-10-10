"use client";

import { FC } from "react";
import { Controller } from "react-hook-form";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Control, TContext, TFieldValues } from "react-hook-form/dist/types/form";

import cl from "clsx";

import { InputError } from "@/types/inputs";

import FormError from "@/components/Errors/FormError/FormError";
import { Input, InputProps } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CoFormInputProps extends InputProps {
  label?: string;
  error?: InputError;
  control: Control<TFieldValues, TContext>;
  name: string;
}

const CoFormInput: FC<CoFormInputProps> = ({
  error,
  className,
  name = "input",
  label,
  type = "text",
  control,
  ...props
}) => {
  const inputClass = cl({
    "border-slate-950 dark:border-cyan-500": !error,
    "border-red-500 focus-visible:ring-red-500": error,
    [className as string]: className,
  });

  return (
    <div className={"relative flex flex-col gap-1"}>
      <Label className={"font-semibold capitalize text-left"} htmlFor={name}>
        {label}
      </Label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input id={name} className={inputClass} type={type} {...field} {...props} />
        )}
      />

      <FormError error={error} />
    </div>
  );
};

export default CoFormInput;
