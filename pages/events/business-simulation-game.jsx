import Head from "next/head";
import Footer from "../../components/Footer";
import AboutSection from "../../components/business-simulation-game/AboutSection";
import WhyParticipateSection from "../../components/business-simulation-game/WhyParticipateSection";
import EligibilitySection from "../../components/business-simulation-game/EligibilitySection";
import FAQSection from "../../components/business-simulation-game/FAQSection";
import TimelineSection from "../../components/business-simulation-game/TimelineSection";
import HeroSection from "../../components/business-simulation-game/HeroSection";
import ContactSection from "../../components/business-simulation-game/ContactSection";
import Navbar from "../../components/Navbar";
import { Box } from "@chakra-ui/react";


export default function Bsg() {
	return (
		<>
			<Head>
				<title>BSG - StratUp</title>
				<meta name="description" content="HackStart | E-Summit '23" />
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
					<HeroSection />
					<AboutSection />
					<WhyParticipateSection />
					<EligibilitySection />
					<TimelineSection />
					<FAQSection />
					<ContactSection />
					<Footer websiteQueries="9304404477 (Piyush)" />
				</div>
			</Box>
		</>
	);
}
