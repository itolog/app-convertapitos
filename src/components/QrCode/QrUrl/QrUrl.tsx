"use client";

import { useState } from "react";

import { Form, Formik } from "formik";
import dynamic from "next/dynamic";
import { Options } from "qr-code-styling";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import CoCard from "@/components/Cards/CoCard/CoCard";
import CoFormInput from "@/components/Inputs/CoFormInput/CoFormInput";
import { FORM_FIELD } from "@/components/QrCode/constants";
import { qrcodeDefaultOptions } from "@/components/QrCode/data/qrcode";
import validationSchema from "@/components/QrCode/QrUrl/validationSchema";
import { Skeleton } from "@/components/ui/skeleton";

const CoQrCode = dynamic(() => import("@/components/QrCode/CoQrCode/CoQrCode"), {
  ssr: false,
  loading: () => <Skeleton className={"w-[300px] rounded-none h-[300px]"} />,
});

const initialValues = { [FORM_FIELD.URL]: "" };

const QrUrl = () => {
  const [options, setOptions] = useState<Options>(qrcodeDefaultOptions);

  return (
    <CoCard>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}>
        {({ errors }) => {
          return (
            <Form className={"flex flex-col justify-center items-center gap-6 p-4"}>
              <CoFormInput
                className={"w-full md:w-96"}
                onChange={(e) => {
                  setOptions((prevState) => {
                    return {
                      ...prevState,
                      data: e.target.value,
                    };
                  });
                }}
                id={FORM_FIELD.URL}
                error={errors?.[FORM_FIELD.URL]}
                placeholder="Email"
              />
              <CoQrCode options={options} />

              <CoButton type="submit">Submit</CoButton>
            </Form>
          );
        }}
      </Formik>
    </CoCard>
  );
};

export default QrUrl;
