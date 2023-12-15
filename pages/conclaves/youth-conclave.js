import { Box } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import Intro from "../../components/conclaves/Intro";
import Card from "../../components/conclaves/Card";
import Footer from "../../components/Footer.jsx";
import Events from "../../components/conclaves/Events.jsx";
import Head from "next/head";
import Navbar from "../../components/Navbar";

function Conclave() {
	return (
		<>
			<Head>
				<title>Youth Conclave</title>
				<meta name="description" content="Youth conclave | E-Summit '23" />
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
					description="Youth Conclave is a multi-faceted confluence of engaging competitive and
      networking events that help an individual unlock their latent potential and
      skills in business and entrepreneurship. It is envisioned to promote
      entrepreneurial spirit and aptitude amongst the next generation of graduates
      hence paving the way for young leaders to ride the wave of change in the careers
      they undertake."
					conclaveName="YOUTH CONCLAVE"
				/>
				<Center
					fontSize="7xl"
					color="#FFECD1"
					p={10}
					bgGradient="linear(to-l, #C12A72, #4135D6)"
					bgClip="text">
					EVENTS
				</Center>
				<Events conclaveName="YOUTH CONCLAVE" />
				<Footer websiteQueries="8618127995 Prarthana" />
			</Box>
		</>
	);
}

export default Conclave;
