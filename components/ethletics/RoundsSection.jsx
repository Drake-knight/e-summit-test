import { Flex } from "@chakra-ui/react";
import Heading from "./Heading";
import RoundCard from "../ethletics/RoundCard";

const rounds = [
	{
		number: 0,
		name: "Revamp Regatta",
		description:
			"Transform and refine a basic product into a multi-functional item that makes the lives of your customers simpler and more convenient. Create a two-slide presentation outlining the concept of the product and the issues it addresses.",
			status:"Completed"
	},
	{
		number: 1,
		name: " Strategy Sprint",
		description:
			"Develop a business model for your idea. Identify your target audience, describe your Unique Selling Point and strategize against your competitors. Structure your analysis in the simplest and most comprehensive way possible, and put it forward for the world to see.",
			status:"yet to be conducted"
	},
	{
		number: 2,
		name: "Eco-Endurance Race",
		description:
			"Showcase your commitment towards Mother Earth and demonstrate how you are taking tangible steps towards achieving the UN SDG. Come up with a relevant and feasible action plan, taking advantage of the new government environmental policies.",
			status:"yet to be conducted"
	},
	{
		number: 3,
		name: "Jeopardy",
		description:
			"Welcome to this thrilling round where your company will face an unexpected major crisis like cyber-attack, a product recall, or a sudden loss of a key leader. Teams will have to think on their feet and come up with an action plan to recover from the crisis with the least damage possible.",
			status:"yet to be conducted"
	},
	{
		number: 4,
		name: "Bill the Banner",
		description:
			"You must craft a thorough marketing strategy for your product. that can successfully reach your target market and spread word about the product. Take up the challenge and present the most comprehensive and effective marketing plan that aligns with your product and target audience.",
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
				<Flex wrap="wrap" justify="center" gap="3rem" mt="1rem">
					{rounds.map(({ name, number, description, status }) => (
						<RoundCard
							number={number}
							description={description}
							name={name}
							key={number}
							status={status}
						/>
					))}
				</Flex>
			</Flex>
		</>
	);
}
