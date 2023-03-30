import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container } from "@mui/system";

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>
				<Container maxWidth="xl">{children}</Container>
			</main>
			<Footer />
		</>
	);
};

export default Layout;
