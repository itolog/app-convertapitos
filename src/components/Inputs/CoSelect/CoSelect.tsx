import React, { FC } from "react";

import cl from "clsx";

import { CoSelectProps } from "@/components/Inputs/CoSelect/types";
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
}) => {
  const triggerClass = cl("w-auto", classes?.trigger);

  return (
    <Select defaultValue={defaultValue} onValueChange={onChange}>
      <SelectTrigger className={triggerClass}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CoSelect;
