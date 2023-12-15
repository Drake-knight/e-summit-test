import Heading from "./Heading";
import TimelineEvent from "../bootcamp/TimelineEvent.jsx";
import { Box, Flex } from "@chakra-ui/react";

export default function TimelineSection() {
	return (
		<Box p="2rem">
			<Flex
				id="timeline"
				width="100%"
				p="2rem"
				bgColor="bootcamp.dark_blue"
				direction="column"
				align="center"
				justify="center">
				<Heading color="light" align="center" label="Timeline"></Heading>
				<Flex
					margin="2rem"
					paddingX={{ base: "1rem", md: "4rem" }}
					border="1px"
					borderRadius={"5px"}
					borderColor="bootcamp.beige"
					style={{
						border: "1px solid transparent",
						backgroundOrigin: "border-box",
						backgroundClip: "content-box, border-box",
						boxShadow: " 2px 1000px 1px rgba(0, 0, 38, 1) inset",
						border: "1px solid transparent",
						margin: "1rem",
						borderRadius: "10px",
						backgroundImage:
							"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 255, 0)), linear-gradient(135deg, rgba(13, 58, 255, 1), rgba(237, 37, 78, 1))",
						backgroundOrigin: "border-box",
						backgroundClip: "content-box, border-box",
						boxShadow: " 2px 1000px 1px rgba(0, 0, 38, 1) inset",
						paddingX: "1rem",
					}}>
					<Box
						ml="3rem"
						mr="-25px"
						maxW="0"
						border="1px"
						borderStyle={"dashed"}
						borderColor="white"></Box>
					<Flex direction="column" justify="center">
						<TimelineEvent
							icon="rocket"
							text="Registrations close"
							date="24th March"></TimelineEvent>
						<TimelineEvent
							icon="stopwatch"
							text="1st round submissions"
							date="31st March"></TimelineEvent>
						<TimelineEvent
							icon="thumbsup"
							text="Announcement of results of 1st round"
							date="1st April"
						/>
						<TimelineEvent icon="video" text="2nd round starts" date="2nd April" />
						<TimelineEvent icon="graduate" text="Grand Finale" date="9th April" />
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
}
