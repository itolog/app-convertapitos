"use client";

import React, { useCallback } from "react";

import { mapConfig } from "@/configs";

import { FORM_FIELD } from "@/components/QrCode/constants";
import QrCodeForm from "@/components/QrCode/forms/QrCodeForm/QrCodeForm";
import Map from "@/components/QrCode/QrLocation/components/Map/Map";
import { formFields } from "@/components/QrCode/QrLocation/formFields";
import { FormValues } from "@/components/QrCode/QrLocation/types";
import validationSchema from "@/components/QrCode/QrLocation/validationSchema";

import { useAppDispatch } from "@/store/hooks";
import { setOptions } from "@/store/qrcode/qrcodeSlice";

const initialValues = {
  [FORM_FIELD.LATITUDE]: mapConfig.INIT_LAT,
  [FORM_FIELD.LONGITUDE]: mapConfig.INIT_LONG,
};

const QrLocation = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    ({ latitude, longitude }: FormValues) => {
      dispatch(setOptions({ data: `geo:${latitude},${longitude}` }));
    },
    [dispatch],
  );

  return (
    <div>
      <QrCodeForm<FormValues>
        formFields={formFields}
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        classes={{
          fieldsContainer: "gap-x-8 gap-y-4 grid-cols-1 w-full md:grid-cols-2 items-end",
        }}
        renderChildren={({ watch, setValue }) => {
          const lat = watch("latitude");
          const long = watch("longitude");

          return <Map<FormValues> lat={lat} long={long} setValue={setValue} />;
        }}
      />
    </div>
  );
};

export default QrLocation;
