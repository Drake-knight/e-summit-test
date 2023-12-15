import { Flex, Text } from "@chakra-ui/react";

export default function RoundCard({ number, name, description }) {
	return (
		<Flex
			direction="column"
			color="white"
			w="20%"
			wrap="wrap"
			minW="300px"
			padding="2rem"
			gap="1rem"
			style={{
				border: "1px solid transparent",
				backgroundOrigin: "border-box",
				backgroundClip: "content-box, border-box",
				boxShadow: " 2px 1000px 1px rgba(0, 0, 38, 1) inset",
				border: "1px solid transparent",
				borderRadius: "10px",
				backgroundImage:
					"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 255, 0)), linear-gradient(135deg, rgba(13, 58, 255, 1), rgba(237, 37, 78, 1))",
				backgroundOrigin: "border-box",
				backgroundClip: "content-box, border-box",
				boxShadow: " 2px 1000px 1px rgba(0, 0, 38, 1) inset",
			}}
		>
			<Text fontSize="1.4rem" fontWeight="700">{`Round ${number}: ${name}`}</Text>
			<Text>{description}</Text>
		</Flex>
	);
}
