import { Box, Flex, Text, Button, LinkOverlay } from "@chakra-ui/react";
import pcLogo from "../../public/assets/pc-sponsor-logo.png";
import heroImage from "../../public/assets/product-construct/Strategic consulting-amico.svg";
import Image from "next/image";

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
					<Flex justify="center" align="center" w="100%" maxW="100%">
						<Image src={heroImage} alt="product-construct-logo" />
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
						PRODUCT CONSTRUCT
						<br />
						<Text
							as="span"
							fontSize={{ base: "1.5rem", xl: "2rem" }}
							lineHeight={{ base: "100%", xl: "100%" }}
							fontWeight={400}>
							Escort life to the Product
						</Text>
					</Text>
					<Box w="100%" h="0px" border="1px" borderColor="bootcamp.purple"></Box>
					<Text fontSize={{ base: "1.2rem", xl: "1.5rem" }}>
						Product Management case study competition | E-Summit IITM 2023
					</Text>
					{/* <Text fontSize="1.5rem"> </Text> */}
					<Button
						bgColor={"bootcamp.purple"}
						colorScheme="pink"
						py="1.5rem"
						my="1rem"
						as="a"
						href="https://portal.esummitiitm.org/register/team-event/product-construct">
						REGISTER NOW
					</Button>
					<Text fontSize="1.2rem">
						<strong>Registration Deadline:</strong> 25th March
					</Text>
				</Flex>
			</Flex>
		</>
	);
}
