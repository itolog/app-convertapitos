import { useCallback } from "react";

import FileForm from "@/Pages/ConvertPage/components/forms/FileForm/FileForm.tsx";
import { FormValues } from "@/Pages/ConvertPage/components/forms/FileForm/types.ts";

import { useConvertImageMutation } from "@/store/services/Image";

const ConvertPage = () => {
	const [convertImage, { data }] = useConvertImageMutation();
	const handleSubmit = useCallback(
		async (values: FormValues) => {
			await convertImage(values);
		},
		[convertImage],
	);

	return (
		<div className={"ConvertPage"}>
			<FileForm onSubmit={handleSubmit} />
			{data?.data?.image_link && (
				<img
					width={200}
					height={200}
					src={`${import.meta.env.VITE_API_BASE_URL}/${data.data.image_link}`}
					alt=""
				/>
			)}
		</div>
	);
};

export default ConvertPage;
