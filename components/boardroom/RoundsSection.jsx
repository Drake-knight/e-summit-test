import { Flex } from "@chakra-ui/react";
import Heading from "./Heading";
import RoundCard from "../ethletics/RoundCard";

const rounds = [
	{
		number: 1,
		name: "Online Quiz",
		description:
			"An entrepreneurship based timed online quiz that’ll test participants’ intelligence, decision making, problem-solving approach and potential to become a board member. Questions will be centered around  entrepreneurial trivia, critical thinking and crisis management.",
			status:"Completed"
	},
	{
		number: 2,
		name: "Executive Summary",
		description:
			"Participants will have to submit an executive summary on challenges that a board often encounters.Challenges will be provided to the qualified teams that’ll test teams’ in depth knowledge on the subject.",
			status:"Yet to be conducted"
	},
	{
		number: 3,
		name: "The Boardroom",
		description:
			"Each team will be given a case study which they will have to solve in the given amount of time. Each team will have one CEO and 2 directors. The CEO will be responsible to drive the discussion during the meeting while the directors try and solve the case.",
			status:"Yet to be conducted"
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
					{rounds.map(({ name, number, description, status }) => (
						<RoundCard
							number={number}
							description={description}
							name={name}
							status={status}
							key={number}
						/>
					))}
				</Flex>
			</Flex>
		</>
	);
}
