import { Flex, Text, Button } from "@chakra-ui/react";

export default function RoundCard({ number, name, description,status }) {
	return (
		<Flex
			direction="column"
			color="white"
			w="25%"
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
			<Text align={"justify"}>{description}</Text>
			{status ==="Completed" || status ==="Ongoing"?
		<Button
						alignSelf="flex-end"
						bgColor={"brand.light_blue"}
						width="50%"
						minWidth="fit-content"
						my="1rem"
						variant="outline" _hover={{ boxShadow: "none" }} _active="none"
						>
						{status}
					</Button>:""}
		</Flex>
	);
}
