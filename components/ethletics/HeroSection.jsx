import { Box, Flex, Text, Button } from "@chakra-ui/react";

import ethletics from "../../public/assets/ethletics.png";

import Image from "next/image";

export default function HeroSection() {
	return (
		<>
			<Flex
				mt="1rem"
				p="1rem"
				direction={{ base: "column", md: "row" }}
				align="center"
				minH="90vh"
				justify="center"
				w="100%"
				bgColor="bootcamp.dark_blue"
				gap="0rem">
				<Flex
					align="center"
					justify="center"
					direction="column"
					w={{ base: "100%", md: "50%" }}>
					<Flex justify="center" align="center" w="90%" maxW="90%">
						<Image src={ethletics} alt="E-thletics Logo" />
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
						E-thletics
						<br />
						<Text
							as="span"
							fontSize={{ base: "1.5rem", xl: "2rem" }}
							lineHeight={{ base: "100%", xl: "100%" }}
							fontWeight={400}>
							The Entrepreneurship Marathon
						</Text>
					</Text>
					<Box w="100%" h="0px" border="1px" borderColor="bootcamp.purple"></Box>

					<Button
						bgColor={"bootcamp.purple"}
						colorScheme="pink"
						py="1.5rem"
						my="1rem"
						as="a"
						href="https://portal.esummitiitm.org/register/team-event/ethletics"
						>
						Registrations Closed
					</Button>
					<Text fontSize="1.2rem">
						<strong>Registration Deadline:</strong> 10-03-2023, Friday 11:59 PM.
					</Text>
				</Flex>
			</Flex>
		</>
	);
}
