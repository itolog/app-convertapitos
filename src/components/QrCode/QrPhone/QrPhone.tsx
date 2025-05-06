"use client";

import React, { useCallback } from "react";

import { FORM_FIELD } from "@/components/QrCode/constants";
import QrCodeForm from "@/components/QrCode/forms/QrCodeForm/QrCodeForm";
import { formFields } from "@/components/QrCode/QrPhone/data/formFields";
import validationSchema, { type FormValues } from "@/components/QrCode/QrPhone/validationSchema";

import { useAppDispatch } from "@/store/hooks";
import { setOptions } from "@/store/qrcode/qrcodeSlice";

const initialValues: FormValues = { [FORM_FIELD.PHONE]: "" };

const QrPhone = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values: FormValues) => {
      dispatch(setOptions({ data: `tel:${values[FORM_FIELD.PHONE]}` }));
    },
    [dispatch],
  );

  return (
    <QrCodeForm<FormValues>
      validationSchema={validationSchema}
      initialValues={initialValues}
      formFields={formFields}
      onSubmit={handleSubmit}
    />
  );
};

export default QrPhone;
