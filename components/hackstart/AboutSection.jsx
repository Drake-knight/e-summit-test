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
						label="What is HackStart?"></Heading>
					<Text color="white" fontSize="1.2rem" mb="3rem" align={"center"}>
					Are you passionate about data analytics, and machine learning as well as want to apply your business knowledge? At E-Summit 2023 we are excited to present “HackStart” a Business cum Tech Hackathon that will put your business acumen to the test while providing you with an opportunity to use your skills in order to analyse Startups data.
					</Text>
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="Our Vision"></Heading>
					<Text color="white" fontSize="1.2rem" mb="3rem" align={"center"}>
					The objective of the event is to provide participants with a real-world scenario that requires them to apply their data analysis and machine learning skills while promoting the business buzz inside them. The scenario will involve a dataset that requires participants to analyze and make predictions based on the data. 
Come and be a part of an amazing journey that will amplify your Analytical and Machine Learning skills, cultivate your entrepreneurial mindset, and aid you in recognizing avenues for boosting growth. Register now to seize the opportunity!
					</Text>
				</Box>
			</Flex>
		</>
	);
}
