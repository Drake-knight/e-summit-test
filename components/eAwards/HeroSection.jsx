import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import eAwardsLogo from "../../public/assets/eAwards.png";

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
					<Image src={eAwardsLogo} alt="e-awards logo" width="350" />
					<Box w="100%" h="0px" border="1px" borderColor="bootcamp.purple"></Box>
					<Text fontSize={{ base: "1.2rem", xl: "1.5rem" }}>
						The Best Student Entrepreneur Award
					</Text>
					{/* <Text fontSize="1.5rem"> </Text> */}
					<Button
						bgColor={"bootcamp.purple"}
						colorScheme="pink"
						py="1.5rem"
						my="1rem"
						as="a"
						href="https://portal.esummitiitm.org/register/solo-event/e-awards">
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
