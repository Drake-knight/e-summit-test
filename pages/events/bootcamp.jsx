import Head from "next/head";
import Footer from "../../components/Footer";
import AboutSection from "../../components/bootcamp/AboutSection";
import TracksSection from "../../components/bootcamp/TracksSection";
import WhyParticipateSection from "../../components/bootcamp/WhyParticipateSection";
import ParticipationSection from "../../components/bootcamp/ParticipationSection";
import RoundsSection from "../../components/bootcamp/RoundsSection";
import FAQSection from "../../components/bootcamp/FAQSection";
import TimelineSection from "../../components/bootcamp/TimelineSection";
import HeroSection from "../../components/bootcamp/HeroSection";
import ContactSection from "../../components/bootcamp/ContactSection";
//import  Navbar from "../../components/bootcamp/Navbar";
import Navbar from "../../components/Navbar";
import TestimonialSection from "../../components/bootcamp/TestimonialSection";
import { Box, Flex } from "@chakra-ui/react";
import PastTeamsSection from "../../components/bootcamp/PastTeamsSection";
import SponsorSection from "../../components/bootcamp/SponsorSection";
import MentorsSection from "../../components/bootcamp/MentorsSection";
import NonMonetaryIncentivesSection from "../../components/bootcamp/NonMonetaryIncentivesSection";

export default function Bootcamp() {
	return (
		<>
			<Head>
				<title>BootCamp</title>
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
					<TracksSection />
					<WhyParticipateSection />
					<NonMonetaryIncentivesSection />
					<ParticipationSection />
					<RoundsSection />
					<TimelineSection />
					<SponsorSection />
					<MentorsSection />
					<TestimonialSection />
					<Flex>
					<PastTeamsSection />
					<FAQSection />
					</Flex>
					<ContactSection />
					<Footer websiteQueries="95606 67329 (Aditya)" />
				</div>
			</Box>
		</>
	);
}
