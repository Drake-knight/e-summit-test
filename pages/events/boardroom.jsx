import Head from "next/head";
import Footer from "../../components/Footer";
import AboutSection from "../../components/boardroom/AboutSection";
import WhyParticipateSection from "../../components/boardroom/WhyParticipateSection";
import EligibilitySection from "../../components/boardroom/EligibilitySection";
import RoundsSection from "../../components/boardroom/RoundsSection";
import FAQSection from "../../components/boardroom/FAQSection";
import TimelineSection from "../../components/boardroom/TimelineSection";
import HeroSection from "../../components/boardroom/HeroSection";
import ContactSection from "../../components/boardroom/ContactSection";
import Navbar from "../../components/Navbar";
import { Box } from "@chakra-ui/react";


export default function Bootcamp() {
	return (
		<>
			<Head>
				<title>Boardroom</title>
				<meta name="description" content="Boardroom | E-Summit '23" />
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
					<RoundsSection />
					<TimelineSection />
					<FAQSection />
					<ContactSection />
					<Footer websiteQueries="9304404477 (Piyush)" />
				</div>
			</Box>
		</>
	);
}
