import { useCallback } from "react";

interface AppError extends Error {
	digest?: string;
}

const useErrors = () => {
	const handleError = useCallback((error: AppError): AppError => {
		// TODO: add error logging (Sentry)
		// console.log(error);

		return error;
	}, []);

	return {
		handleError,
	};
};

export default useErrors;
