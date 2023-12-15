import { Flex, Text } from "@chakra-ui/react";

import {
	RiPlantFill,
	RiStockFill,
	RiBitCoinFill,
	RiRecycleFill,
	RiRocket2Fill,
} from "react-icons/ri";

const iconSize = 30;

const iconMap = {
	fintech: <RiStockFill size={iconSize} />,
	web: <RiBitCoinFill size={iconSize} />,
	sustainability: <RiRecycleFill size={iconSize} />,
	agritech: <RiPlantFill size={iconSize} />,
	agnostic: <RiRocket2Fill size={iconSize} />,
};

export default function Track({ title, icon }) {
	return (
		<>
			<Flex
				direction="column"
				align={"center"}
				justify="center"
				m="0.5rem"
				bgColor="bootcamp.dark_blue"
				color="white"
				width={{ base: "100%" }}
				maxW="240px"
				h="175px"
				minH="100%"
				borderRadius="10px"
				overflow="hidden"
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
					padding: "1rem",
				}}>
				<Flex p="2rem" align="center" justify="center" direction="column">
					{iconMap[icon]}
					<Text fontSize="1.5rem" fontWeight="700" textAlign="center" mb="1rem">
						{title}
					</Text>
				</Flex>
				<Flex w="100%"></Flex>
			</Flex>
		</>
	);
}
