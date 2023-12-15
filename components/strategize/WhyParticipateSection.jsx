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
						text="Total prize pool of 75k"></WhyParticipateReason>
					<WhyParticipateReason
						icon="bill"
						title="Special Access to E-Summit"
						text="Get special access to all E-Summit events, workshops, and much more!"></WhyParticipateReason>
					<WhyParticipateReason
						icon="certificate"
						title="Certificates"
						text="Official Certificates from E-Cell IIT Madras for all participants and winners"
					/>
					<WhyParticipateReason
						icon="university"
						title="Free mentorship"
						text="Free training and mentorship by experts in policy formulation."
					/>
					<WhyParticipateReason
						icon="tie"
						title="Submitted to Government"
						text="Top Policies will be presented to government."
					/>
				</Flex>
			</Flex>
		</>
	);
}
