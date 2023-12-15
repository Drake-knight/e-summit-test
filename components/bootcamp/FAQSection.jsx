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
					question="Are there any fees to be paid during registration?"
					answer="No fees required! The registration process is completely free of cost."
				/>
				<Question
					question="How many members can form a team?"
					answer="Teams can be comprised of 1 to 5 members, giving you the flexibility to participate with a group of your choice."
				/>
				<Question
					question="Is submitting a pitch deck mandatory in round 0?"
					answer="No, it's not mandatory. Round 0 gives you the option to submit a pitch deck if you choose to, but it's not a requirement."
				/>
				<Question
					question="Is the entire program virtual?"
					answer="Absolutely! For the next 6 weeks, you can expect a fully immersive and interactive virtual experience."
				/>
				<Question
					question="Will I get the opportunity to visit the IIT Madras campus?"
					answer="Yes, During the E-Summit, 2 members from each team will be called to the campus for a unique and exciting experience."
				/>
				<Question
					question="What's in store for me during the 6 weeks?"
					answer="Each week, you'll have the opportunity to participate in mentoring sessions, knowledge-sharing and storytelling sessions by successful entrepreneurs and industry experts, and pitch review meetings."
				/>
				<Question
					question="Are there any pre-requisites for startups?"
					answer="No pre-requisites at all! Just bring your passion and clarity on your idea and you're good to go!"
				/>
				<Question
					question="How long will the mentoring sessions be?"
					answer="There will be 2 mentoring sessions per week, each lasting for one hour."
				/>
			</Flex>
		</>
	);
}
