import { useCallback } from "react";

import { useTranslations } from "next-intl";
import { useSnackbar } from "notistack";

interface AppError extends Error {
	digest?: string;
}

interface ErrorConfig {
	withSnackbar?: boolean;
}

const defaultConfig: ErrorConfig = {
	withSnackbar: false,
};

const useErrors = () => {
	const t = useTranslations();
	const { enqueueSnackbar } = useSnackbar();

	const getErrorMessage = useCallback(
		(e: unknown, errorText = "Something went wrong") => {
			let msg = t(errorText);

			if (e instanceof Error) {
				msg = e.message;
			}

			return msg;
		},
		[t],
	);

	const handleError = useCallback(
		(error: AppError | unknown, config: ErrorConfig = defaultConfig): AppError | unknown => {
			if (config.withSnackbar) {
				const msg = getErrorMessage(error);

				enqueueSnackbar(msg, {
					variant: "error",
				});
			}

			return error;
		},
		[enqueueSnackbar, getErrorMessage],
	);

	return {
		handleError,
		getErrorMessage,
	};
};

export default useErrors;
