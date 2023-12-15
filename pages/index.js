import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/Footer";
import About from "../components/homepage/About";
import Aftermovies from "../components/homepage/Aftermovies";
import Conclaves from "../components/homepage/Conclaves";
import Hero from "../components/homepage/Hero";
import Masterclasses from "../components/homepage/MasterclassesCard";
import PastSpeakers from "../components/homepage/PastSpeakers";
import StatsMarquee from "../components/homepage/StatsMarquee";
import Navbar from "../components/Navbar";

export default function Home({}) {
	return (
		<>
			<Head>
				<title>E-Summit 2023</title>
				<meta name="author" content="Web and Mobile Operations team, E-Cell, IITM" />
				<meta name="description" content="Assemblage Of Changemakers" />
				<link rel="icon" href="assets/favicon.png" />
			</Head>
			<Box overflowX="clip" bgColor="brand.dark_blue" minH="100vh" maxWidth="100vw">
				<Navbar />
				<div data-scroll-section>
					<Hero id="hero" />
					<About />
					<StatsMarquee id="marquee" />
					{/* <Masterclasses id="masterclasses" /> */}
					<PastSpeakers />
					<Conclaves />
					<Aftermovies />
					<Footer websiteQueries={"95606 67329 (Aditya)"} />
				</div>
			</Box>
		</>
	);
}
