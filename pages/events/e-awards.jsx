import Head from "next/head";
import Footer from "../../components/Footer";
import AboutSection from "../../components/eAwards/AboutSection";
import WhyParticipateSection from "../../components/eAwards/WhyParticipateSection";
import ParticipationSection from "../../components/eAwards/ParticipationSection";
import RoundsSection from "../../components/eAwards/RoundsSection";
import FAQSection from "../../components/eAwards/FAQSection";
import TimelineSection from "../../components/eAwards/TimelineSection";
import HeroSection from "../../components/eAwards/HeroSection";
import ContactSection from "../../components/eAwards/ContactSection";
//import  Navbar from "../../components/eAwards/Navbar";
import Navbar from "../../components/Navbar";
import { Box, Flex} from "@chakra-ui/react";

export default function eAwards() {
	return (
		<>
			<Head>
				<title>eAwards</title>
				<meta name="description" content="E-Awards | E-Summit '23" />
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
					<RoundsSection />
                    <ParticipationSection />
					<TimelineSection />
                    <FAQSection />
					<ContactSection />
					<Footer websiteQueries="95606 67329 (Aditya)" />
				</div>
			</Box>
		</>
	);
}
