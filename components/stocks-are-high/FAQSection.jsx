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
					question="How to participate?"
					answer="Download the app. &nbsp;&#10132;&nbsp; Sign up with your phone number. &nbsp;&#10132;&nbsp; Register in the tournament.We will share the tournament password and the tournament link as well through email to all registered participants."
					
				/>
				<Question
					question="Where will the competition be held?"
					answer="The competition will be held on StockPe."
				/>
				<Question
					question="Is this competition simulated or works on the real-world stock market?"
					answer="The competition completely goes parallel to the real stock market."
				/>
				<Question
					question="How long will the event last?"
					answer="This is a 2 week-long trading event."
				/>
				<Question
					question="How will the winner be decided?"
					answer="The trader with the highest return at the end of 2nd week will win the prize."
				/>
				<Question
					question="When will the result be declared?"
					answer="9th April 2023"
				/>

			</Flex>
		</>
	);
}
