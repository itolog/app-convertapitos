import { useCallback } from "react";

interface AppError extends Error {
	digest?: string;
}

const useErrors = () => {
	// TODO: add error logging (Sentry)
	const handleError = useCallback((error: AppError) => {}, []);

	return {
		handleError,
	};
};

export default useErrors;
