import Head from "next/head";
import HeroSection from "../../components/unconference/HeroSection";
import AboutSection from "../../components/unconference/AboutSection";
import ParticipationSection from "../../components/unconference/ParticipationSection";
import ContactSection from "../../components/unconference/ContactSection";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TimelineSection from "../../components/unconference/TimelineSection";

export default function Bootcamp() {
	return (
		<>
			<Head>
				<title>Unconference</title>
				<meta name="description" content="Unconference | E-Summit '23" />
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
					<TimelineSection />
					<AboutSection />
					<ParticipationSection />
					<ContactSection />
					<Footer />
				</div>
			</Box>
		</>
	);
}
