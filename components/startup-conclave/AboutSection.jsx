import { Flex, Box, Text } from "@chakra-ui/react";
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
						label="About Us"></Heading>
					<Text color="white" fontSize="1.2rem" mb="2rem" align={"center"}>
						{aboutUs}
					</Text>

					{/* <Flex
						p="2rem"
						pt="0"
						direction={{ base: "column", md: "row" }}
						align="center"
						justify="center"
						bgColor="bootcamp.dark_blue"
						gap="1rem">
						<Flex
							direction="column"
							py="2rem"
							justifyContent="flex-start"
							width={{ base: "100%", md: "50%" }}
							color="white"
							textAlign="center"
							align="center"
							gap="1rem">
							<Box>
								<Heading
									align={{ base: "center", md: "left" }}
									color="light"
									label="Our Vision"></Heading>
								<Text color="white" fontSize="1.2rem" align={"center"}>
									{vision}
								</Text>
							</Box>
						</Flex>
						<Flex
							direction="column"
							py="2rem"
							justifyContent="flex-start"
							width={{ base: "100%", md: "50%" }}
							color="white"
							textAlign="center"
							align="center"
							gap="1rem">
							<Box>
								<Heading
									align={{ base: "center", md: "left" }}
									color="light"
									label="Our Mission"></Heading>
								<Text color="white" fontSize="1.2rem" align={"center"}>
									{mission}
								</Text>
							</Box>
						</Flex>
					</Flex> */}
				</Box>
			</Flex>
		</>
	);
}
