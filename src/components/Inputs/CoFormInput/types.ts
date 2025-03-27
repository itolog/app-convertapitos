import * as React from "react";
import { Control, FieldValue, FieldValues, Path } from "react-hook-form";

import { InputError } from "@/types/inputs";

interface Classes {
  root?: string;
  label?: string;
  input?: string;
}

export interface CoFormInputProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: InputError;
  control: Control<FieldValue<T>, unknown>;
  name: Path<FieldValue<T>>;
  classes?: Classes;
}
