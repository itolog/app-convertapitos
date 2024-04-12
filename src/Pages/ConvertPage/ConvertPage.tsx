import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";

import FileForm from "@/Pages/ConvertPage/components/forms/FileForm/FileForm.tsx";
import { FormValues } from "@/Pages/ConvertPage/components/forms/FileForm/types.ts";
import { useSnackbar } from "notistack";

import { ResponseError } from "@/types/apiTypes.ts";

import { useConvertImageMutation } from "@/store/services/Image";

const ConvertPage = () => {
	const { t } = useTranslation();
	const { enqueueSnackbar } = useSnackbar();

	const [convertImage, { data, isLoading, error }] = useConvertImageMutation();
	const handleSubmit = useCallback(
		async (values: FormValues) => {
			await convertImage(values);
		},
		[convertImage],
	);

	useEffect(() => {
		if (error) {
			const { data } = error as ResponseError;
			const msg = data?.message ?? t("Something went wrong");
			enqueueSnackbar(msg, {
				variant: "error",
			});
		}
	}, [enqueueSnackbar, error, t]);

	const handleDownload = () => {
		if (!data?.data) return;

		const url = `${import.meta.env.VITE_API_BASE_URL}/${data.data.image_link}`;
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
				enqueueSnackbar("Error fetching the file:", {
					variant: "error",
				});
			});
	};

	return (
		<div className={"ConvertPage"}>
			{isLoading && "Loading ..."}
			<FileForm onSubmit={handleSubmit} />
			{data?.data?.image_link && <button onClick={handleDownload}>download</button>}
		</div>
	);
};

export default ConvertPage;
