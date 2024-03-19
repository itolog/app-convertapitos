import { Grid } from "@mui/material";

import CoTextWithTooltip from "@/components/UI/Tooltips/CoTextWithTooltip/CoTextWithTooltip.tsx";

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
