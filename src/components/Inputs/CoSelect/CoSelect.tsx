import React, { FC } from "react";

import cl from "clsx";

import FormError from "@/components/Errors/FormError/FormError";
import { CoSelectProps } from "@/components/Inputs/CoSelect/types";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CoSelect: FC<CoSelectProps> = ({
  options,
  onChange,
  placeholder = "Select",
  defaultValue,
  classes,
  label,
  error,
  withContentLabel = true,
}) => {
  const rootClass = cl("relative flex flex-col gap-1", classes?.root);
  const triggerClass = cl("w-auto", classes?.trigger);

  return (
    <div className={rootClass}>
      {label && (
        <Label className={"font-semibold capitalize text-left"} htmlFor={label}>
          {label}
        </Label>
      )}
      <Select defaultValue={defaultValue} onValueChange={onChange}>
        <SelectTrigger className={triggerClass}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {withContentLabel && <SelectLabel>{label}</SelectLabel>}
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {error && <FormError error={error} />}
    </div>
  );
};

export default CoSelect;
