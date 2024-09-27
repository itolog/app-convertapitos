"use client";

import { useCallback, useEffect } from "react";

import useErrors from "@/hooks/errors/useErrors";
import { useTranslations } from "next-intl";

import { ResponseError } from "@/types/apiTypes";

// import CoButton from "@/components/Buttons/CoButton/CoButton";
import FileForm from "@/components/forms/FileForm/FileForm";
import { FormValues } from "@/components/forms/FileForm/types";

import { useConvertImageMutation } from "@/store/services/Image";

export default function Home() {
	const t = useTranslations();
	const { handleError } = useErrors();

	const [convertImage, { data, isLoading, error }] = useConvertImageMutation();

	const handleSubmit = useCallback(
		async (values: FormValues) => {
			try {
				await convertImage(values);
			} catch (e) {
				handleError(e, {
					withSnackbar: true,
				});
			}
		},
		[convertImage, handleError],
	);

	useEffect(() => {
		if (error) {
			const { data } = error as ResponseError;
			const msg = data?.message ?? t("Something went wrong");
		}
	}, [error, t]);

	const handleDownload = () => {
		if (!data?.data) return;

		const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${data.data.image_link}`;
		fetch(url)
			.then((response) => response.blob())
			.then((blob) => {
				const url = window.URL.createObjectURL(new Blob([blob]));
				const link = document.createElement("a");
				link.href = url;
				link.download = data?.data?.file_name || "downloaded-file";
				document.body.appendChild(link);

				link.click();

				document.body.removeChild(link);
				window.URL.revokeObjectURL(url);
			})
			.catch(() => {
				// enqueueSnackbar("Error fetching the file:", {
				// 	variant: "error",
				// });
			});
	};

	return (
		<div className={"flex items-center justify-center"}>
			{isLoading && "Loading ..."}
			<FileForm onSubmit={handleSubmit} />
			{/* {data?.data?.image_link && <CoButton text={"Download"} onClick={handleDownload} />} */}
		</div>
	);
}
