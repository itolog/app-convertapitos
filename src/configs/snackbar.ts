import { SnackbarProviderProps } from "notistack";

export const snackbar: SnackbarProviderProps = {
	maxSnack: 3,
	anchorOrigin: {
		vertical: "top",
		horizontal: "center",
	},
	autoHideDuration: 3000,
};
