import { Flex, Box, Text } from "@chakra-ui/react";
import Heading from "./Heading";

export default function AboutSection() {
	return (
		<>
			<Flex
				id="about"
				direction={{ base: "column", md: "row" }}
				align={{"base": "center", "md":"flex-start"}}
				textAlign={{"base": "center", "md": "left"}}
				justify="center"
				bgColor="bootcamp.dark_blue"
				padding={{ base: "2rem", md: "4rem" }}>
				<Box padding="2rem">
					<Heading align={{"base":"center", "md":"left"}} color="light" label="About E-Awards"></Heading>
					<Text color="white" fontSize="1.2rem" mb="2rem">
						Are you a Startup enthusiast seeking a challenge for your abilities? Do you have an amazing
						Startup and are looking for opportunities to showcase and inspire others? Then stop your
						search.

						E-Awards is here to identify, commend, and glorify the Best Entrepreneur On-campus. The
						competitors would have to dexterously portray their entrepreneurial skills through their diverse
						experiences in the business world. These awards would focus more on the entire
						entrepreneurial potential of the participant alongside analyzing their contribution to any
						startup/s.

					</Text>
					<Heading align={{"base":"center", "md":"left"}} color="light" label="Our Vision"></Heading>
					<Text color="white" fontSize="1.2rem">
						We aim to create a platform that inspires and entices young entrepreneurs at IIT Madras to
						demonstrate their inventiveness, ingenuity, and capacity. In order to help the young student
						entrepreneurs become young change makers who inspire and motivate people around them,
						gain essential industry insights , we seek to establish an environment where they may learn
						from their fellow participants. Our ultimate goal is to inspire budding entrepreneurs by honoring
						and glorifying the top students who own potential Startups.
					</Text>
				</Box>
					
				
				{/* <Flex
					direction="column"
					justify="center"
					align="center"
					padding={{ base: "0rem", md: "2rem" }}
					minW={{ base: "100%", md: "30%" }}
					textAlign="center">
					<Flex
						gap="0.5rem"
						direction="column"
						justify="center"
						align="center"
						margin="1rem">
						<BsPeopleFill color="white" size={iconSize} margin={0} />
						<Text fontSize="1.5rem" color="white" fontWeight={700} m={"-0.5rem"}>
							300+
						</Text>
						<Text fontSize="1.2rem" color="white" textAlign={"center"} margin={0}>
							Registrations last year
						</Text>
					</Flex>
					<Flex
						gap="0.5rem"
						direction="column"
						justify="center"
						align="center"
						margin="1rem">
						<TbZoomMoney color="white" size={iconSize} margin={0} />
						<Text fontSize="1.5rem" color="white" fontWeight={700} m={"-0.5rem"}>
							30k
						</Text>
						<Text fontSize="1.2rem" color="white" textAlign={"center"} margin={0}>
							Prize Money
						</Text>
					</Flex>
				</Flex> */}
				
					
			</Flex>
		</>
	);
}
