import { Box, Flex, Text, Button, LinkOverlay } from "@chakra-ui/react";;
import logo from  "../../public/assets/SustainabilityConclaveLogo.png";
import plmLogo from "../../public/assets/plmLogo.png";
import Image from "next/image";
import poster from "../../public/assets/solveToEvolvePoster.jpeg";

export default function HeroSectionWithSponsor() {
	return (
		<>
			<Flex
				px="4rem"
				pt="2rem"
				pb="0rem"
				direction={"column"}
				align="center"
				minH="100vh"
				justify="center"
				w="100%"
				bgColor="bootcamp.dark_blue"
				gap="1rem">
				<Flex justify="center" align="center" w="100%" maxW="100%" mb="2rem">
					<Image src={logo} alt="logo" width="350"/>
				</Flex>
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
						<Image width={150} src={plmLogo} alt="Sponsor Logo" />
					</Flex>
					<Text fontSize="1.2rem" color="white" my="1rem">
						presents
					</Text>
					
				</Flex>
				<Flex
					direction="column"
					py="2rem"
					pt="0rem"
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
						Solve to Evolve
						<br />
					</Text>
					<Box w="100%" h="0px" border="1px" borderColor="bootcamp.purple"></Box>
					<Text fontSize={{ base: "1.2rem", xl: "1.5rem" }}>
						Industry Case Study challenge
					</Text>
					<Button
						bgColor={"bootcamp.purple"}
						colorScheme="pink"
						py="1.5rem"
						my="1rem"
						as="a"
						href="https://portal.esummitiitm.org/register/team-event/solve-to-evolve">
						REGISTER NOW
					</Button>
					<Text fontSize="1.2rem" mb="2rem">
						<strong>Registration Deadline:</strong> 17 March 11:59 PM.
					</Text>
					<Image src={poster} width="500" alt="poster" />
				</Flex>
			</Flex>
		</>
	);
}
