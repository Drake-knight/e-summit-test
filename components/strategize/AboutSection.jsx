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
					E-Cell, IIT Madras presents Strategize - an immersive experience in the art of policymaking. Effective policies require a balance of intelligence, patience, and sagacity. Strategize will provide you with an exhilarating experience of analyzing policies and developing creative solutions. 
					This competition is based on the theme of tackling the UNSDG 7: Clean and Affordable Energy, focused under E-Cell’s social campaign and it will take the teams through a journey of research, creativity and innovation. 
					Under professional guidance, participants will draft a policy to address the given problem. With the best policies to be submitted to a government body.
				</Text>
				<Heading 
					align={{"base":"center", "md":"left"}} 
					color="light" 
					label="Our Vision"
				/>
				<Text color="white" fontSize="1.2rem">
					In the era of globalisation, it has become a necessity to promote and create changemakers. Who will through their creative and innovative minds will address the pressing issues of the contemporary world to attain sustainable development. 
					Strategize is our attempt to contribute to this vision. Here, participants from across the world are encouraged to wear their thinking caps and receive guidance from professionals in this domain.
				</Text>
				</Box>
			</Flex>
		</>
	);
}
