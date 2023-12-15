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
				textAlign={{ base: "center", md: "left" }}
				justify="center"
				bgColor="bootcamp.dark_blue"
				padding={{ base: "2rem", md: "4rem" }}>
				<Box padding="2rem">
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="About The Game(rules)"></Heading>
					<Text color="white" fontSize="1.2rem" mb="2rem">
					The rules of the game are simple. Every participant is initially given the same number of virtual credits, which are expected to be invested as profitably as possible by the contestants for a <b>time period of 2 weeks</b>. In the end, participants will be judged based on the effectiveness of the portfolio they made (basically it means the <b>participant with the highest net worth after 2 weeks wins</b> ).
					</Text>
				
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="Our Mission"></Heading>
					<Text color="white" fontSize="1.2rem">
					The mission of this game is to give the participants a better understanding of portfolio management and the strategies involved in it. This game mainly tests the strategic thinking and tactical skills of participants, which are extremely important qualities to participate in the stock market. Most importantly, it&apos;s a perfect opportunity to get familiarized with the real-world stock market.
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
