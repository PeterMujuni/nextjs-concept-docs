import axios from "axios";
import Link from "next/link";
import {useRouter} from "next/router"

// mui
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, Card, CardActions, CardContent } from "@mui/material";

const detailHero = ({ hero }) => {
	const router = useRouter()
	const heroId = router.query.id

	const deleteHero = async () => {
		try {
			const res = await axios.delete(`http://localhost:3000/api/hero/${heroId}`)
			router.push("/")
		} catch (error) {
			
		}
	}
	return (
		<>
			<Typography
				variant="h2"
				component="h1"
				gutterBottom
			>
				Identity of Hero
			</Typography>
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
						{hero.realName}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						onClick={deleteHero}
						variant="contained"
						color="warning"
					>
						Delete
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export async function getServerSideProps({ params }) {
	const id = params.id;
	const { data } = await axios.get(`http://localhost:3000/api/hero/${id}`);
	const { hero } = data;
	return {
		props: { hero },
	};
}

export default detailHero;
