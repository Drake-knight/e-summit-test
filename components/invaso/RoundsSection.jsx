import { Flex } from "@chakra-ui/react";
import Heading from "./Heading";
import RoundCard from "./RoundCard";

const rounds = [
	{
		number: 1,
		name: "The Financial Grid",
		description: "A finance based crossword puzzle which will test the financial knowledge of the participants as well as their ability to think creatively and critically.",
	},
	{
		number: 2,
		name: "Business Breakdown",
		description:
			"The ability to decode a company's business model and undeerstand how it generates revenue is a key skill for successful  investors. In this round, participants will put their analytical skills to the test by decipering the intricacies of an innovative and unique business model.",
	},
	{
		number: 3,
		name: "Invaso - The Finale",
		description:
			"In the Invaso finale, the top teams will have to bring their best game and display their investment acumen and strategic thinking in a highly competitive setting, offline, at IIT Madras. This round will test the essential skills required for investors to thrive in today's dynamic business landscape.",
	}
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
