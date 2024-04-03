import { useCallback } from "react";

import FileForm from "@/Pages/ConvertPage/components/forms/FileForm/FileForm.tsx";
import { FormValues } from "@/Pages/ConvertPage/components/forms/FileForm/types.ts";

const ConvertPage = () => {
	const handleSubmit = useCallback((values: FormValues) => {
		console.log(values.convert_to);
	}, []);

	return (
		<div className={"ConvertPage"}>
			<FileForm onSubmit={handleSubmit} />
		</div>
	);
};

export default ConvertPage;
