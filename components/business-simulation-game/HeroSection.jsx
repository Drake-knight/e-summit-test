import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";

import bsgLogo from "../../public/assets/illustrations/bsg/bsgLogo.png";
import imarticusLearning from "../../public/assets/illustrations/bsg/sponsorLogo.png";
import Image from "next/image";

export default function HeroSection() {
	return (
		<>
			<Flex
				// mt="0.2rem"
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
					w={{ base: "90%", md: "30%" }}>
					<Flex justify="center" align="center" maxW="100%">
						<Image src={bsgLogo} alt="BSG Logo" />
					</Flex>
				</Flex>
				<Flex
					direction="column"
					py="1rem"
					justifyContent="flex-start"
					width={{ base: "100%", md: "50%" }}
					color="white"
					textAlign="center"
					align="center"
					gap={{ base: "1rem", md: "1.5rem" }}>
					<Flex align="center" justify="center" direction="column">
						<Link marginRight={"2rem"} href="https://imarticus.org/">
							<Image width={250} src={imarticusLearning} alt="Imarticus Learning" />
						</Link>
						<Text fontSize={{ base: "1.2rem", md: "1.5rem" }} color="white">
							presents
						</Text>
					</Flex>

					<Text
						lineHeight={{ base: "150%", xl: "100%" }}
						fontSize={{ base: "3rem", xl: "3.5rem" }}
						fontWeight={700}>
						Business Simulation Game - StratUp
						<br />
						<Text
							as="span"
							fontSize={{ base: "1.5rem", xl: "2rem" }}
							lineHeight={{ base: "100%", xl: "100%" }}
							fontWeight={400}>
							Play, Strategize and Win!
						</Text>
					</Text>
					<Box w="100%" h="0px" border="1px" borderColor="bootcamp.purple"></Box>
					<Button
						colorScheme="pink"
						py="1.5rem"
						my="0.5rem"
						as="a"
						href="https://portal.esummitiitm.org/register/solo-event/business-simulation-game"
						isDisabled>
						Registartions Closed
					</Button>
					<Text fontSize="1.2rem">
						<strong>Registration Deadline:</strong> 02-04-2023, Sunday 11:59 PM.
						<Text fontSize={{ base: "1.2rem", md: "1.3rem" }} mt="1rem">
							Access the handbook and recording of orientation session from here
							<Button
								colorScheme="pink"
								// py="1.5rem"
								ml="1rem"
								as="a"
								href="https://drive.google.com/drive/folders/1Rr9-sgRtgTvZCK1RuLBM53epfCt3Yeo8?usp=share_link">
								CLICK
							</Button>
						</Text>
					</Text>
				</Flex>
			</Flex>
		</>
	);
}
