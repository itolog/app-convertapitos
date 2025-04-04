"use client";

import { FC, useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { FilePondErrorDescription, FilePondFile } from "filepond";
import dynamic from "next/dynamic";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import CoCard from "@/components/common/Cards/CoCard/CoCard";
import { Skeleton } from "@/components/common/ui/skeleton";
import { OnUpdateFilesType } from "@/components/FileUpload/FileUpload";
import { fileTypeOptions, FORM_FIELD, initialValues } from "@/components/forms/FileForm/constants";
import { FileFormProps, FormValues } from "@/components/forms/FileForm/types";
import validationSchema from "@/components/forms/FileForm/validationSchema";
import CoAutocomplete from "@/components/Inputs/CoAutocomplete/CoAutocomplete";

const FileUpload = dynamic(() => import("@/components/FileUpload/FileUpload"), {
  ssr: false,
  loading: () => <Skeleton className={"w-full h-[288px] mb-4"} />,
});

const FileForm: FC<FileFormProps> = ({ onSubmit, onRemoveFile, loading }) => {
  const [disabledOption, setDisabledOption] = useState("");

  const {
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: initialValues,
    resolver: zodResolver(validationSchema),
  });

  const handleChangeFile = useCallback<OnUpdateFilesType>(
    (files) => {
      const file = files?.[0]?.file;
      setDisabledOption(file?.type.split("/")[1]);

      setValue(FORM_FIELD.IMAGE_FILE, file, { shouldValidate: true });
    },
    [setValue],
  );

  const handleChangeFileType = useCallback(
    (value: string) => {
      setValue(FORM_FIELD.CONVERT_TO, value, { shouldValidate: true });
    },
    [setValue],
  );

  const handleRemoveFile = useCallback(
    (error: FilePondErrorDescription | null, file: FilePondFile) => {
      setDisabledOption("");
      setValue(FORM_FIELD.CONVERT_TO, "");

      if (onRemoveFile) {
        onRemoveFile(error, file);
      }
    },
    [onRemoveFile, setValue],
  );

  return (
    <CoCard
      classes={{
        root: "w-full md:w-fit",
      }}>
      <form
        className={"flex flex-col gap-6 m-5"}
        onSubmit={handleSubmit(onSubmit)}
        autoComplete={"off"}>
        <div className={"flex justify-end gap-2 md:gap-4"}>
          <div className={"flex relative w-3/6 md:w-48"}>
            <CoAutocomplete
              options={fileTypeOptions}
              disabled={loading || !getValues(FORM_FIELD.IMAGE_FILE)}
              disabledOption={disabledOption}
              value={getValues(FORM_FIELD.CONVERT_TO)}
              error={errors[FORM_FIELD.CONVERT_TO]?.message}
              onSelect={handleChangeFileType}
            />
          </div>

          <CoButton
            loading={loading}
            type={"submit"}
            className={"w-3/6 md:w-48"}
            text={"Convert"}
          />
        </div>

        <FileUpload
          onremovefile={handleRemoveFile}
          onupdatefiles={handleChangeFile}
          error={errors[FORM_FIELD.IMAGE_FILE]?.message}
        />
        <div />
      </form>
    </CoCard>
  );
};

export default FileForm;
