"use client";

import { useCallback } from "react";

import { FORM_FIELD } from "@/components/QrCode/constants";
import QrCodeForm from "@/components/QrCode/forms/QrCodeForm/QrCodeForm";
import { formFields } from "@/components/QrCode/QrVcard/data/formFields";
import { FormValues } from "@/components/QrCode/QrVcard/types";
import validationSchema from "@/components/QrCode/QrVcard/validationSchema";

import { useAppDispatch } from "@/store/hooks";
import { setOptions } from "@/store/qrcode/qrcodeSlice";

const initialValues = {
  [FORM_FIELD.FIRST_NAME]: "",
  [FORM_FIELD.LAST_NAME]: "",
};

const QrVcard = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (data: FormValues) => {
      console.log(data);
      // dispatch(setOptions({ data: data[FORM_FIELD.URL] }));
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
        fieldsContainer: "grid grid-cols-1 md:grid-cols-2",
      }}
    />
  );
};

export default QrVcard;
