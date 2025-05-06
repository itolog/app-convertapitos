"use client";

import React, { useCallback } from "react";

import { FORM_FIELD } from "@/components/QrCode/constants";
import QrCodeForm from "@/components/QrCode/forms/QrCodeForm/QrCodeForm";
import { formFields } from "@/components/QrCode/QrText/data/formFields";
import validationSchema, { type FormValues } from "@/components/QrCode/QrText/validationSchema";

import { useAppDispatch } from "@/store/hooks";
import { setOptions } from "@/store/qrcode/qrcodeSlice";

const initialValues: FormValues = { [FORM_FIELD.TEXT]: "" };

const QrText = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values: FormValues) => {
      dispatch(setOptions({ data: values[FORM_FIELD.TEXT] }));
    },
    [dispatch],
  );

  return (
    <QrCodeForm<FormValues>
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
      formFields={formFields}
    />
  );
};

export default QrText;
