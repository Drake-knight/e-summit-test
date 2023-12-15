import { Flex, Box, Text } from "@chakra-ui/react";
import Heading from "./Heading";

//content is an array of objects with title and text properties
export default function AboutSection() {
	return (
		<>
			<Flex
				id="about"
				direction={{ base: "column", md: "row" }}
				align={{"base": "center", "md":"flex-start"}}
				textAlign={{"base": "center", "md": "left"}}
				justify="center"
				bgColor="bootcamp.dark_blue"
				padding={{ base: "2rem", md: "4rem" }}>
				<Box padding="2rem">
				<Heading 
					align={{"base":"center", "md":"left"}} 
					color="light" 
					label="About"
				/>
				<Text color="white" fontSize="1.2rem" mb="2rem">
					The Sustainability Case Study Competition is a unique opportunity for university students to apply their knowledge and skills to real-world sustainability challenges.The competition is open to teams of 1-4 students from any discipline, and offers a prize pool of Rs.75,000 .The competition brief asks teams to investigate and develop avenues to contribute towards setting up a robust infrastructure for carbon trading in India. This is an amazing opportunity for students to get hands-on experience working on sustainability issues, and to compete for a substantial prize pool. We encourage all eligible students to enter!
				</Text>
				<Heading 
					align={{"base":"center", "md":"left"}} 
					color="light" 
					label="Our Vision"
				/>
				<Text color="white" fontSize="1.2rem">
					We believe that the Sustainability Case Study Competition is making a positive impact on the way that young people think about sustainability issues. By providing an opportunity for students to apply their skills and knowledge to real-world problems, we are helping to create a new generation of leaders who are committed to finding sustainable solutions.
				</Text>
				</Box>
			</Flex>
		</>
	);
}
