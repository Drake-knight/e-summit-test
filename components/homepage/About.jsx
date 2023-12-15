import { Box, Grid, GridItem, Stack, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import aboutPlaceholder from "../../public/assets/illustrations/about_placeholder.png";

function About() {
	const [isLargerThanMobile] = useMediaQuery("(min-width: 450px)");
	const [isLargeLaptop] = useMediaQuery("(min-width: 1330px)");

	return (
		<Box
			width="full"
			display={"flex"}
			id="about"
			paddingTop={{ base: "0rem", lg: "8rem", xl: "4rem" }}
			paddingBottom={{ base: "4rem", xl: "4rem" }}
			zIndex="10"
			fontFamily="Sen"
			minHeight="90vh"
			paddingX={isLargerThanMobile ? "8rem" : "1rem"}>
			<Grid
				templateColumns={isLargerThanMobile ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
				width="100%"
				gap={{ lg: "5%", xl: "10%" }}>
				<GridItem
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					colSpan={{ lg: "2", xl: "1", "2xl": "1" }}>
					<Box
						width={{ base: "80%", xl: "100%" }}
						display="flex"
						justifyContent="center"
						alignItems="center">
						<Image alt="about image" src={aboutPlaceholder} />
					</Box>
				</GridItem>
				<GridItem
					colSpan={{ lg: "2", xl: "1", "2xl": "1" }}
					display="flex"
					flexDirection="column"
					justifyContent="center">
					<VStack alignItems={{ base: "center", xl: "flex-start" }} width="100%">
						<Text
							fontSize={isLargerThanMobile ? "5rem" : "3.5rem"}
							bgGradient="linear(to-br, brand.light_blue, brand.red)"
							marginTop={{ base: "3rem", xl: "0rem" }}
							bgClip="text">
							ABOUT
						</Text>
						<Text
							fontSize={{ base: "1rem", xl: "1.2rem" }}
							textAlign={{ base: "justify", xl: "left" }}
							lineHeight={{ base: "120%", xl: "150%" }}
							color="white">
							With the startup culture in India booming, innovation is getting
							deep-rooted into <strong>our culture</strong>. Anyone who takes the
							unconventional path, thinks creatively, and creates{" "}
							<strong>groundbreaking</strong> innovations to solve problems, is a{" "}
							<strong>Changemaker</strong>. With such changemakers present at every{" "}
							<strong>corner</strong> of our country; <strong>Trailblazing</strong>{" "}
							impact can be created when they are <strong>brought together</strong>.
						</Text>
						<br />
						<Text
							fontSize={{ base: "1rem", xl: "1.2rem" }}
							textAlign={{ base: "justify", xl: "left" }}
							lineHeight={{ base: "120%", xl: "150%" }}
							color="white">
							E-Summit 2023 with the theme of{" "}
							<Text
								as="strong"
								fontSize="1.3rem"
								bgClip="text"
								bgGradient="linear(to-br, brand.light_blue, brand.green_blue)">
								&quot;Assemblage of Changemakers&quot;
							</Text>
							, is our annual flagship entrepreneurship fest filled with{" "}
							<strong>4 conclaves</strong> - Youth Conclave, Innovator’s Conclave,
							Startup Conclave, and Sustainability Conclave. These conclaves along
							with our{" "}
							<strong>Highlight Speakers and Networking opportunities</strong> are
							curated to serve the audience in all stages of their entrepreneurial
							journey.
						</Text>
					</VStack>
				</GridItem>
			</Grid>
		</Box>
	);
}

export default About;
