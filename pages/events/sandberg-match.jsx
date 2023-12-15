import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Box } from "@chakra-ui/react";
import HeroSection from "../../components/startup-conclave/HeroSection";
import AboutSection from "../../components/startup-conclave/AboutSection";
import TimelineSectionSandberg from "../../components/startup-conclave/TimelineSectionSandberg";
import ContactSection from "../../components/startup-conclave/ContactUs";
import RoundsSandberg from "../../components/startup-conclave/RoundsSandberg";
import sandberg from "../../public/assets/conclaves/sandberg.png";

export default function SandbergMatch() {
	return (
		<>
			<Head>
				<title>Sandberg&apos;s Match</title>
				<meta name="description" content="Sandberg's Match | E-Summit '23" />
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
						eventName="Sandberg's Match"
						oneLine="Build the perfect founding team"
						description="Join us for an oportunity to engage with highly skilled professionals and potentially recruit them to join your startup's founding team"
						deadline="1st April"
						src={sandberg}
					/>
					<AboutSection aboutUs="At Sandberg's Match, we understand that a successful startup requires a strong founding team with expertise in key areas such as Business Management, Technical Operations, Finance and Accounting, and Marketing and Sales. Through our platform, you'll have the opportunity to network with industry experts in each of these areas through separate, closed-door cohorts. This way, you can find the perfect match and build your ideal founding team with confidence." />
					<RoundsSandberg />
					<TimelineSectionSandberg />
					<ContactSection />
					<Footer websiteQueries="8618127995 Prarthana" />
				</div>
			</Box>
		</>
	);
}
