import Grid from "@mui/material/Grid2";

import ProfileCard from "@/components/Cards/ProfileCard/ProfileCard";

const Page = async () => {
	return (
		<Grid container spacing={2}>
			<Grid display="flex" justifyContent="center" alignItems="center" size="grow">
				<ProfileCard />
			</Grid>
		</Grid>
	);
};

export default Page;
