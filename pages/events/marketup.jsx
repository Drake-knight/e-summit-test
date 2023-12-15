import Head from "next/head";
import Footer from "../../components/Footer";
import AboutSection from "../../components/marketup/AboutSection";
import HeroSection from "../../components/marketup/HeroSection";
import FAQSection from "../../components/marketup/FAQSection";
import ContactSection from "../../components/marketup/ContactSection";
import RoundsSection from "../../components/marketup/RoundsSection";
import EligibilitySection from "../../components/marketup/EligibilitySection";
import WhyParticipateSection from "../../components/marketup/WhyParticipateSection";
import Navbar from "../../components/Navbar";
import { Box } from "@chakra-ui/react";
import TimelineSection from "../../components/marketup/TimelineSection";


export default function marketup() {
	return (
		<>
			<Head>
				<title>MarketUp</title>
				<meta name="description" content="marketup | E-Summit '23" />
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
					<RoundsSection />
					<FAQSection />
					<ContactSection />
                    <Footer websiteQueries="91429 40445 (Ravish)" />

				</div>
			</Box>
		</>
	);
}
