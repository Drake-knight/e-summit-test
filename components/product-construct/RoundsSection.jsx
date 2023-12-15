import { Flex } from "@chakra-ui/react";
import Heading from "../bootcamp/Heading";
import RoundCard from "../bootcamp/RoundCard";

const rounds = [
	{
		number: 1,
		name: "Preliminary Round",
		description:
			"The question of the preliminary round will revolve around consumer needs, competitive landscape, and brainstorming on features of the product on the given problem statement.",
	},
	{
		number: 2,
		name: "Final Round",
		description:
			"This round will be focused on detailed wireframing and developing the product roadmap continuing with the solutions in Round 1",
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
