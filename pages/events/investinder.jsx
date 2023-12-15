import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Box } from "@chakra-ui/react";
import HeroSection from "../../components/startup-conclave/HeroSection";
import AboutSection from "../../components/startup-conclave/AboutSection";
import FAQSection from "../../components/startup-conclave/FAQSection";
import TimelineSectionInvestinder from "../../components/startup-conclave/TimelineSectionInvestinder";
import ContactSection from "../../components/startup-conclave/ContactUs";
import RoundsInvestinder from "../../components/startup-conclave/RoundsInvestender";
import investinder from "../../public/assets/conclaves/inverted_investinder.png";

export default function Investinder() {
	return (
		<>
			<Head>
				<title>Investinder</title>
				<meta name="description" content="Investinder | E-Summit '23" />
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
					<HeroSection
						eventName="INVESTINDER"
						oneLine="It's not just a meeting, it's a match"
						description="One on one closed door meetings between investors and startups"
						deadline="1st April"
						src={investinder}
					/>
					<AboutSection
						vision="The event is a startup and investor speed dating event, where both
						parties (startups and angel investors) get to choose which participants
						they would like to meet in a one-on-one meeting format during the E-Summit."
						aboutUs="Our matchmaking tool is like the cupid of the startup world - helping you find your perfect investor match. So swipe right, and let the sparks fly!"
						mission="Angel investors will have the chance to learn about potential investment
						opportunities. In contrast, startups can meet carefully chosen investors
						and pitch their ideas in a one-on-one setting."
					/>
					{/* <WhyParticipateSection /> */}
					{/* <ParticipationSection /> */}
					<RoundsInvestinder />
					<TimelineSectionInvestinder />
					{/* <FAQSection /> */}
					<ContactSection />
					<Footer websiteQueries="8618127995 Prarthana" />
				</div>
			</Box>
		</>
	);
}
