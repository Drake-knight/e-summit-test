import { Flex, Text } from "@chakra-ui/react";

export default function Round({ title, text }) {
	return (
		<>
			<Flex
				direction="column"
				justify="center"
				align="center"
				textAlign={"center"}
				maxW={{ base: "100%", md: "40%" }}>
				<Text fontSize="1.5rem" fontWeight="700">
					{title}
				</Text>
				<Text fontSize="1.2rem" color="bootcamp.dark_blue">
					{text}
				</Text>
			</Flex>
		</>
	);
}
