import Question from "../bootcamp/Question";
import Heading from "./Heading";
import { Flex } from "@chakra-ui/react";

export default function FAQSection() {
	return (
		<>
			<Flex
				id="faq"
				justify="center"
				direction="column"
				p={{ base: "1rem", md: "5rem", xl: "10rem" }}
				bgColor="bootcamp.dark_blue"
				width="100%">
				<Heading align="center" color="light" label="FAQ"></Heading>

				<Question
					question="Is team registration necessary ?"
					answer="Yes, participation is only allowed in teams of 2."
				/>
				<Question
					question="Is this event online?"
					answer="Only Round 0 will be conducted online. Rounds 1 to 4 will be conducted at IIT Madras campus (offline), during E-Summit 2023
                    "
				/>
				<Question
					question="Where do I make my submission for Round 0?"
					answer="Participating teams will have to make their submissions on the Unstop portal or E-Summit website’s event dashboard (in pdf format only)."
				/>
				<Question
					question="When do we get the timing details for the offline rounds?"
					answer="All the details regarding timings will be conveyed through email & WhatsApp."
				/>
			</Flex>
		</>
	);
}
