import AboutSection from "../../components/strategize/AboutSection";
import HeroSection from "../../components/strategize/HeroSection";
import ContactSection from "../../components/strategize/ContactSection";
import EligibilitySection from "../../components/strategize/EligibilitySection";
import WhyParticipateSection from "../../components/strategize/WhyParticipateSection";
import FAQSection from "../../components/strategize/FAQSection";
import Footer from "../../components/Footer";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import { Box } from "@chakra-ui/react";
import TimelineSection from "../../components/strategize/TimelineSection";
import RoundsSection from "../../components/strategize/RoundsSection";

export default function Strategize() {
	return (
		<>
			<Head>
				<title>Strategize</title>
				<meta name="description" content="Strategize | E-Summit '23" />
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
					<RoundsSection />
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
