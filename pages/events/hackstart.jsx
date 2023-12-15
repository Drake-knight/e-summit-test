import Head from "next/head";
import Footer from "../../components/Footer";
import AboutSection from "../../components/hackstart/AboutSection";
import WhyParticipateSection from "../../components/hackstart/WhyParticipateSection";
import EligibilitySection from "../../components/hackstart/EligibilitySection";
import RoundsSection from "../../components/hackstart/RoundsSection";
import FAQSection from "../../components/hackstart/FAQSection";
import TimelineSection from "../../components/hackstart/TimelineSection";
import HeroSection from "../../components/hackstart/HeroSection";
import ContactSection from "../../components/hackstart/ContactSection";
import Navbar from "../../components/Navbar";
import { Box } from "@chakra-ui/react";
import SponsorSection from "../../components/hackstart/SponsorSection";


export default function HackStart() {
	return (
		<>
			<Head>
				<title>HackStart</title>
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
					<RoundsSection />
					<TimelineSection />
					<SponsorSection/>
					<FAQSection />
					<ContactSection />
					<Footer websiteQueries="9304404477 (Piyush)" />
				</div>
			</Box>
		</>
	);
}
