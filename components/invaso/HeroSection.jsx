import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import invasoLogo from "../../public/assets/invaso.png";

export default function HeroSection() {
	return (
		<>
			<Flex
				px="4rem"
				direction={{ base: "column", md: "row" }}
				align="center"
				minH="100vh"
				justify="center"
				w="100%"
				bgColor="bootcamp.dark_blue"
				gap="1rem"
			>
				<Flex
					direction="column"
					justifyContent="flex-start"
					width={{ base: "100%", md: "50%" }}
					color="white"
					textAlign="center"
					align="center"
					gap="1rem"
				>
					<Image src={invasoLogo} alt="invaso logo" width="350" />
					<Box w="100%" h="0px" border="1px" borderColor="bootcamp.purple"></Box>
					<Text fontSize={{ base: "1.2rem", xl: "1.5rem" }}>
						Invest in your future with Invaso - where financial knowledge meets
						strategic thinking.
					</Text>
					{/* <Text fontSize="1.5rem"> </Text> */}
					<Button
						bgColor={"bootcamp.purple"}
						colorScheme="pink"
						py="1.5rem"
						my="1rem"
						as="a"
						href="https://portal.esummitiitm.org/register/team-event/invaso"
					>
						REGISTERATIONS CLOSED
					</Button>
					<Text fontSize="1.2rem">
						<strong>Registration Deadline:</strong> 10-3-2023 11:59 PM.
					</Text>
				</Flex>
			</Flex>
		</>
	);
}
