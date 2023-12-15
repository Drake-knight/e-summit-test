import { Flex, Text, Box } from "@chakra-ui/react";
import Heading from "../bootcamp/Heading";
import WhyParticipateReason from "./WhyParticipateReason";

export default function WhyParticipateSection() {
	return (
		<>
			<Flex
				id="perks"
				direction="column"
				bgColor="bootcamp.dark_blue"
				width="full"
				justify="center"
				p="2rem">
				<Heading align="center" color="light" label="Why participate?"></Heading>
				<Flex
					direction={{ base: "column", md: "row" }}
					align="center"
					justify="center"
					wrap="wrap">
					<WhyParticipateReason
						icon="trophy"
						title="Prize Money"
						text="Total prize pool of 75K"
					/>

					<WhyParticipateReason
						icon="webinar"
						title="Webinars"
						text="Webinar on Decoding Product Management"
					/>
					<WhyParticipateReason
						icon="bulb"
						title="Opportunities"
						text="Opportunity to solve product problems"
					/>
					<WhyParticipateReason
						icon="handshake"
						title="Networking"
						text="Networking Opportunities with renowned Product Managers and Entrepreneurs"
					/>
					<WhyParticipateReason
						icon="certificate"
						title="Certification"
						text="Certificate of participation"
					/>
					<WhyParticipateReason
						icon="intern"
						title="Internship"
						text="PPI or internship opportunity with Partner"
					/>
				</Flex>
			</Flex>

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
						The event is open to all UG, PG and PhD students of any stream and college.
						Each team must have a minimum of 1 to a maximum of 4 members.
					</Text>
				</Box>
			</Flex>
		</>
	);
}
