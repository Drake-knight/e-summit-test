import { Box, Button, VStack, Text, Stack, Center, Spacer, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function Card({ imageAlt, imageSrc, title, oneLine, description }) {
	return (
		<Box
			bgColor="bootcamp.dark_blue"
			paddingTop="4rem"
			paddingBottom="4rem"
			width={{ base: "100%", xl: "60%" }}>
			<Stack
				width="100%"
				direction={{ base: "column", xl: "row" }}
				paddingInline={{ base: "2rem", xl: "0" }}
				alignItems="center"
				justifyContent="center"
				height="100%">
				<Box
					flexBasis="35%"
					pb={{ base: "4rem", xl: "2rem" }}
					height="100%"
					alignItems="center"
					justifyContent="center"
					display="flex">
					<Image
						src={imageSrc}
						alt={imageAlt}
						alignItems="center"
						justifyContent="center"
					/>
				</Box>
				<Flex
					flexDirection="column"
					flexBasis="65%"
					pl={{ base: "0", xl: "100px" }}
					width="100%">
					<Text
						fontSize={{ base: "3.7rem", xl: "4rem" }}
						width="100%"
						textAlign={{ base: "center", xl: "left" }}
						bgGradient="linear(to-l, #C12A72, #4135D6)"
						bgClip="text"
						pb={{ base: "2.5rem", xl: "0" }}>
						{title}
					</Text>
					<Text fontSize="1.5rem" as="i" color={"white"}>
						{oneLine}
					</Text>
					<br />
					<Text
						fontSize="1.1rem"
						fontWeight={400}
						color={"white"}
						pb={{ base: "1.5rem", xl: "0" }}>
						{description}
					</Text>
					<br />
					<Button
						marginInline={{ base: "auto", xl: "0" }}
						colorScheme="pink"
						fontSize="lg"
						alignItems="center"
						justifyContent={"center"}
						width="10rem">
						VIEW EVENT
					</Button>
				</Flex>
			</Stack>
		</Box>
	);
}

export default Card;
