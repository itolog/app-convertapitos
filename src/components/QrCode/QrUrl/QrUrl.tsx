"use client";

import { useCallback } from "react";

import { FORM_FIELD } from "@/components/QrCode/constants";
import QrCodeForm from "@/components/QrCode/forms/QrCodeForm/QrCodeForm";
import { formFields } from "@/components/QrCode/QrUrl/data/formFields";
import { qrcodeOptions } from "@/components/QrCode/QrUrl/data/qrcodeOptions";
import { FormValues } from "@/components/QrCode/QrUrl/types";
import validationSchema from "@/components/QrCode/QrUrl/validationSchema";

import { useAppDispatch } from "@/store/hooks";
import { setOptions } from "@/store/qrcode/qrcodeSlice";

const initialValues = { [FORM_FIELD.URL]: qrcodeOptions.data };

const QrUrl = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (data: FormValues) => {
      dispatch(setOptions({ data: data[FORM_FIELD.URL] }));
    },
    [dispatch],
  );

  return (
    <QrCodeForm<FormValues>
      formFields={formFields}
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    />
  );
};

export default QrUrl;
