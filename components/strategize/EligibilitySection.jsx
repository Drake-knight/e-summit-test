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
				<Box p="1rem" m="1rem" w={{ base: "100%", md: "40%" }}>
					<Heading color="light" align="center" label="Eligibility"></Heading>
					<Text fontSize="1.2rem" textAlign="center">
					The competition is open to all policy enthusiasts from students to working professionals. Teams with a minimum of 2 and a maximum of 4 members can be formed.
					</Text>
				</Box>
			</Flex>
		</>
	);
}
