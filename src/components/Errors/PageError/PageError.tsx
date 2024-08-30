"use client";

import React, { FC } from "react";

import { useTranslations } from "next-intl";

import Alert from "@mui/material/Alert/Alert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

import CoButton from "@/components/Buttons/CoButton/CoButton";

interface PageErrorProps {
	reset: () => void;
}

const PageError: FC<PageErrorProps> = ({ reset }) => {
	const t = useTranslations();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid size={12}>
					<Alert severity="error">{t("Something went wrong")}</Alert>
				</Grid>
				<Grid size={4}>
					<CoButton text={"Try again"} onClick={() => reset()} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default PageError;
