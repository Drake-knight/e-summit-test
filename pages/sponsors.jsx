import Head from "next/head";
import Footer from "../components/Footer";
import SponsorSection from "../components/sponsors/SponsorSection";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";

export default function Sponsors() {
	return (
		<>
			<Head>
				<title>Sponsors</title>
				<meta name="description" content="Sponsors | E-Summit '23" />
				<link rel="icon" href="/assets/favicon.png" />
			</Head>
			<Box
				position="relative"
				overflowX="clip"
				overflow="visible"
				minH="100vh"
				minW="100vw"
				fontFamily="Sen"
				bgColor="bootcamp.dark_blue">
				<Navbar />
				<div data-scroll-section>
					<SponsorSection/>
                    <Footer websiteQueries="91429 40445 (Ravish)" />
				</div>
			</Box>
		</>
	);
}
