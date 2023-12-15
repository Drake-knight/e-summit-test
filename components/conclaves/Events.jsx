import { Flex } from "@chakra-ui/react";
import Heading from "../bootcamp/Heading";
import EventCard from "../conclaves/EventCard";
import eventsData from "../conclaves/eventsData.json";

export default function RoundsSection(conclaveNames) {
	const { conclaveName } = conclaveNames;
	let renderComponent;
	if (conclaveName == "STARTUP CONCLAVE") {
		renderComponent = eventsData.startup.map(
			({ name, number, oneLine, description, src, eventLink }) => (
				<EventCard
					number={number}
					oneLine={oneLine}
					description={description}
					name={name}
					key={number}
					src={src}
					eventLink={eventLink}
				/>
			)
		);
	} else if (conclaveName == "YOUTH CONCLAVE") {
		renderComponent = eventsData.youth.map(
			({ name, number, oneLine, description, src, eventLink }) => (
				<EventCard
					number={number}
					oneLine={oneLine}
					description={description}
					name={name}
					key={number}
					src={src}
					eventLink={eventLink}
				/>
			)
		);
	} else if (conclaveName == "INNOVATORS CONCLAVE") {
		renderComponent = eventsData.innovators.map(
			({ name, number, oneLine, description, src, eventLink }) => (
				<EventCard
					number={number}
					oneLine={oneLine}
					description={description}
					name={name}
					key={number}
					src={src}
					eventLink={eventLink}
				/>
			)
		);
	} else if (conclaveName == "SUSTAINABILITY CONCLAVE") {
		renderComponent = eventsData.sustainability.map(
			({ name, number, oneLine, description, src, eventLink }) => (
				<EventCard
					number={number}
					oneLine={oneLine}
					description={description}
					name={name}
					key={number}
					src={src}
					eventLink={eventLink}
				/>
			)
		);
	}

	return (
		<>
			<Flex
				direction="column"
				justify="center"
				width="100%"
				bgColor="bootcamp.dark_blue"
				p="2rem">
				<Heading align="center" color="light" />
				<Flex wrap="wrap" justify="center" gap="1.8rem" mt="1rem">
					{renderComponent}
				</Flex>
			</Flex>
		</>
	);
}
