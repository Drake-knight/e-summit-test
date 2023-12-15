import { Flex } from "@chakra-ui/react";
import Heading from "../bootcamp/Heading";
import RoundCard from "../startup-conclave/RoundCard";

const rounds = [
	{
		number: 1,
		name: "Registration",
		description:
			"A registration form will be sent for both the experienced professionals and startups where they will have to choose one of 4 fields- Business management, Finance and accounting, Marketing and sales and Technical.",
	},
	{
		number: 2,
		name: "Offline Event",
		description:
			"The 4 cohorts would have a separate panel discussion and networking session so as to facilitate a connection between the experienced professionals and the startups. Location: IIT Madras",
	},
	{
		number: 3,
		name: "High tea",
		description:
			"There would be a high tea at the end of the sessions where all the 4 cohorts could have a chance to network with each other. Location: IIT Madras",
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
				<Heading align="center" color="light" label="Stages" />
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
