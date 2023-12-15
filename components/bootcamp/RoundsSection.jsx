import { Flex } from "@chakra-ui/react";
import Heading from "./Heading";
import RoundCard from "./RoundCard";

const rounds = [
	{
		number: 0,
		name: "Gearing Up",
		description: "A set of questions to understand the participants and their startup.",
	},
	{
		number: 1,
		name: "Uploading pitch deck",
		description:
			"Shortlisted participants from round 0 will be required to upload their pitch deck.",
	},
	{
		number: 2,
		name: "Accelerated rush",
		description:
			"Shortlisted participants from round 1 will be pitching their startups in front of industry experts. 8-10 startups will be selected from this round across the 5 tracks. The selected startups will go through the accelerator program for 6 weeks.",
	},
	{
		number: 3,
		name: "E-Summit Showdown",
		description:
			"The startups from the cohort will pitch to the pool of investors and VCs at IIT Madras campus during E-Summit '23.",
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
