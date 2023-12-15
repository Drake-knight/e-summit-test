import { Flex } from "@chakra-ui/react";
import Heading from "./Heading";
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
						text="Total prize pool of Rs 30K"></WhyParticipateReason>
					<WhyParticipateReason
						icon="pass"
						title="Special Access E-Summit 2023"
						text="Get special access to complete E-Summit events, talks, workshops and much more!"></WhyParticipateReason>
					<WhyParticipateReason
						icon="certificate"
						title="Official Certificate"
						text="Official Certificates from E-Cell IIT Madras for all participants and winners"></WhyParticipateReason>
					<WhyParticipateReason
						icon="experience"
						title="Experience"
						text="An experiential simulation of building a product from scratch
						 
						
						"></WhyParticipateReason>
					<WhyParticipateReason
						icon="influence"
						title="Networking"
						text="Compete with like-minded people and get a chance to expand your network"
					/>
					<WhyParticipateReason
						icon="emotionalIntelligence"
						title="Patience and Perseverance"
						text=" This marathon of entrepreneurial rounds is a test of your endurance."
					/>
				</Flex>
			</Flex>
		</>
	);
}
