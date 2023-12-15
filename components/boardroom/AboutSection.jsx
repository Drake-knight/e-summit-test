import { Flex, Box, Text } from "@chakra-ui/react";

import Heading from "./Heading";

export default function AboutSection() {
	return (
		<>
			<Flex
				id="about"
				direction={{ base: "column", md: "row" }}
				align={{ base: "center", md: "flex-start" }}
				textAlign={{ base: "center", md: "left" }}
				justify="center"
				bgColor="bootcamp.dark_blue"
				padding={{ base: "2rem", md: "4rem" }}>
				<Box padding="2rem" width={{ base: "100%", md: "90%" }}>
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="What is the Boardroom?"></Heading>
					<Text color="white" fontSize="1.2rem" mb="3rem" align={"center"}>
						Boardroom is an event focused on giving the participants an experience of a
						board meeting. The participants take roles of different board members and
						get an opportunity to solve a unique case study and make big decisions
						spontaneously.
					</Text>
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="Our Vision"></Heading>
					<Text color="white" fontSize="1.2rem" mb="3rem" align={"center"}>
						The vision of Boardroom is to provide the participants with the opportunity
						to demonstrate bold vision, creativity, technical insight, and business
						leadership while solving a business base focused on tomorrow’s issues in a
						formal setting with designated roles.
					</Text>
				</Box>
			</Flex>
		</>
	);
}
