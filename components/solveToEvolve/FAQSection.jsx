import Question from "./Question";
import Heading from "./Heading";
import { Flex } from "@chakra-ui/react";

export default function FAQSection() {
	return (
		<>
			<Flex
				id="faq"
				justify="center"
				direction="column"
				p="2rem"
				bgColor="bootcamp.dark_blue"
				width="100%"
			>
				<Heading align="center" color="light" label="FAQ"></Heading>
				<Question
					question="Are the rounds offline or online?"
					answer="Round 1 and round 2 will be online and finale will be offline during E-Summit for the qualified teams."
				/>
				<Question
					question="Are there any prerequisites for participation?"
					answer="No pre-requisites at all! Just put on the best of your thinking caps!"
				/>
				<Question
					question="Can participants from a team belong  to different educational institutions?"
					answer="Yes, cross institute teams may participate in Solve to Evolve."
				/>
				<Question
					question="When do we get the timing details for the offline rounds?"
					answer="All the details regarding timing and venue will be conveyed through email and WhatsApp."
				/>
			</Flex>
		</>
	);
}
