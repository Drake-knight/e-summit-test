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
						Anyone with an interest in entrepreneurship, management or business is
						eligible to participate. There is no restriction in terms of education or
						age.
					</Text>
				</Box>
			</Flex>
		</>
	);
}
