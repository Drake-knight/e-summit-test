import { Box } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import Intro from "../../components/conclaves/Intro";
import Card from "../../components/conclaves/Card";
import Hero from "../../components/conclaves/Hero";
import Footer from "../../components/Footer.jsx";
import Navbar from "../../components/Navbar.jsx";
import Events from "../../components/conclaves/Events.jsx";
import Head from "next/head";

function Conclave() {
	return (
		<>
			<Head>
				<title>Sustainability Conclave</title>
				<meta name="description" content="Sustainability conclave | E-Summit '23" />
				<link rel="icon" href="/assets/favicon.png" />
			</Head>

			<Box
				color="white"
				bgColor="bootcamp.dark_blue"
				fontFamily="Sen"
				width="full"
				display="flex"
				flexDir="column"
				alignItems="center"
				minHeight="100vh">
				<Navbar />
				<Intro
					description="Accommodating sustainability is the need of the hour. Realizing this necessity, SUSPIRE, our social campaign was envisioned to encourage and emphasize sustainability throughout the country. 
			Sustainability conclave is an effort to educate and empower the next generation of entrepreneurs, shaping the fate of our planet through sustainability."
					conclaveName="SUSTAINABILITY CONCLAVE"
				/>
				{/* Events section  */}
				<Center
					fontSize="7xl"
					color="#FFECD1"
					p={10}
					bgGradient="linear(to-l, #C12A72, #4135D6)"
					bgClip="text">
					EVENTS
				</Center>
				<Events conclaveName="SUSTAINABILITY CONCLAVE" />
				<Footer websiteQueries="8618127995 Prarthana" />
			</Box>
		</>
	);
}

export default Conclave;
