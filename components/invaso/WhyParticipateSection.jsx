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
						text="Total prize pool of 30k"></WhyParticipateReason>
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
						icon="people"
						title="Exposure"
						text="Teams would get exposed to real-world investment scenarios and challenges"
					/>
					<WhyParticipateReason
						icon="chess"
						title="Strategic Thinking"
						text=" Participants will learn to think critically and innovatively about investment opportunities"
					/>
					<WhyParticipateReason
						icon="handshake"
						title="Teamwork"
						text="Participants will build upon each other’s strengths and develop crucial teamwork skills"
					/>
				</Flex>
			</Flex>
		</>
	);
}
