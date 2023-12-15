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
						text="Total prize pool of INR 30k"></WhyParticipateReason>
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
						icon="chess"
						title="Innovation"
						text="Participants require thinking outside of the box and coming up with unique and innovative ideas"
					/>
					<WhyParticipateReason
						icon="people"
						title="Workshop"
						text=" Participants get to know the best practices in the corresponding sector"
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
