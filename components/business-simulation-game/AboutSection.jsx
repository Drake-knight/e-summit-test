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
						label="What is Business Simulation Game - StratUp?"></Heading>
					<Text color="white" fontSize="1.2rem" mb="3rem" align={"center"}>
					<strong>&quot;BSG - StratUp&quot; </strong>is an event that brings forth your business acumen, strategizing skills, and market intuition and incorporates them in the form of an online game format. The players will have to play in the game like they have to survive and maintain their company in an actual real-life market situation.
					</Text>
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="Our Vision"></Heading>
					<Text color="white" fontSize="1.2rem" mb="3rem" align={"center"}>
					The vision of StratUp is to test players’ thinking skills and how creatively they can employ and implement it in a simulated environment. They will have to analyze and understand the given situation and devise an effective solution and strategy to solve it, all in a fun and interactive way.

					</Text>
				</Box>
			</Flex>
		</>
	);
}
