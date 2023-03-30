import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

const Navbar = () => {
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Link href="/">
						<Typography
							variant="h6"
							component="h1"
							sx={{ flexGrow: 1 }}
						>
							Superhero Identity
						</Typography>
					</Link>
					<Link href="/add">
						<Button
							color="secondary"
							variant="contained"
						>
							Create Identity
						</Button>
					</Link>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
