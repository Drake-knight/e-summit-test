import {
	Flex,
	Box,
	Text,
	List,
	ListItem,
	ListIcon,
	OrderedList,
	UnorderedList,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import Heading from "../bootcamp/Heading";

export default function AboutSection({ aboutUs, vision, mission }) {
	const iconSize = 60;
	return (
		<>
			<Flex
				id="about"
				direction={{ base: "column", md: "row" }}
				align={{ base: "center", md: "flex-start" }}
				textAlign={{ base: "center", md: "left" }}
				justify="center"
				bgColor="bootcamp.dark_blue"
				padding={{ base: "2rem", md: "4rem" }}>
				<Box padding="2rem" width={{ base: "100%", md: "90%" }}>
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="About the Expo"></Heading>
					<Text color="white" fontSize="1.2rem" mb="2rem" align={"center"}>
						A unique opportunity to showcase cutting-edge products from startups to a
						mass audience including students, investors, and E-Summit attendees. The
						stalls will be placed at some of the most crowd-engaging places in the
						institute, focusing on a wide variety of customer segments best suited to
						the startups. The event will provide an excellent platform to network with
						VCs, students, professors, and industrialists.
					</Text>
					<br />
					<br />

					<Text color="white" fontSize="1.2rem" mb="2rem" align={"center"}>
						Venue: IIT Madras Campus
						<br />
						Date: 7th and 8th April
						<br />
						Time: 12pm to 12am
					</Text>
					<br />
					<br />

					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="Deliverables"></Heading>
					<Text color="white" fontSize="1.2rem" mb="2rem" align={"left"}>
						<List spacing={3}>
							<ListItem>
								<ListIcon as={MdCheckCircle} color="white" />A stall(10ft x 10ft)
								with a classy standard ambience at a place with the highest footfall
								among the whole summit.
							</ListItem>
							<ListItem>
								<ListIcon as={MdCheckCircle} color="white" />
								Visits to your stalls by Venture capitalists and firms to view your
								product.
							</ListItem>
							<ListItem>
								<ListIcon as={MdCheckCircle} color="white" />
								Access to exclusive Networking Lunch VCs and founders.
							</ListItem>
							<ListItem>
								<ListIcon as={MdCheckCircle} color="white" />
								Integration in Print Media: Startup Showcase will be covered by our
								official media partners during E-Summit and will also be published
								in our annual magazine Entrepreneurship Insider.
							</ListItem>
							<ListItem>
								<ListIcon as={MdCheckCircle} color="white" />
								Common PA (Public Address) system to make important announcements to
								the audience regarding your current offers and demonstrations
							</ListItem>
							<ListItem>
								<ListIcon as={MdCheckCircle} color="white" />
								Visits by professors of similar research areas.
							</ListItem>
							<ListItem>
								<ListIcon as={MdCheckCircle} color="white" />
								Integration in Print Media: Startup Showcase will be covered by our
								official media partners during E-Summit and will also be published
								in our annual magazine Entrepreneurship Insider.
							</ListItem>
						</List>
					</Text>
				</Box>
			</Flex>
		</>
	);
}
