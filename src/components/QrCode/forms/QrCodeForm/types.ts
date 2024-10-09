import { HTMLInputTypeAttribute } from "react";
import { DefaultValues } from "react-hook-form";

import { ZodObject } from "zod";

import { Option } from "@/components/Inputs/CoSelect/types";

type AsyncDefaultValues<TFieldValues> = (payload?: unknown) => Promise<TFieldValues>;

export interface FormItem {
  name: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute | "co-select" | undefined;
  className?: string;
  options?: Option[];
}

interface Classes {
  form?: string;
  fieldsContainer?: string;
}

export interface QrCodeFormProps<FormValues> {
  initialValues: DefaultValues<FormValues> | AsyncDefaultValues<FormValues>;
  validationSchema: ZodObject<any>;
  onSubmit: (data: FormValues) => void;
  formFields: FormItem[];
  classes?: Classes;
}
