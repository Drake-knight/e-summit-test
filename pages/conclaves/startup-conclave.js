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
				<title>Startup Conclave</title>
				<meta name="description" content="Startup conclave | E-Summit '23" />
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
					description="Aiming to accelerate startup growth, Startup Conclave is concentrated on providing networking and experiential learning. It is a platform for founders, investors and startup enthusiasts to experience extreme networking, gather insights and knowledge on various significant topics and meet the right kind of people in the right business atmosphere.
                The Conclave is crafted intrinsically for prospective and emerging startups looking for funding and expanding their network as well as knowledge, service providers, business/ industrial stalwarts, VC firms, Investors, Incubators and Accelerators with quality sessions, workshops, seminars, round table sessions, panel discussions, pitches, and of course never-ending networking."
					conclaveName="STARTUP CONCLAVE"
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
				<Events conclaveName="STARTUP CONCLAVE" />
				<Footer websiteQueries="8618127995 Prarthana" />
			</Box>
		</>
	);
}

export default Conclave;
