import Heading from "../bootcamp/Heading";
import TimelineEvent from "../bootcamp/TimelineEvent";
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
						// boxShadow: " 2px 1000px 1px rgba(0, 0, 38, 1) inset",
						paddingX: "1rem",
					}}>
					<Box
						ml="3rem"
						mr="-25px"
						maxW="0"
						border="1px"
						borderStyle={"dashed"}
						borderColor="white"></Box>
					<Flex direction="column" justify="center" maxWidth="25rem">
						<TimelineEvent
							icon="stopwatch"
							text="Event Launch"
							date="20th March"></TimelineEvent>
						<TimelineEvent
							icon="thumbsup"
							text="Deadline for Registration"
							date="25th March"
						/>
						<TimelineEvent
							icon="rocket"
							text="Release PS for phase 1"
							date="26th March"></TimelineEvent>
						<TimelineEvent icon="thumbsup" text="Deadline for PS1" date="31st March" />
						<TimelineEvent icon="video" text="Round-1 results" date="1st April" />
						<TimelineEvent icon="comments" text="PS-2 release" date="1st April" />
						<TimelineEvent icon="personTag" text="PS-2 submission" date="6th April" />
						{/* <TimelineEvent
							icon="graduate"
							text="Mentors Allotment (buddy system)"
							date="24th March"
						/>
						<TimelineEvent
							icon="graduate"
							text="Product Masterclasses start"
							date="26th March"
						/>
						<TimelineEvent
							icon="graduate"
							text="Teams come to IITM, followed by networking activities"
							date="6th April"
						/>
						<TimelineEvent
							icon="graduate"
							text="Finale and End of E-Summit"
							date="8th April"
						/> */}
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
}
