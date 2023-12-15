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
					question="Is it an individual or team event?"
					answer="Individual"
				/>
				<Question
					question="Is the event online?"
					answer="Round 1 will be conducted online.
					Round 2 will be conducted offline at IIT
					Madras during 7-9 April"
				/>
				<Question
					question="Where do I make my submissions?"
					answer="Participants will have to make the
					submissions in the E-Summit website portal
					itself."
				/>
				<Question
					question="Is it open for students outside IITM?"
					answer="No"
				/>
			</Flex>
		</>
	);
}
