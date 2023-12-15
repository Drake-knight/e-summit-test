import { Box, Flex, Text, Button, LinkOverlay } from "@chakra-ui/react";
import Image from "next/image";
import elevateLogo from "../../public/assets/conclaves/inverted_investinder.png";

export default function HeroSection({ eventName, oneLine, description, deadline, src }) {
	const eventNameURLMap = {
		"Startup Expo": "https://portal.esummitiitm.org/register/solo-event/startup-expo",
		"Sandberg's Match": "https://portal.esummitiitm.org/register/solo-event/sandberg-match",
		INVESTINDER: "https://portal.esummitiitm.org/register/solo-event/investinder",
	};
	return (
		<>
			<Flex
				p="4rem"
				direction={{ base: "column", md: "row" }}
				align="center"
				minH="100vh"
				justify="center"
				w="100%"
				bgColor="bootcamp.dark_blue"
				gap="1rem">
				<Flex
					align="center"
					justify="center"
					direction="column"
					w={{ base: "100%", md: "50%" }}>
					<Flex justify="center" align="center" w="100%" maxW="80%">
						<Image src={src} alt="Elevate" />
					</Flex>
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
					<Text
						lineHeight={{ base: "150%", xl: "100%" }}
						fontSize={{ base: "3rem", xl: "3.5rem" }}
						fontWeight={700}>
						{eventName}
						<br />
						<Text
							as="span"
							fontSize={{ base: "1.5rem", xl: "2rem" }}
							lineHeight={{ base: "100%", xl: "100%" }}
							fontWeight={400}>
							{oneLine}
						</Text>
					</Text>
					<Box w="100%" h="0px" border="1px" borderColor="bootcamp.purple"></Box>
					<Text fontSize={{ base: "1.2rem", xl: "1.5rem" }}>
						{description} | E-Summit IITM 2023
					</Text>
					<Button
						bgColor={"bootcamp.purple"}
						colorScheme="pink"
						py="1.5rem"
						my="1rem"
						href={eventNameURLMap[eventName]}
						target="_blank"
						as="a">
						REGISTER NOW
					</Button>
					<Text fontSize="1.2rem">
						<strong>Registration Deadline:</strong> {deadline}
					</Text>
				</Flex>
			</Flex>
		</>
	);
}
