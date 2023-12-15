import { Flex, Box, Text } from "@chakra-ui/react";
// import { FaChalkboardTeacher } from "react-icons/fa";
// import { GiIncubator } from "react-icons/gi";
// import { MdOutlinePeopleAlt } from "react-icons/md";
// import { TbGift, TbSpeakerphone, TbZoomMoney } from "react-icons/tb";
import Heading from "./Heading";

export default function AboutSection() {
	// const iconSize = 60;
	return (
		<>
			<Flex
				id="about"
				direction={{ base: "column", md: "row" }}
				align={{ base: "center", md: "flex-start" }}
				textAlign={{ base: "justify"}}
				justify="center"
				bgColor="bootcamp.dark_blue"
				padding={{ base: "2rem", md: "4rem" }}>
				<Box padding="2rem">
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="What is MarketUp?"></Heading>
					<Text color="white" fontSize="1.2rem" mb="2rem">
					Are you a marketing enthusiast looking to put your skills to the test? Look no further! MarketUp is a platform for budding marketers to showcase their skills and compete with peers to win exciting prizes. Participants will have the opportunity to take part in a range of challenges, including online quizzes, marketing strategy planning and pitching. We aim to promote innovation, creativity, and strategic thinking in the field of marketing. Compete against like-minded individuals, showcase your marketing knowledge, and stand a chance to win exciting prizes. Register now and take the first step towards becoming a marketing champion!

					</Text>
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="Our Vision" ></Heading>
					<Text color="white" fontSize="1.2rem" mb="2rem">
					MarketUp aims at providing a platform that inspires and empowers young marketers to showcase their creativity, innovation, and strategic thinking abilities. We aim to create an environment where participants can learn from their peers, gain valuable experience, and develop skills that will help them succeed in their careers. Our ultimate goal is to contribute to the growth and development of the marketing industry by nurturing young talent and providing them with the opportunity to succeed.

					</Text>
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="Our Mission"></Heading>
					<Text color="white" fontSize="1.2rem">
					MarketUp is a platform for budding marketers to showcase their talents, compete with peers, and push the boundaries of marketing innovation. The competition aims to test contestants&apos; knowledge, creativity, and strategic thinking abilities. We&apos;re looking for the most innovative and strategic minds in the marketing industry. Participants will have the opportunity to learn from peers, demonstrate their strengths, and gain recognition for their achievements. We aim to inspire and encourage the next generation of marketing leaders.


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
						<GiIncubator color="white" size={iconSize + 10} margin={0} />
						<Text fontSize="1.5rem" color="white" fontWeight={700} m={"-0.5rem"}>
							Free
						</Text>
						<Text fontSize="1.2rem" color="white" textAlign={"center"} margin={0}>
							Incubation to <strong>top 9</strong> startups
						</Text>
					</Flex>
					<Flex
						gap="0.5rem"
						direction="column"
						justify="center"
						align="center"
						margin="1rem">
						<FaChalkboardTeacher color="white" size={iconSize} margin={0} />
						<Text fontSize="1.5rem" color="white" fontWeight={700} m={"-0.5rem"}>
							40+
						</Text>
						<Text fontSize="1.2rem" color="white" textAlign={"center"} margin={0}>
							Industry-wide Mentors
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
							6.25 lakhs
						</Text>
						<Text fontSize="1.2rem" color="white" textAlign={"center"} margin={0}>
							Prize Money
						</Text>
					</Flex>
					<Flex
						gap="0.5rem"
						direction="column"
						justify="center"
						align="center"
						margin="1rem">
						<TbGift color="white" size={iconSize} margin={0} />
						<Text fontSize="1.5rem" color="white" fontWeight={700} m={"-0.5rem"}>
							50L +
						</Text>
						<Text fontSize="1.2rem" color="white" textAlign={"center"} margin={0}>
							Incentives
						</Text>
					</Flex>
				</Flex> */}
			</Flex>
		</>
	);
}
