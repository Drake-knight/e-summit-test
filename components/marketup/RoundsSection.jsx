import { Flex } from "@chakra-ui/react";
import Heading from "./Heading";
import RoundCard from "../ethletics/RoundCard";

const rounds = [
	{
		number: 1,
		name: "Marketing Brainiac",
		description: "Marketing Brainiac is an online time bound marketing quiz competition. You will have to travel through a series of thought-provoking questions that will cover all aspects of marketing, from branding to digital marketing to advertising.",
		status:"Completed"
	},
	{
		number: 2,
		name: "Strategy Smackdown",
		description:
			"Welcome to our exciting event, the 'Strategy Smackdown'! This is an opportunity for marketers to showcase their skills in market research and ideation. Participants will be required to submit an executive summary of their proposed marketing strategy. The submissions will be evaluated based on its creativity, feasibility, and effectiveness.                                                                       Workshop: Shortlisted Finalists from Round 2 will be given an opportunity to attend a workshop on marketing to widen their knowledge on marketing.",
			status:"yet to be conducted"
	},
	{
		number: 3,
		name: "Marketing Showdown",
		description:
			"Finalists are required to submit a detailed and comprehensive presentation explaining the execution, timeline etc of marketing strategies that they suggested for the hypothetical product or service in Round 2. They must conduct thorough research and analysis, including competitor, customer, and industry analysis, to create a winning marketing plan. The submission stage requires a 10-12 slide presentation along with a video pitch of their product. The participants will also have to present the same in front of the judges during E-Summit'23 at IIT Madras.",
			status:"yet to be conducted"
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
