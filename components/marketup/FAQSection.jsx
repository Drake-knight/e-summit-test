import Question from "./Question";
import Heading from "./Heading";
import { Box, Flex } from "@chakra-ui/react";

export default function FAQSection() {
	return (
		<>
			<Flex
				id="faq"
				justify="center"
				direction="column"
				p="2rem"
				bgColor="bootcamp.dark_blue"
				width="100%">
				<Heading align="center" color="light" label="FAQ"></Heading>
				<Question
					question="Is team registration necessary?"
					answer="Yes, participation is only allowed in teams of 3."
				/>
				<Question
					question="Is this event online?"
					answer="Rounds 1 and 2 will be conducted online. Round 3 will be conducted at IIT Madras campus (offline), during E-Summit 2023."
				/>
				<Question
					question="Where do I make my submission for Round 2?"
					answer="Participating teams will have to make their submissions on the Unstop portal or E-Summit portal (in pdf format only)."
				/>
				<Question
					question="Where will the workshop be conducted?"
					answer="Online mode"
				/>
				<Question
					question="When and where do I make my submission for Round 3?"
					answer="7th - 9th April,  at IIT Madras campus."
				/>
				<Question
					question="When do we get the timing details for the offline rounds?"
					answer="All the details regarding timings will be conveyed through email & WhatsApp."
				/>
			</Flex>
		</>
	);
}
