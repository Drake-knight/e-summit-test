import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import marketupLogo from "../../public/assets/marketuplogo2.png";
import Heading from "./Heading";

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
				gap="1rem">
				<Flex
					direction="column"
					justifyContent="flex-start"
					width={{ base: "100%", md: "50%" }}
					color="white"
					textAlign="center"
					align="center"
					gap="1rem">
					<Image src={marketupLogo} alt="marketup logo" width={500} />
					<Heading align="center" color="light" label="MarketUp"></Heading>
					<Box w="100%" h="0px" border="1px" borderColor="bootcamp.purple"></Box>
					<Text fontSize={{ base: "1.2rem", xl: "1.5rem" }}>
						Unleash the Marketing Genius!
					</Text>
					{/* <Text fontSize="1.5rem"> </Text> */}
					<Button
						bgColor={"bootcamp.purple"}
						colorScheme="pink"
						py="1.5rem"
						mt="1rem"
						as="a"
						href="https://portal.esummitiitm.org/register/team-event/marketup">
						Registrations Closed
					</Button>
					{/* <Flex direction={{base:"column",md:"row"}} alignItems="center" gap={"1rem"}>
					<Text fontSize="1.2rem">Additionally, for Round 1, please register here :</Text>
					<Button
						
						colorScheme="pink"
					
						mb="1rem"
						as="a"
						href="https://unstop.com/competitions/marketup-e-summit-2023-iit-madras-iit-madras-629277">
						Round 1
					</Button>
					
					</Flex> */}
					<Text fontSize="1.2rem">
						<strong>Registration Deadline:</strong> 13th March, Monday 8:00 PM
					</Text>
				</Flex>
			</Flex>
		</>
	);
}
