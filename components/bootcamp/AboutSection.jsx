import { Flex, Box, Text } from "@chakra-ui/react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiIncubator } from "react-icons/gi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TbGift, TbSpeakerphone, TbZoomMoney } from "react-icons/tb";
import Heading from "./Heading";

export default function AboutSection() {
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
				<Box padding="2rem">
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="What is BootCamp?"></Heading>
					<Text color="white" fontSize="1.2rem" mb="2rem">
						Bootcamp is a 6-week long mini startup accelerator that provides early-stage
						startups with the requisite expertise and skills to make it big in the
						outside world BootCamp works through a carefully designed mixture of
						workshops and startup-specific mentoring that imparts knowledge efficiently.
						In addition, it focuses on participatory learning and interaction within the
						cohort to push the limits of startups, generate new perspectives, and nudge
						founders to be proactive leaders while equipping them with the vital social
						skills necessary to mobilize people and resources. The outcome of BootCamp
						is a cohort of startups with a viable business plan and ready for
						incubation.
					</Text>
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="Our Vision"></Heading>
					<Text color="white" fontSize="1.2rem">
						Ideas are critical, but the execution is the key. With 1.3 billion people,
						India faces no shortage of ideas nor human capital the elusiveness of
						resources, and lack of the initial push towards actualizing an idea that
						holds us down. Bootcamp seeks to solve this very problem of bringing ideas
						closer to reality.
					</Text>
				</Box>
				<Flex
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
				</Flex>
			</Flex>
		</>
	);
}
