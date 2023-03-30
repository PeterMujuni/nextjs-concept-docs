import { useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";
// mui
import { Box, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

const classes = {
	pageTitle: {
		marginBottom: 50,
	},
	field: {
		marginBottom: 20,
		display: "block",
	},
};

const EditHero = ({hero}) => {
	const [heroName, setHeroName] = useState(hero.superHero);
	const [realName, setRealName] = useState(hero.realName);
	const [heroNameError, setHeroNameError] = useState(false);
	const [realNameError, setRealNameError] = useState(false);
	const [form, setForm] = useState({
		superHero: "",
		realName: "",
	});
	const [loading, setLoading] = useState(false);

	const router = useRouter();
    const heroId = router.query.id

	const formHandler = async (e) => {
		e.preventDefault();

		// setHeroNameError(false)
		// setRealNameError(false)

		if (heroName == "") {
			setHeroNameError(true);
		}

		if (realName == "") {
			setRealNameError(true);
		}

		if (heroName && realName) {
			setLoading(true);
			console.log(heroName, realName);
			try {
				const res = await axios.put(`http://localhost:3000/api/hero/${heroId}`, {
					superHero: heroName,
					realName: realName,
				});

				setLoading(false);
				router.push("/");
			} catch (error) {
				setLoading(false);
				console.log(error);
			}
		}
	};

	return (
		<>
			<Typography
				variant="h2"
				component="h1"
				gutterBottom={true}
			>
				add a new hero identity
			</Typography>
			<Box
				direction="column"
				spacing={3}
				component="form"
				onSubmit={formHandler}
				noValidate
			>
				<TextField
					style={classes.field}
					onChange={(e) => {
						setHeroNameError(false);
						setHeroName(e.target.value);
					}}
					variant="outlined"
					label="Superhero"
					name="superHero"
					value={heroName}
					fullWidth
					required
					error={heroNameError}
					helperText={heroNameError ? "Please enter superhero" : ""}
				/>

				<TextField
					style={classes.field}
					onChange={(e) => {
						setRealNameError(false);
						setRealName(e.target.value);
					}}
					variant="outlined"
					label="Real name"
					name="realName"
					value={realName}
					fullWidth
					required
					error={realNameError}
					helperText={
						realNameError ? "Please enter superheros real name" : ""
					}
				/>

				{/* <Button
					type="submit"
					variant="contained"
				>
					Create Hero
				</Button> */}

				<LoadingButton
					type="submit"
					endIcon={<SaveIcon />}
					loading={loading}
					loadingPosition="end"
					variant="contained"
				>
					<span>Save changes</span>
				</LoadingButton>
			</Box>
		</>
	);
};

export async function getServerSideProps({params}) {
    const id = params.id
	const { data } = await axios.get(`http://localhost:3000/api/hero/${id}`);
	const { hero } = data;

	return {
		props: { hero },
	};
}

export default EditHero;
