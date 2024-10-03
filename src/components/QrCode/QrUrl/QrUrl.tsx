"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { Options } from "qr-code-styling";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import CoCard from "@/components/Cards/CoCard/CoCard";
import CoFormInput from "@/components/Inputs/CoFormInput/CoFormInput";
import { FORM_FIELD } from "@/components/QrCode/constants";
import { qrcodeOptions } from "@/components/QrCode/QrUrl/data/qrcodeOptions";
import { FormValues } from "@/components/QrCode/QrUrl/types";
import validationSchema from "@/components/QrCode/QrUrl/validationSchema";
import { Skeleton } from "@/components/ui/skeleton";

const CoQrCode = dynamic(() => import("@/components/QrCode/CoQrCode/CoQrCode"), {
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

const initialValues = { [FORM_FIELD.URL]: qrcodeOptions.data };

const QrUrl = () => {
  const [options, setOptions] = useState<Options>(qrcodeOptions);
  const t = useTranslations("Navigation");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: initialValues,
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setOptions((prevState) => {
      return {
        ...prevState,
        data: data[FORM_FIELD.URL],
      };
    });
  };

  return (
    <CoCard
      classes={{
        root: "w-full md:w-fit h-fit",
      }}>
      <div
        className={
          "flex w-full md:w-fit gap-4 md:gap-10 justify-center items-center p-3 md:p-6 flex-wrap"
        }>
        <form
          className={
            "flex w-full flex-col md:w-fit justify-center items-center gap-6 p-6 border-solid border-2 border-black rounded-md dark:border-white"
          }
          onSubmit={handleSubmit(onSubmit)}>
          <CoFormInput
            control={control}
            className={"w-full md:w-96"}
            name={FORM_FIELD.URL}
            error={errors?.[FORM_FIELD.URL]?.message}
            placeholder={t("url")}
          />

          <CoButton type="submit" text={"Generate"} />
        </form>

        <CoQrCode options={options} />
      </div>
    </CoCard>
  );
};

export default QrUrl;
