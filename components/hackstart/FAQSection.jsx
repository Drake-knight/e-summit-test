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
					question="Is team registration necessary ?"
					answer="No, you can register alone or in a team consisting of 2 or 3 members."
				/>
				<Question
					question="Is this event online?"
					answer="No, it will be held at IIT Madras campus (offline), during E-Summit 2023.
                    "
				/>

				<Question
					question="When do we get the timing details for the offline round?"
					answer="All the details regarding timings will be conveyed through email & WhatsApp."
				/>
					<Question
					question="Are there any pre-requisites for participation?"
					answer="No, but if you are passionate about machine learning, you will undoubtedly have an advantage."
				/>
					<Question
					question="How can we register for this?"
					answer="During the registration period, you can sign up by filling out the registration form given above. Additionally, during the E-Summit, we will also be accepting registrations on the spot.

					"
				/>
				<Question
					question="Which platform are participants supposed to use for coding?
					"
					answer="Datalore by JetBrains"
				/>
			</Flex>
		</>
	);
}
