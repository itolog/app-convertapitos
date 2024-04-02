import { useTranslation } from "react-i18next";

import { Grid } from "@mui/material";

import CoTextWithTooltip from "@/components/UI/Tooltips/CoTextWithTooltip/CoTextWithTooltip.tsx";

const ApiPage = () => {
	const { t } = useTranslation();

	return (
		<Grid container spacing={2}>
			<Grid overflow={"hidden"} item xs={4}>
				<CoTextWithTooltip tooltipAutoDetect text={"Api PAage "} />
			</Grid>
			<Grid item xs={4}>
				101010101001
			</Grid>
			<Grid item xs={4}>
				{t("Welcome to React")}
			</Grid>
		</Grid>
	);
};

export default ApiPage;
