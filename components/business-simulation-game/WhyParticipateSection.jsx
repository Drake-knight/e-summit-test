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
						text="Total prize pool of INR 20K"></WhyParticipateReason>
					<WhyParticipateReason
						icon="certificate"
						title="Official Certificate"
						text="Get Official Certificates from E-Cell IIT Madras for all participants and winners"></WhyParticipateReason>
					<WhyParticipateReason
						icon="brain"
						title="Analytical Skills"
						text='Players will have to analyze the given situation and figure out the best move.'></WhyParticipateReason>
					<WhyParticipateReason
						icon="fire"
						title="Innovation"
						text="Participants will have to think and come up with out of the box ideas to advance successfully in the game."
					/>
					<WhyParticipateReason
						icon="peoplegrp"
						title="Decision Making"
						text="Players will have to make difficult decisions which will ultimately have an impact on their firm."
					/>
					<WhyParticipateReason
						icon="checkAll"
						title="Understanding"
						text="Players will gain an understanding of how such firms work, and what is the role performed by each branch in the same."
					/>
				</Flex>
			</Flex>
		</>
	);
}
