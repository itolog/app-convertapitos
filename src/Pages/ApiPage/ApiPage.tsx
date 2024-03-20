import { useTranslation } from "react-i18next";

import { Grid } from "@mui/material";

import CoTextWithTooltip from "@/components/UI/Tooltips/CoTextWithTooltip/CoTextWithTooltip.tsx";

const ApiPage = () => {
	const { t } = useTranslation();
	const Tool = () => {
		return <div>ALALALLALALALALLAL</div>;
	};

	return (
		<Grid container spacing={2}>
			<Grid overflow={"hidden"} item xs={4}>
				<CoTextWithTooltip tooltipAutoDetect text={"Api PAage Looooooooooooooo"} />
			</Grid>
			<Grid item xs={4}>
				<CoTextWithTooltip tooltip={<Tool />} text={"Api PAage"} />
			</Grid>
			<Grid item xs={4}>
				{t("Welcome to React")}
			</Grid>
		</Grid>
	);
};

export default ApiPage;
