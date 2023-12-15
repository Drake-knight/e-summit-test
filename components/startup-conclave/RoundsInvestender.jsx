import { Flex } from "@chakra-ui/react";
import Heading from "../bootcamp/Heading";
import RoundCard from "../startup-conclave/RoundCard";

const rounds = [
	{
		number: 1,
		name: "The website",
		description: "Register for the InvesTinder matchmaking tool on the E summit Website",
	},
	{
		number: 2,
		name: "Offline Event",
		description:
			"Our matchmaking tool goes live, allowing startups and investors to handpick the ideal counterparts to meet during the E Summit. With a user interface similar to Tinder, you can easily swipe through profiles of fellow founders and investors, choosing who you'd like to connect with. This way, you can ensure you're meeting with the right people who can help take your business to the next level.",
	},
	{
		number: 3,
		name: "Offline Event",
		description: "On April 8, the offline meetings will be held on the campus of IIT Madras.",
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
