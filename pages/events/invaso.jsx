import Head from "next/head";
import Footer from "../../components/Footer";
import AboutSection from "../../components/invaso/AboutSection";
import HeroSection from "../../components/invaso/HeroSection";
import FAQSection from "../../components/invaso/FAQSection";
import ContactSection from "../../components/invaso/ContactSection";
import RoundsSection from "../../components/invaso/RoundsSection";
import EligibilitySection from "../../components/invaso/EligibilitySection";
import Navbar from "../../components/Navbar";
import { Box } from "@chakra-ui/react";
import TimelineSection from "../../components/invaso/TimelineSection";
import WhyParticipateSection from "../../components/invaso/WhyParticipateSection";

export default function Bootcamp() {
	return (
		<>
			<Head>
				<title>Invaso</title>
				<meta name="description" content="Invaso | E-Summit '23" />
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
					<RoundsSection />
					<EligibilitySection />
					<FAQSection />
					<ContactSection />
					<Footer />
				</div>
			</Box>
		</>
	);
}
