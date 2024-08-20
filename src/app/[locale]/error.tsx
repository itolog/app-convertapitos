"use client";

import { useEffect } from "react";

import useErrors from "@/hooks/errors/useErrors";

import Alert from "@mui/material/Alert/Alert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const { handleError } = useErrors();

	useEffect(() => {
		handleError(error);
	}, [error, handleError]);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid xs={12}>
					<Alert severity="error">Something went wrong!</Alert>
				</Grid>
				<Grid xs={4}>
					<button onClick={() => reset()}>Try again</button>
				</Grid>
			</Grid>
		</Box>
	);
}
