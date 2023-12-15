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
						icon="decision"
						title="Decision Making "
						text="Participants would learn the ripple effects of far-reaching decisions that they make."></WhyParticipateReason>
					<WhyParticipateReason
						icon="influence"
						title="Influence"
						text="As a board director,participants would learn when and where to exert influence."
					/>
					<WhyParticipateReason
						icon="emotionalIntelligence"
						title="Emotional Quotient"
						text="Boardroom provides the opportunity to show emotional wit that helps one approach difficult situations."
					/>
				</Flex>
			</Flex>
		</>
	);
}
