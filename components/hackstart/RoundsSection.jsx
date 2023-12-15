import { Flex } from "@chakra-ui/react";
import Heading from "./Heading";
import RoundCard from "./RoundCard";

const rounds = [
	{
		number: 1,
		name: "The Workshop",
		description:
			"The workshop will be an interactive session aimed at familiarizing participants with Datalore Platform. Participants will be guided through the various features and tools available on the platform, and they will be given hands-on experience using it to complete tasks and assignments so that they have a better understanding of how the platform works and how they can leverage its features to maximize their performance in the competition. Mr. Sumanth from JetBrains, who is an ML engineer, developer advocate, and YouTuber, will be leading the workshop. Participants can ask questions, share experiences and receive feedback.",
			status: "yet to be conducted"
	},
	{
		number: 2,
		name: "The Hackathon",
		description:"The competition will be a day-long hackathon in offline mode at IIT Madras during E-Summit'23  which will test your data analytics and business mind. The participants will be provided with a data set containing various sorts of information. Participants will be expected to analyze the data and present it in form of various displays such as graphs or charts. Additionally, the participants will be required to build suitable Machine Learning Algorithms which can perform predictions on the given dataset. Now comes the best part! Awaken your business nerves, find out the possible threats or risks on the basis of past trends and your predictions, and formulate business strategies to mitigate these risks."
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
