import Head from "next/head";
import Footer from "../../components/Footer";
import HeroSection from "../../components/product-construct/HeroSection";
import AboutSection from "../../components/product-construct/AboutSection";
import WhyParticipateSection from "../../components/product-construct/WhyParticipateSection";
import RoundsSection from "../../components/product-construct/RoundsSection";
import FAQSection from "../../components/product-construct/FAQSection";
import Navbar from "../../components/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import ContactSection from "../../components/product-construct/ContactSection";
import TimelineSection from "../../components/product-construct/TimelineSection";
import Sponsors from "../../components/product-construct/Sponsors";

export default function Bootcamp() {
	return (
		<>
			<Head>
				<title>Product Construct</title>
				<meta name="description" content="BootCamp | E-Summit '23" />
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
					<TimelineSection />
					{/* <Sponsors /> */}
					<FAQSection />
					<ContactSection />
					<Footer websiteQueries="8618127995 Prarthana" />
				</div>
			</Box>
		</>
	);
}
