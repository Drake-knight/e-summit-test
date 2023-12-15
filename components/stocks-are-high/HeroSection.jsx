import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import stocksAreHigh from "../../public/assets/stocksAreHigh.png";
import StockPeLogo from "../../public/assets/stockPeLogo.png";
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
					align="center"
					justify="center"
					direction="column"
					w={{ base: "100%", md: "50%" }}>
					<Flex align="center" justify="center" borderRadius="10px" p="0.5rem" mb="0">
						<Image src={stocksAreHigh} alt="marketup logo" width={500} />
					</Flex>
					<Text fontSize="1.2rem" color="white">
						Platform Sponsor
					</Text>
					<Image width={200} src={StockPeLogo} alt="Okay Startup" />
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
					<Heading align="center" color="light" label="Stocks Are High"></Heading>
					<Box w="100%" h="0px" border="1px" borderColor="bootcamp.purple"></Box>
					<Text fontSize={{ base: "1.2rem", xl: "1.5rem" }}>
						 Riding the bull market to new heights.
						<br />
						“In investing, what is comfortable is rarely profitable” &#8211; Robert
						Arnott
					</Text> 
					{/* <Text fontSize="1.5rem"> </Text> */}
					<Button
						
						colorScheme="pink"
					
						mb="1rem"
						as="a"
						href="https://unstop.com/o/h3Lf6g2?lb=FdjAOYw">
						REGISTER NOW
					</Button>
					<Text fontSize="1.2rem">
						<strong>Registration Deadline:</strong> 22-March-2023
					</Text>
				</Flex>
			</Flex>
		</>
	);
}
