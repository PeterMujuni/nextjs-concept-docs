import axios from "axios";
import Link from "next/link";
import { useState } from "react";

// mui
import Typography from "@mui/material/Typography";
import {
	Card,
	CardActions,
	CardContent,
	Grid,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";

const index = ({ heroes }) => {
	const [viewLoading, setViewLoading] = useState(false);
	const [editLoading, setEditLoading] = useState(false);

	return (
		<>
			<Typography
				variant="h2"
				component="h2"
				gutterBottom
			>
				Superhero Identity Manager
			</Typography>
			<Grid
				container
				spacing={3}
			>
				{heroes.map((hero) => {
					return (
						<Grid
							key={hero._id}
							item
							xs={12}
							sm={6}
							md={4}
						>
							<Card sx={{ maxWidth: 345 }}>
								<CardContent>
									<Typography
										variant="h4"
										component="h4"
										gutterBottom
									>
										{hero.superHero}
									</Typography>
									<Typography
										variant="p"
										component="p"
									>
										Reveal Identity
									</Typography>
								</CardContent>
								<CardActions>
									<Link href={`/${hero._id}`}>
										<LoadingButton
											onClick={() =>
												console.log("btn clicked")
											}
											endIcon={<VisibilityIcon />}
											loading={viewLoading}
											loadingPosition="end"
											variant="contained"
										>
											View
										</LoadingButton>
									</Link>
									<Link href={`/${hero._id}/edit`}>
										<LoadingButton
											onClick={() =>
												console.log("btn clicked")
											}
											endIcon={<EditIcon />}
											loading={editLoading}
											loadingPosition="end"
											variant="contained"
										>
											Edit
										</LoadingButton>
									</Link>
								</CardActions>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};

export async function getServerSideProps(context) {
	const { data } = await axios.get("http://localhost:3000/api/hero");
	const { heroes } = data;
	
	return {
		props: { heroes },
	};
}

export default index;
