import { AspectRatio, Box, Grid, GridItem, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const aftermoviesInfo = [
	{
		url: (
			<iframe
				width="560"
				height="315"
				src="https://www.youtube-nocookie.com/embed/yFEBqysbz2c?controls=0"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen></iframe>
		),
		title: "E-Summit 2021",
		description:
			"Little moments, big memories. As hard as it was last year, we held up to the task of entertaining you all and delivered. Here's a short throwback to what happened last year during the cornerstone event of 2021.",
		color: "#c9317d",
	},
	{
		url: (
			<iframe
				width="560"
				height="315"
				src="https://www.youtube-nocookie.com/embed/31Z88zZXTDk?controls=0"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen></iframe>
		),
		title: "E-Summit 2020",
		description:
			"Residing in the dusty pages of history, stand a few golden bravehearts who brave the odds and conquer the tides. Nothing moves their will and might. Witness the huge success of E-Summit 2020 in its glorious aftermovie.",
		color: "#d94b2f",
	},
];

function Aftermovies() {
	const [isLargerThanMobile] = useMediaQuery("(min-width: 450px)");

	return (
		<Box
			width="full"
			paddingY={{ base: "4rem", xl: "8rem" }}
			minHeight="100vh"
			id="aftermovies"
			paddingX={isLargerThanMobile ? "8rem" : "1rem"}
			fontFamily="Sen">
			<VStack alignItems="center" width="100%" spacing={{ base: "2rem", md: "4rem" }}>
				<Text
					fontSize={isLargerThanMobile ? "6rem" : "3rem"}
					overflow="clip"
					lineHeight={isLargerThanMobile ? "6rem" : "3rem"}
					height={isLargerThanMobile ? "6rem" : "3rem"}
					fontWeight={500}
					position="relative"
					id="text_container"
					borderRadius="0.5rem">
					<Text
						bgClip="text"
						sx={{
							"#text_container:hover &": {
								top: "0rem",
							},
						}}
						transitionDuration="0.5s    "
						bgGradient="linear(to-br, brand.light_blue, brand.red)"
						as="span"
						position="absolute"
						top="0rem"
						fontFamily="Sen">
						AFTER MOVIES
					</Text>
					<Text as="span" fontFamily="Sen" color="transparent">
						AFTER MOVIES
					</Text>
				</Text>
				<Grid
					width={{ base: "90%", "2xl": "80%" }}
					height="100%"
					templateColumns={isLargerThanMobile ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
					columnGap="10rem"
					rowGap={isLargerThanMobile ? "0rem" : "2rem"}>
					{aftermoviesInfo.map(({ url, title, description, color }, index) => {
						return (
							<GridItem
								bgGradient={`linear(to-br,${color},rgba(6,6,46,100%),rgba(6,6,46,100%),rgba(6,6,46,100%),rgba(6,6,46,100%),rgba(6,6,46,100%),rgba(6,6,46,100%))`}
								paddingY="4rem"
								paddingX={isLargerThanMobile ? "5rem" : "2rem"}
								display="flex"
								flexDir="column"
								justifyContent="center"
								key={index}
								colSpan="1"
								gap="1rem"
								borderRadius="0.5rem"
								bgColor="rgba(6,6,46,100%)">
								<AspectRatio ratio={4 / 3} minW="10%">
									{url}
								</AspectRatio>
								<Text
									color="white"
									fontWeight={600}
									fontSize={{ base: "1.5rem", xl: "2rem" }}>
									{title}
								</Text>
								<Text
									opacity="70%"
									lineHeight="120%"
									color="white"
									fontSize={{ base: "1rem", xl: "1.1rem" }}>
									{description}
								</Text>
							</GridItem>
						);
					})}
				</Grid>
			</VStack>
		</Box>
	);
}

export default Aftermovies;
