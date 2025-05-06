"use client";

import { useCallback } from "react";

import generateVCard from "@/utils/generateVCard/generateVCard";
import { VCardData } from "@/utils/generateVCard/types";

import { FORM_FIELD } from "@/components/QrCode/constants";
import QrCodeForm from "@/components/QrCode/forms/QrCodeForm/QrCodeForm";
import { formFields } from "@/components/QrCode/QrVcard/data/formFields";
import validationSchema, { type FormValues } from "@/components/QrCode/QrVcard/validationSchema";

import { useAppDispatch } from "@/store/hooks";
import { setOptions } from "@/store/qrcode/qrcodeSlice";

const initialValues: FormValues = {
  [FORM_FIELD.FIRST_NAME]: "",
  [FORM_FIELD.LAST_NAME]: "",
  [FORM_FIELD.PHONE]: "",
  [FORM_FIELD.EMAIL]: "",
  [FORM_FIELD.COMPANY]: "",
  [FORM_FIELD.JOB_TITLE]: "",
  [FORM_FIELD.URL]: "",
};

const QrVcard = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (data: FormValues) => {
      const vcardData: VCardData = {
        firstName: data[FORM_FIELD.FIRST_NAME],
        lastName: data[FORM_FIELD.LAST_NAME],
        phone: data[FORM_FIELD.PHONE],
        email: data[FORM_FIELD.EMAIL],
        company: data[FORM_FIELD.COMPANY],
        title: data[FORM_FIELD.JOB_TITLE],
        website: data[FORM_FIELD.URL],
      };

      const vCardString = generateVCard(vcardData, "4.0");

      dispatch(setOptions({ data: vCardString }));
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
