import { Flex, Text } from "@chakra-ui/react";

export default function PastTeam({ text }) {
	return (
		<>
			<Flex
				maxW="80vw"
				height="100%"
				align="center"
				justify="center"
				bgColor="bootcamp.dark_blue"
				borderRadius="10px"
				p="2rem">
				<Text fontSize="1.2rem" color="white">
					{text}
				</Text>
			</Flex>
		</>
	);
}
