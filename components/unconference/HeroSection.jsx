import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import unconferenceLogo from "../../public/assets/unconference/unconference_white.png";
// import webengageLogo from "../../public/assets/unconference/webengage.png";
import bhara_agriLogo from "../../public/assets/unconference/bhara_agri.png";

export default function HeroSection() {
	return (
		<>
			<Flex
				p="4rem"
				pt="2rem"
				direction="column"
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
						bgColor="transparent	"
						borderRadius="10px"
						p="0.5rem"
						mb="0">
						<Image width={150} src={bhara_agriLogo} alt="Webengage" />
						<Text fontSize="2rem" fontWeight={600} color="white" my="1rem">
							Bharat Agri
						</Text>
					</Flex>
					<Text fontSize="1.2rem" color="white" my="1rem">
						presents
					</Text>
					<Flex justify="center" align="center" w="100%" maxW="100%">
						<Image src={unconferenceLogo} alt="unconference" width={250} />
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
					gap="1rem">
					<Text
						as="span"
						fontSize={{ base: "1.5rem", xl: "2rem" }}
						lineHeight={{ base: "100%", xl: "100%" }}
						fontWeight={400}>
						Case Study Competition
					</Text>
					{/* <Box w="100%" h="0px" border="1px" borderColor="bootcamp.purple"></Box> */}
					<Button
						bgColor={"bootcamp.purple"}
						colorScheme="pink"
						py="1.5rem"
						my="1rem"
						as="a"
						href="https://portal.esummitiitm.org/register/team-event/unconference">
						REGISTER NOW
					</Button>
					<Text fontSize="1.2rem">
						<strong>Registration Deadline:</strong> 24-3-2023 11:59 PM.
					</Text>
				</Flex>
			</Flex>
		</>
	);
}
