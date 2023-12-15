import { Flex, Text, Box } from "@chakra-ui/react";
import Heading from "./Heading";

export default function EligibilitySection() {
	return (
		<>
			<Flex
				width={"100%"}
				direction={{ base: "column", md: "row" }}
				p="2rem"
				bgColor={"bootcamp.dark_blue"}
				justify="center"
				color="white">
				<Box p="1rem" m="1rem" width={"90%"}>
					<Heading color="light" align="center" label="Eligibility"></Heading>
					<Text fontSize="1.2rem" textAlign="center">
					College students of any age are welcome to participate as long as they share an interest in data analytics and machine learning, along with possessing a business-oriented mindset. 
					</Text>
				</Box>
			</Flex>
		</>
	);
}
