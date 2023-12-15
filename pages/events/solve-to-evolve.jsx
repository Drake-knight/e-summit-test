import AboutSection from "../../components/solveToEvolve/AboutSection";
import HeroSection from "../../components/solveToEvolve/HeroSection";
import ContactSection from "../../components/solveToEvolve/ContactSection";
import EligibilitySection from "../../components/solveToEvolve/EligibilitySection";
import WhyParticipateSection from "../../components/solveToEvolve/WhyParticipateSection";
import FAQSection from "../../components/solveToEvolve/FAQSection";
import Footer from "../../components/Footer";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import { Box } from "@chakra-ui/react";
import TimelineSection from "../../components/solveToEvolve/TimelineSection";

export default function SolveToEvolve() {
	return (
		<>
			<Head>
				<title>Solve to Evolve</title>
				<meta name="description" content="Solve to Evolve | E-Summit '23" />
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
					<TimelineSection />
					<EligibilitySection />
					<FAQSection />
					<ContactSection />
					<Footer />
				</div>
			</Box>
		</>
	);
}
