import { InputHTMLAttributes } from "react";
import { Control, FieldValue, FieldValues, Path } from "react-hook-form";

import { FormInputError } from "@/types/inputs";

interface Classes {
  root?: string;
  label?: string;
  input?: string;
}

export interface CoFormInputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FormInputError;
  control: Control<FieldValue<T>, unknown>;
  name: Path<FieldValue<T>>;
  classes?: Classes;
}
