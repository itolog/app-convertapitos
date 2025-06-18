"use client";

import React, { useCallback } from "react";

import { mapConfig } from "@/configs/map";

import { FORM_FIELD } from "@/components/QrCode/constants";
import QrCodeForm from "@/components/QrCode/forms/QrCodeForm/QrCodeForm";
import Map from "@/components/QrCode/QrLocation/components/Map/Map";
import { formFields } from "@/components/QrCode/QrLocation/formFields";
import validationSchema, { type FormValues } from "@/components/QrCode/QrLocation/validationSchema";

import { useAppDispatch } from "@/store/hooks";
import { setOptions } from "@/store/qrcode/qrcodeSlice";

const initialValues: FormValues = {
  [FORM_FIELD.LATITUDE]: mapConfig.INIT_LAT,
  [FORM_FIELD.LONGITUDE]: mapConfig.INIT_LONG,
};

const QrLocation = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    ({ lat, lng }: FormValues) => {
      dispatch(setOptions({ data: `geo:${lat},${lng}` }));
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
      renderChildren={Map}
    />
  );
};

export default QrLocation;
