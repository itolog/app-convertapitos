import { HTMLInputTypeAttribute } from "react";
import { DefaultValues } from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { ZodRawShape } from "zod/lib/types";

import { Option } from "@/components/Inputs/CoSelect/types";

type AsyncDefaultValues<TFieldValues> = (payload?: unknown) => Promise<TFieldValues>;

export interface FormItem {
  name: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute | "co-select" | undefined;
  className?: string;
  options?: Option[];
  rawPlaceholder?: boolean;
}

interface Classes {
  form?: string;
  fieldsContainer?: string;
}

export interface QrCodeFormProps<FormValues> {
  initialValues: DefaultValues<FormValues> | AsyncDefaultValues<FormValues>;
  validationSchema: ZodRawShape;
  onSubmit: (data: FormValues) => void;
  formFields: FormItem[];
  classes?: Classes;
}
