import { Flex, Text, Box } from "@chakra-ui/react";
import Heading from "./Heading";

export default function ParticipationSection() {
	return (
		<>
			<Flex
				width={"100%"}
				direction={{ base: "column", md: "row" }}
				p="2rem"
				bgColor={"bootcamp.dark_blue"}
				justify="center"
				color="white">
				<Box p="1rem" m="1rem">
					<Heading color="light" align="center" label="Who can participate?"></Heading>
					<Text fontSize="1.2rem" textAlign="center">
					The event is open to all UG, PG, MBA and PhD students of any stream and college. Each team must have a minimum of 2 to a maximum of 5 members. Cross college teams are allowed.
					</Text>
				</Box>
			</Flex>
		</>
	);
}
