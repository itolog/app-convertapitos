"use client";

import React, { useCallback } from "react";

import { FORM_FIELD } from "@/components/QrCode/constants";
import QrCodeForm from "@/components/QrCode/forms/QrCodeForm/QrCodeForm";
import { formFields } from "@/components/QrCode/QrWifi/data/formFields";
import { FormValues } from "@/components/QrCode/QrWifi/type";
import validationSchema from "@/components/QrCode/QrWifi/validationSchema";

import { useAppDispatch } from "@/store/hooks";
import { setOptions } from "@/store/qrcode/qrcodeSlice";

const initialValues = {
  [FORM_FIELD.SSID]: "",
  [FORM_FIELD.PASSWORD]: "",
  [FORM_FIELD.ENCRYPTION]: "wpa",
  [FORM_FIELD.WIFI_HIDDEN]: false,
};

const QrWifi = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values: FormValues) => {
      const data = `WIFI:S:${values.ssid};T:${values.encryption.toUpperCase()};P:${values.password};H:${values.wifi_hidden};;`;

      dispatch(
        setOptions({
          data,
        }),
      );
    },
    [dispatch],
  );

  return (
    <QrCodeForm<FormValues>
      formFields={formFields}
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      classes={{
        fieldsContainer: "gap-x-8 gap-y-4 grid-cols-1 w-full md:grid-cols-2 items-end",
      }}
    />
  );
};

export default QrWifi;
