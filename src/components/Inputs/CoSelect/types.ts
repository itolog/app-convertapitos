import { InputError } from "@/types/inputs";

export interface Option {
  label: string;
  value: string;
}

interface Classes {
  root?: string;
  trigger?: string;
}

export interface CoSelectProps {
  options: Option[];
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  classes?: Classes;
  defaultValue?: string;
  error?: InputError;
  withContentLabel?: boolean;
}
