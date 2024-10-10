"use client";

import React, { useEffect } from "react";
import { FieldValues, Path, PathValue, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import cl from "clsx";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import CoCard from "@/components/Cards/CoCard/CoCard";
import FormError from "@/components/Errors/FormError/FormError";
import CoFormInput from "@/components/Inputs/CoFormInput/CoFormInput";
import CoSelect from "@/components/Inputs/CoSelect/CoSelect";
import { QrCodeFormProps } from "@/components/QrCode/forms/QrCodeForm/types";
import QrcodeSettings from "@/components/QrCode/QrcodeSettings/QrcodeSettings";
import { qrcodeOptions } from "@/components/QrCode/QrUrl/data/qrcodeOptions";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";

import { useAppDispatch } from "@/store/hooks";
import { resetOptions, setOptions } from "@/store/qrcode/qrcodeSlice";

const CoQrCode = dynamic(() => import("@/components/QrCode/components/CoQrCode/CoQrCode"), {
  ssr: false,
  loading: () => (
    <div className={"qrcode-container"}>
      <Skeleton className={"rounded-none w-[256px] h-[256px]"} />
      <div className={"flex flex-row w-full justify-between items-center flex-wrap"}>
        <Skeleton className={"rounded-md w-36 h-[36px]"} />
        <Skeleton className={"rounded-md w-24 h-[36px]"} />
      </div>
    </div>
  ),
});

function QrCodeForm<FormValues extends FieldValues>({
  initialValues,
  validationSchema,
  onSubmit,
  formFields,
  classes,
}: QrCodeFormProps<FormValues>) {
  const dispatch = useAppDispatch();
  const t = useTranslations();

  const form = useForm<FormValues>({
    defaultValues: initialValues,
    resolver: zodResolver(validationSchema),
  });

  useEffect(() => {
    dispatch(setOptions({ data: qrcodeOptions.data }));

    return () => {
      dispatch(resetOptions());
    };
  }, [dispatch]);

  const fromClass = cl(
    "flex w-full flex-col md:w-fit max-w-[436px] justify-center items-center gap-6 p-6 border-solid border-2 border-black rounded-md dark:border-cyan-900",
    classes?.form,
  );

  const fieldsContainerClasses = cl("grid w-full", classes?.fieldsContainer);

  return (
    <CoCard
      classes={{
        root: "w-full md:w-fit h-fit",
      }}>
      <div
        className={
          "flex w-full md:w-fit gap-4 md:gap-10 justify-center items-start p-3 md:p-6 flex-wrap"
        }>
        <Form {...form}>
          <form className={fromClass} onSubmit={form.handleSubmit(onSubmit)}>
            <div className={fieldsContainerClasses}>
              {formFields.map((item) => {
                if (item.type === "textarea") {
                  return (
                    <FormField
                      key={item.name}
                      control={form.control}
                      name={item.name as Path<FormValues>}
                      render={({ field, formState }) => (
                        <FormItem className={"relative"}>
                          <Textarea
                            className={"select-border"}
                            value={field.value}
                            placeholder={item.placeholder}
                            onChange={field.onChange}
                          />
                          <FormError error={formState.errors?.[item.name]?.message} />
                        </FormItem>
                      )}
                    />
                  );
                }
                if (item.type === "checkbox") {
                  return (
                    <FormField
                      key={item.name}
                      control={form.control}
                      name={item.name as Path<FormValues>}
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-2 space-y-0 rounded-md border px-2 h-9 shadow dark:shadow-cyan-500">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className={"leading-normal"}>{t(item.label)}</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  );
                }
                if (item.type === "co-select") {
                  return (
                    <CoSelect
                      key={item.name}
                      placeholder={item.placeholder}
                      label={t(item.label)}
                      error={form.formState.errors?.[item.name]?.message}
                      withContentLabel={false}
                      defaultValue={form.formState?.defaultValues?.[item.name]}
                      onChange={(value) => {
                        const name = item.name as Path<FormValues>;
                        const payload = value as PathValue<FormValues, Path<FormValues>>;

                        form.setValue(name, payload);
                      }}
                      options={item?.options ?? []}
                    />
                  );
                }
                return (
                  <CoFormInput
                    key={item.name}
                    control={form.control}
                    label={t(item.label)}
                    classes={{
                      input: item.className,
                    }}
                    name={item.name}
                    error={form.formState.errors?.[item.name]?.message}
                    placeholder={item.placeholder}
                  />
                );
              })}
            </div>

            <QrcodeSettings />
            <CoButton type="submit" text={"Generate"} />
          </form>
        </Form>

        <CoQrCode />
      </div>
    </CoCard>
  );
}

export default QrCodeForm;
