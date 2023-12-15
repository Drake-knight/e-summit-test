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
				<Box p="1rem" m="1rem" w={{ base: "100%", md: "40%" }}>
					<Heading color="light" align="center" label="Who can participate?"></Heading>
					<Text fontSize="1.2rem" textAlign="center">
					Current Entrepreneurs of IIT Madras from any department and year.{" "}
					</Text>
				</Box>
				{/* <Box p="1rem" m="1rem" w={{ base: "100%", md: "40%" }}>
					<Heading color="light" align="left" label="How to participate?"></Heading>
					<ul>
						<li>
							<Text fontSize="1.2rem">
								Register for Bootcamp before 12th of February 2023.
							</Text>
						</li>
						<li>
							<Text fontSize="1.2rem">
								Complete the Round 1 Questionnaire. Its your gateway to the next
								round of BootCamp.
							</Text>
						</li>
					</ul>
				</Box> */}
			</Flex>
		</>
	);
}
