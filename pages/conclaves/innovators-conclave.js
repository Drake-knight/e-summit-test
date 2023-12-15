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
				<title>Innovator&apos;s Conclave</title>
				<meta name="description" content="Innovator's conclave | E-Summit '23" />
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
					description="We want to enrich people's thought processes by making them experience a gamut of disciplines that will nurture them towards solving new engineering challenges and a plethora of market opportunities lying alongside them."
					conclaveName="INNOVATORS CONCLAVE"
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
				<Events conclaveName="INNOVATORS CONCLAVE" />
				<Footer websiteQueries="8618127995 Prarthana" />
			</Box>
		</>
	);
}

export default Conclave;
