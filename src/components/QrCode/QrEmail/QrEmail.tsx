"use client";

import React, { useCallback } from "react";

import { FORM_FIELD } from "@/components/QrCode/constants";
import QrCodeForm from "@/components/QrCode/forms/QrCodeForm/QrCodeForm";
import { formFields } from "@/components/QrCode/QrEmail/data/formFields";
import validationSchema, { type FormValues } from "@/components/QrCode/QrEmail/validationSchema";

import { useAppDispatch } from "@/store/hooks";
import { setOptions } from "@/store/qrcode/qrcodeSlice";

const initialValues: FormValues = {
  [FORM_FIELD.EMAIL]: "",
};

const QrEmail = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values: FormValues) => {
      dispatch(
        setOptions({
          data: values.email,
        }),
      );
    },
    [dispatch],
  );

  return (
    <QrCodeForm<FormValues>
      initialValues={initialValues}
      formFields={formFields}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    />
  );
};

export default QrEmail;
