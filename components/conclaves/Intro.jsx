import { Box, Center, Flex, Text, VStack, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

function Intro({ description, conclaveName }) {
	return (
		<Box height="100vh" alignItems="center" justifyContent="center" display="flex">
			<Grid templateColumns="repeat(2,1fr)" gap={10}>
				<GridItem colSpan={{ base: "2", sm: "1" }}>
					<Text
						textAlign="center"
						fontSize={{
							base: conclaveName === "SUSTAINABILITY CONCLAVE" ? "2rem" : "3rem",
							sm: "5xl",
							md: "7xl",
							lg: "7xl",
							xl: "8xl",
						}}
						p={{ base: "2.5rem", xl: "rem" }}
						pl={{ base: "5", xl: "2rem" }}
						bgGradient="linear(to-br, brand.light_blue, brand.green_blue)"
						bgClip="text">
						{conclaveName}
					</Text>
				</GridItem>
				<GridItem colSpan={{ base: "2", sm: "1" }}>
					<VStack
						backgroundColor="bootcamp.dark_blue"
						color="#FFECD1"
						width="100%"
						pr={{ base: "2rem", md: "5rem", lg: "7rem", xl: "7rem" }}
						pl={{ base: "2rem", md: "5rem", lg: "7rem", xl: "7rem" }}>
						<Text
							fontSize={{ base: "1.5rem", xl: "3rem" }}
							bgGradient="linear(to-l, #C12A72, #4135D6)"
							bgClip="text">
							LAUNCHING LEADERS OF TOMORROW
							<span style={{ color: "#CC317A" }}>.</span>
						</Text>
						<Text
							pb={10}
							fontSize={{ base: "1.2rem", xl: "1.2rem" }}
							lineHeight="150%"
							color="white"
							fontFamily="Sen">
							{description}
						</Text>
					</VStack>
				</GridItem>
			</Grid>
		</Box>
	);
}

export default Intro;
