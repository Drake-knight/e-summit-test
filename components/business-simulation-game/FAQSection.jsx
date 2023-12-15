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
				p={{ base: "1rem", md: "3rem", xl: "5rem" }}
				bgColor="bootcamp.dark_blue"
				width="100%">
				<Heading align="center" color="light" label="FAQ"></Heading>

				<Question
					question="Is it a team or individual event?"
					answer="It is an individual competition."
				/>
				<Question
					question="How will the game be conducted?"
					answer="It will be an online game and will be conducted over 3 days.
                    "
				/>
					<Question
					question="What will the rules of the game be?"
					answer="An online orientation session will be conducted where all the relevant information regarding the game will be shared.
					"
				/>
				<Question
					question="Are there any pre-requisites for participation?"
					answer="No, participants don’t need any pre-requisite to be able to take part."
				/>
			</Flex>
		</>
	);
}
