// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Control, TContext, TFieldValues } from "react-hook-form/dist/types/form";

import { InputError } from "@/types/inputs";

import { InputProps } from "@/components/ui/input";

interface Classes {
  root?: string;
  label?: string;
  input?: string;
}

export interface CoFormInputProps extends InputProps {
  label?: string;
  error?: InputError;
  control: Control<TFieldValues, TContext>;
  name: string;
  classes?: Classes;
}
