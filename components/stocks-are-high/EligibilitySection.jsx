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
					Anyone who is interested in testing their skills in trading can participate.
					<b> Individual Participation.</b>
					</Text>
				</Box>
			</Flex>
		</>
	);
}
