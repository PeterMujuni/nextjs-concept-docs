import { useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";
// mui
import { Box, Container, TextField, Typography, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Send } from "@mui/icons-material";

const classes = {
	pageTitle: {
		marginBottom: 50,
	},
	field: {
		marginBottom: 20,
		display: "block",
	},
};

const addNewHero = () => {
	const [heroName, setHeroName] = useState("");
	const [realName, setRealName] = useState("");
	const [heroNameError, setHeroNameError] = useState(false);
	const [realNameError, setRealNameError] = useState(false);
	const [form, setForm] = useState({
		superHero: "",
		realName: "",
	});
	const [loading, setLoading] = useState(false);

	const router = useRouter();

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
				const res = await axios.post("http://localhost:3000/api/hero", {
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

	// const changehandler = (e) => {
	// 	console.log(e.target);
	// 	setForm({ ...form, [e.target.name]: e.target.value });
	// };

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
					endIcon={<Send />}
					loading={loading}
					loadingPosition="end"
					variant="contained"
				>
					<span>Create Hero</span>
				</LoadingButton>
			</Box>
		</>
	);
};

export default addNewHero;
