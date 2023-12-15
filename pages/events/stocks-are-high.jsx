import Head from "next/head";
import Footer from "../../components/Footer";
import AboutSection from "../../components/stocks-are-high/AboutSection";
import HeroSection from "../../components/stocks-are-high/HeroSection";
import FAQSection from "../../components/stocks-are-high/FAQSection";
import ContactSection from "../../components/stocks-are-high/ContactSection";
import EligibilitySection from "../../components/stocks-are-high/EligibilitySection";
import Navbar from "../../components/Navbar";
import { Box } from "@chakra-ui/react";
import TimelineSection from "../../components/stocks-are-high/TimelineSection";

export default function StocksAreHigh() {
	return (
		<>
			<Head>
				<title>Stocks Are High</title>
				<meta name="description" content="Stocks Are High | E-Summit '23" />
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
					<TimelineSection />
					<EligibilitySection />
					<FAQSection />
					<ContactSection />
                    <Footer websiteQueries="91429 40445 (Ravish)" />
				</div>
			</Box>
		</>
	);
}
