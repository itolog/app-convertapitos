// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { FieldErrors } from "react-hook-form/dist/types/errors";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { TFieldValues } from "react-hook-form/dist/types/form";

export type InputError = string | FieldErrors<TFieldValues>;
