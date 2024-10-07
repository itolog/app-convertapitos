"use client";

import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import CoCard from "@/components/Cards/CoCard/CoCard";
import CoFormInput from "@/components/Inputs/CoFormInput/CoFormInput";
import { FORM_FIELD } from "@/components/QrCode/constants";
import QrcodeSettings from "@/components/QrCode/QrcodeSettings/QrcodeSettings";
import { qrcodeOptions } from "@/components/QrCode/QrUrl/data/qrcodeOptions";
import { FormValues } from "@/components/QrCode/QrUrl/types";
import validationSchema from "@/components/QrCode/QrUrl/validationSchema";
import { Skeleton } from "@/components/ui/skeleton";

import { useAppDispatch } from "@/store/hooks";
import { resetOptions, setOptions } from "@/store/qrcode/qrcodeSlice";

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
  const dispatch = useAppDispatch();
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
    dispatch(setOptions({ data: data[FORM_FIELD.URL] }));
  };

  useEffect(() => {
    dispatch(setOptions({ data: qrcodeOptions.data }));

    return () => {
      dispatch(resetOptions());
    };
  }, [dispatch]);

  return (
    <CoCard
      classes={{
        root: "w-full md:w-fit h-fit",
      }}>
      <div
        className={
          "flex w-full md:w-fit gap-4 md:gap-10 justify-center items-start p-3 md:p-6 flex-wrap"
        }>
        <form
          className={
            "flex w-full flex-col md:w-fit max-w-[436px] justify-center items-center gap-6 p-6 border-solid border-2 border-black rounded-md dark:border-cyan-900"
          }
          onSubmit={handleSubmit(onSubmit)}>
          <CoFormInput
            control={control}
            label={t("url")}
            className={"w-full md:w-96"}
            name={FORM_FIELD.URL}
            error={errors?.[FORM_FIELD.URL]?.message}
            placeholder={"https://www.google.com/"}
          />
          <QrcodeSettings />
          <CoButton type="submit" text={"Generate"} />
        </form>

        <CoQrCode />
      </div>
    </CoCard>
  );
};

export default QrUrl;
