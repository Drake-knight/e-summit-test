import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Box } from "@chakra-ui/react";
import HeroSection from "../../components/startup-conclave/HeroSection";
import AboutStartupShowcase from "../../components/startup-conclave/AboutStartupShowcase";
// import TimelineStartupExpo from "../../components/startup-conclave/ContactStartupExpo";
import ContactSection from "../../components/startup-conclave/ContactStartupExpo";
import startup from "../../public/assets/conclaves/startup showcase_logo.png";

export default function StartupShowcase() {
	return (
		<>
			<Head>
				<title>Startup Expo</title>
				<meta name="description" content="Startup Expo | E-Summit '23" />
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
					<HeroSection
						eventName="Startup Expo"
						oneLine="Join the Startup Revolution"
						description="A grand expo for innovative startups to get in touch with thousands of potential customers and investors."
						deadline="2nd April 2023"
						src={startup}
					/>
					<AboutStartupShowcase />
					{/* <TimelineStartupExpo /> */}
					<ContactSection />
					<Footer websiteQueries="8618127995 Prarthana" />
				</div>
			</Box>
		</>
	);
}
