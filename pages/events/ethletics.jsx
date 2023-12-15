import Head from "next/head";
import Footer from "../../components/Footer";
import AboutSection from "../../components/ethletics/AboutSection";
import WhyParticipateSection from "../../components/ethletics/WhyParticipateSection";
import EligibilitySection from "../../components/ethletics/EligibilitySection";
import RoundsSection from "../../components/ethletics/RoundsSection";
import FAQSection from "../../components/ethletics/FAQSection";
import TimelineSection from "../../components/ethletics/TimelineSection";
import HeroSection from "../../components/ethletics/HeroSection";
import ContactSection from "../../components/ethletics/ContactSection";
// import Round0 from "../../components/ethletics/Round0";
import Navbar from "../../components/Navbar";
import { Box} from "@chakra-ui/react";


export default function Bootcamp() {
	return (
		<>
			<Head>
				<title>E-thletics</title>
				<meta name="description" content="E-thletics | E-Summit '23" />
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
					{/* <Round0/> */}
					<TimelineSection />
					<FAQSection />
					<ContactSection />
					<Footer websiteQueries="9304404477 (Piyush)" />
				</div>
			</Box>
		</>
	);
}
