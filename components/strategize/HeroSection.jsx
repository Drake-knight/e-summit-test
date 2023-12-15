import { Box, Flex, Text, Button} from "@chakra-ui/react";
import logo from  "../../public/assets/SustainabilityConclaveLogo.png";
import iesaLogo from "../../public/assets/iesaLogo.png";
import Image from "next/image";

export default function HeroSectionWithSponsor() {
	return (
		<>
			<Flex
				p="4rem"
				pt="2rem"
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
						Strategize
						<br />
					</Text>
					<Box w="100%" h="0px" border="1px" borderColor="bootcamp.purple"></Box>
					<Text fontSize={{ base: "1.2rem", xl: "1.5rem" }}>
					Advancing the SDGs through Innovative Policy
					</Text>
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
						<Image width={150} src={iesaLogo} alt="Sponsor Logo" />
					</Flex>
					<Text fontSize="1.2rem" color="white" my="1rem">
						as Policy Partner
					</Text>
					
					</Flex>
					<Button
						bgColor={"bootcamp.purple"}
						colorScheme="pink"
						py="1.5rem"
						my="1rem"
						as="a"
						href="https://portal.esummitiitm.org/register/team-event/strategize">
						REGISTER NOW
					</Button>
					<Text fontSize="1.2rem">
						<strong>Registration Deadline:</strong> 17 March 11:59 PM.
					</Text>
				</Flex>
			</Flex>
		</>
	);
}
