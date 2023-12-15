import Question from "../bootcamp/Question";
import Heading from "../bootcamp/Heading";
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
					question="Are there any registration fees?"
					answer="There are no registration fees at any stage of Product Construct."
				/>
				<Question
					question="Are cross college teams allowed?"
					answer="Yes. There are no restrictions on building a team as long as all its members are either undergraduates, post graduates or Ph.D. fellows."
				/>
				<Question
					question="How many teams will be shortlisted after the application process?"
					answer="There is no limit to the number of shortlisted teams. It all depends on the quality."
				/>
				<Question
					question="When will the prize money be given to the ?"
					answer="Prize money will be given lumpsum to the winners in the few days after declaration of results."
				/>
			</Flex>
		</>
	);
}
