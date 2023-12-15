import {
	Box,
	Button,
	Grid,
	GridItem,
	Text,
	VStack,
	useMediaQuery,
	Tag,
	Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ConclaveAnimation from "./ConclaveAnimation";
import conclavesMap from "../../utils/conclavesMap";

const conclaves = {
	INNOVATORS: "INNOVATORS",
	STARTUP: "STARTUP",
	SUSTAINABILITY: "SUSTAINABILITY",
	YOUTH: "YOUTH",
};

function Conclaves() {
	const [isLargerThanMobile] = useMediaQuery("(min-width: 450px)");
	const [isLargeLaptop] = useMediaQuery("(min-width: 1300px)");
	const [activeConclave, setActiveConclave] = useState("YOUTH");

	return (
		<Box
			id="conclaves"
			width="full"
			paddingY={{ base: "4rem", md: "16rem", xl: "4rem" }}
			display="flex"
			mt={{ xl: "10rem" }}
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			minHeight="80vh"
			fontFamily="Sen"
			gap={{ base: "2rem", md: "3rem" }}
			position="relative"
			paddingX={{ base: "0rem", md: "2rem", xl: "6rem", "2xl": "8rem" }}>
			<Text
				textAlign="left"
				fontFamily="Sen"
				fontSize={isLargerThanMobile ? "5rem" : "3.5rem"}
				bgGradient="linear(to-br, brand.light_blue, brand.red)"
				lineHeight="120%"
				bgClip="text">
				CONCLAVES
			</Text>
			<Grid
				templateColumns={isLargerThanMobile ? "repeat(4,1fr)" : "repeat(1, 1fr)"}
				height="100%"
				width="100%"
				columnGap={{ xl: "4rem", "2xl": "8rem" }}>
				<GridItem
					colSpan={isLargerThanMobile ? "2" : "1"}
					display="flex"
					justifyContent="center"
					alignItems="center">
					<Box
						width="100%"
						height={isLargerThanMobile ? "100%" : "40vh"}
						display={isLargerThanMobile ? "grid" : "flex"}
						justifyContent={isLargerThanMobile ? "" : "center"}>
						<ConclaveAnimation setActiveConclave={setActiveConclave} />
					</Box>
				</GridItem>
				<GridItem colSpan={isLargerThanMobile ? "2" : "1"} height="100%">
					<VStack
						justifyContent="start"
						height="100%"
						paddingTop={{ xl: "0rem", "2xl": "4rem" }}
						paddingInline={{ base: "2rem", md: "0rem" }}
						spacing={{ base: "2rem", xl: "1.5rem", "2xl": "2rem" }}
						alignItems="flex-start"
						width="100%">
						<Text
							textAlign={{ base: "center", xl: "left" }}
							width={{ base: "100%" }}
							fontFamily="Sen"
							fontSize={{ base: "2.5rem", md: "3rem" }}
							bgGradient="linear(to-br, brand.light_blue, brand.red)"
							lineHeight="120%"
							bgClip="text">
							{conclavesMap[activeConclave].title} Conclave
						</Text>
						<VStack alignItems="flex-start">
							<Text fontSize="1.5rem" as="i" lineHeight="150%" color="white">
								{conclavesMap[activeConclave].tagline}
							</Text>
							<Text fontSize="1rem" opacity="70%" lineHeight="120%" color="white">
								{conclavesMap[activeConclave].brief}
							</Text>
						</VStack>
						<VStack alignItems="flex-start">
							<Text fontSize="1.2rem" lineHeight="150%" color="white">
								Who should attend?
							</Text>
							<Flex gap="0.75rem" flexWrap="wrap">
								{conclavesMap[activeConclave].whoShouldAttend.map((tag, index) => {
									return (
										<Tag
											whiteSpace="nowrap"
											padding="0.5rem"
											// variant="outline"
											size={{ base: "sm", xl: "lg" }}
											key={index}
											variant="solid"
											colorScheme="purple"
											fontWeight={700}>
											{tag}
										</Tag>
									);
								})}
							</Flex>
						</VStack>
						<Button
							as="a"
							href={`/conclaves/${conclavesMap[activeConclave].slug}`}
							isDisabled={false}
							colorScheme="blue"
							size={{ base: "lg", xl: "lg" }}
							alignSelf={{ base: "center", md: "flex-start" }}>
							Know More
						</Button>
					</VStack>
				</GridItem>
			</Grid>
		</Box>
	);
}

export default Conclaves;
