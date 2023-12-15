import { Flex } from "@chakra-ui/react";
import Heading from "./Heading";
import RoundCard from "./RoundCard";

const rounds = [
	{
		number: 1,
		name: "Policy Proposal",
		description: "In this round, participants need to create a single page policy doc on the SDG 7 Affordable and Clean Energy, one of the four Sustainable Development Goals (SDGs) focused under E-Summit ‘23 Social Campaign “Heal-Thy”. This doc should cover the policy plan, vision and mission of the team, a feasibility check and other matters of relevance identified by the team.",
	},
	{
		number: -1,
		name: "Policy Development Workshop",
		description:
			"The shortlisted teams from round 1 will receive professional training in policy development by a panel of experts from India Energy Storage Alliance.",
	},
	{
		number: 2,
		name: "Policy Submission",
		description: "After being trained in policy development, the teams will receive a specific issue under UNSDG 7 for which they have to develop a formal policy proposal. This round will test the teams' abilities to think exhaustively to address a real world problem."
	},
	{
		number: 3,
		name: "Finale",
		description:
			"The shortlisted teams from round 2 will be invited to IIT Madras where they will present their proposals to a diverse jury of experts in different fields. The best policies will be submitted to a government body. The top two teams will win from the prize pool of Rs. 75,000.",
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
