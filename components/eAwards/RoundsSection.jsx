import { Flex } from "@chakra-ui/react";
import Heading from "./Heading";
import RoundCard from "./RoundCard";

const rounds = [
	{
		number: 1,
		name: "Questionnaire",
		description:
			"A brief questionnaire will be uploaded on the website to test the diverse entrepreneurial skills of the applicant. The applicant will be required to attempt the questionnaire within specified word limits and submit it on the website in pdf format. Best responses will be shortlisted for Round 2.",
	},
	{
		number: 2,
		name: "Presentation and Pitching",
		description:
			"The shortlisted participants will be required to craft a detailed presentation about their Startups covering all guiding pointers which will be shared with the commencement of Round 2. Presentations will be judged and the finalists will have to pitch during E-Summit to a distinguished panel of successful entrepreneurs and prominent leaders from academia and business linked with the IITM startup ecosystem.",
	},
];

export default function RoundsSection() {
	return (
		<>
			<Flex
				direction="column"
				justify="center"
				width="100%"
				bgColor="bootcamp.dark_blue"
				p="2rem">
				<Heading align="center" color="light" label="Rounds" />
				<Flex wrap="wrap" justify="center" gap="1.8rem" mt="1rem">
					{rounds.map(({ name, number, description }) => (
						<RoundCard
							number={number}
							description={description}
							name={name}
							key={number}
						/>
					))}
				</Flex>
			</Flex>
		</>
	);
}
