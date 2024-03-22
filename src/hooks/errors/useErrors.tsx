import { useCallback } from "react";

const useErrors = () => {
	// TODO: add error logging (Sentry)
	const logError = useCallback(() => {}, []);

	return {
		logError,
	};
};

export default useErrors;
