import { Box, Flex, Text, Button, LinkOverlay } from "@chakra-ui/react";
import AnimatedLogo from "./AnimatedLogo";
import westbridge from "../../public/assets/illustrations/bootcamp/sponsors/westbridge.jpeg";
import Image from "next/image";
import okaystartup from "../../public/assets/illustrations/bootcamp/Logos/okayStartup.png";

export default function HeroSection() {
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
					<Flex
						align="center"
						justify="center"
						bgColor="white"
						borderRadius="10px"
						p="0.5rem"
						mb="0">
						<Image width={200} src={westbridge} alt="Westbridge capital" />
					</Flex>
					<Text fontSize="1.2rem" color="white">
						presents
					</Text>
					<Flex justify="center" align="center" w="100%" maxW="100%">
						<AnimatedLogo />
					</Flex>
					<Text fontSize="1.2rem" color="white">
						in association with
					</Text>
					<Image width={200} src={okaystartup} alt="Okay Startup" />
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
						BOOTCAMP
						<br />
						<Text
							as="span"
							fontSize={{ base: "1.5rem", xl: "2rem" }}
							lineHeight={{ base: "100%", xl: "100%" }}
							fontWeight={400}>
							Revamping the roots
						</Text>
					</Text>
					<Box w="100%" h="0px" border="1px" borderColor="bootcamp.purple"></Box>
					<Text fontSize={{ base: "1.2rem", xl: "1.5rem" }}>
						A mini startup accelerator program | E-Summit IITM 2023
					</Text>
					{/* <Text fontSize="1.5rem"> </Text> */}
					<Button
						bgColor={"bootcamp.purple"}
						colorScheme="pink"
						py="1.5rem"
						disabled={true}
						my="1rem"
						as="a"
						href="https://portal.esummitiitm.org/register/team-event/bootcamp">
						Registrations Closed
					</Button>
					<Text fontSize="1.2rem">
						<strong>Registration Deadline:</strong> 17-2-2023 11:59 PM.
					</Text>
				</Flex>
			</Flex>
		</>
	);
}
