import Question from "../bootcamp/Question";
import Heading from "../bootcamp/Heading";
import { Flex } from "@chakra-ui/react";

export default function FAQSection() {
	return (
		<>
			<Flex
				id="faq"
				justify="center"
				// align="center"
				direction="column"
				p={{ base: "1rem", md: "5rem", xl: "10rem" }}
				bgColor="bootcamp.dark_blue"
				width="100%">
				<Heading align="center" color="light" label="FAQ"></Heading>

				<Question
					question="Is team registration necessary ?"
					answer="Yes, you must register in teams of 3 only."
				/>
				<Question
					question="Are the rounds online or offline ?"
					answer="Round 1 and Round 2 will be online &
                    Round 3 will be offline for the qualified teams.
                    "
				/>

				<Question
					question="Is the CEO allowed to help in solving the case study ?"
					answer="Yes"
				/>
				<Question
					question="Can the directors answer the questions asked by the media person ?"
					answer="No, only the CEO is allowed to answer the questions."
				/>

				<Question
					question="Are there any pre-requisites for participation?"
					answer="No pre-requisites at all! Just put on the best of your thinking caps!"
				/>
			</Flex>
		</>
	);
}
