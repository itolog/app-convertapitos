"use client";

import { useCallback } from "react";

import { useTranslations } from "next-intl";
import { toast } from "sonner";

interface ErrorConfig {
  withSnackbar?: boolean;
}

interface ErrorMessageOptions {
  defaultMessage?: string;
}

// Maybe need to add a flag “whitTranslation” to enable/disable error translation on the client side
const defaultConfig: ErrorConfig = {
  withSnackbar: false,
};

const useErrors = () => {
  const t = useTranslations();

  const getErrorMessage = useCallback((error: unknown, options: ErrorMessageOptions = {}) => {
    if (error instanceof Error) {
      return error.message;
    }

    return t(options.defaultMessage ?? "Something went wrong");
  }, []);

  const handleError = useCallback(
    (error: unknown, config: ErrorConfig = defaultConfig) => {
      if (config.withSnackbar) {
        const msg = getErrorMessage(error);
        toast.error(msg);
      }

      return error;
    },
    [getErrorMessage],
  );

  return {
    handleError,
    getErrorMessage,
  };
};

export default useErrors;
