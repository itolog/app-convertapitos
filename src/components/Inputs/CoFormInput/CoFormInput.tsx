"use client";

import { FC } from "react";
import { Controller } from "react-hook-form";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Control, TContext, TFieldValues } from "react-hook-form/dist/types/form";

import cl from "clsx";

import FormError from "@/components/Errors/FormError/FormError";
import { Input, InputProps } from "@/components/ui/input";

interface CoFormInputProps extends InputProps {
  label?: string;
  error?: string;
  control: Control<TFieldValues, TContext>;
  name: string;
}

const CoFormInput: FC<CoFormInputProps> = ({ error, className, name, control, ...props }) => {
  const inputClass = cl({
    "border-slate-950 dark:border-cyan-500": !error,
    "border-red-500 focus-visible:ring-red-500": error,
    [className as string]: className,
  });

  return (
    <div className={"relative"}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input className={inputClass} {...field} {...props} />}
      />

      <FormError error={error} />
    </div>
  );
};

export default CoFormInput;
