import CoTextWithTooltip from "@/shared/ui/CoTextWithTooltip/CoTextWithTooltip.tsx";

import { Grid } from "@mui/material";

const ApiPage = () => {
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
				<CoTextWithTooltip text={"Api PAage"} />
			</Grid>
		</Grid>
	);
};

export default ApiPage;
