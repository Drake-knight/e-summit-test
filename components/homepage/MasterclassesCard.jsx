import { Box, Button, HStack, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import masterclasses_homepage from "../../public/assets/illustrations/masterclasses_homepage.png";
import { urls } from "../../utils/urls";

function Masterclasses() {
	const [isLargerThanMobile] = useMediaQuery("(min-width: 450px)");
	const [isLargeLaptop] = useMediaQuery("(min-width: 1330px)");

	return (
		<Box
			width="100%"
			minHeight="70vh"
			display="flex"
			justifyContent="center"
			marginTop={isLargerThanMobile ? "0rem" : "15rem"}>
			<Box
				marginInline="auto"
				display="flex"
				justifyContent="center"
				alignItems="center"
				width={isLargerThanMobile ? "60%" : "90vw"}
				position="relative">
				<HStack
					id="tilted_image_container"
					width="100%"
					opacity="100%"
					bgGradient="linear(to-br, brand.light_blue,brand.light_blue,brand.light_blue,brand.red,brand.red)"
					borderRadius="0.5rem"
					padding={"1rem"}
					height={isLargerThanMobile ? "45vh" : "100%"}
					justifyContent="space-evenly"
					flexDirection={isLargerThanMobile ? "row" : "column-reverse"}
					paddingInline={isLargerThanMobile ? "2rem" : "1rem"}
					zIndex={"10"}>
					<VStack
						width={isLargerThanMobile ? "45%" : "80%"}
						alignItems="start"
						spacing="2rem">
						<Text>
							<Text
								as="span"
								color="white"
								fontFamily="Sen"
								fontSize={
									isLargeLaptop ? "3rem" : isLargerThanMobile ? "2rem" : "2rem"
								}
								fontWeight="bold"
								lineHeight="130%">
								Be part of the Change
								<Text as="span">!</Text>
							</Text>
							<br />
							<Text fontFamily="Sen" as="span" color="white">
								{" "}
								Assemble at IIT Madras for E-Summit 2023 from{" "}
								<strong>7th to 9th April 2023</strong>. Get access to{" "}
								<strong>
									highlight sessions, masterclasses, Networking Arenas
								</strong>
								and <strong>much more</strong>. Buy your pass now to get a holistic
								experience of E-Summit ‘23 like never before!
							</Text>
						</Text>
						<Button as="a" href={urls.passesPage} target="_blank" fontFamily="Sen">
							Grab now!
						</Button>
					</VStack>
					<Box
						id="tilted_image"
						width={isLargerThanMobile ? "40%" : "60%"}
						transform={"rotate(-4deg) translateY(-3rem)"}
						marginTop="0px"
						sx={{
							"#tilted_image_container:hover &": {
								transform: "rotate(0deg) scale(105%)",
							},
						}}
						transition="ease-in-out"
						transitionDuration="0.1s">
						<Image
							alt="about image"
							src={masterclasses_homepage}
							style={{ borderRadius: "0.5rem" }}
							placeholder="blur"
						/>
					</Box>
				</HStack>
			</Box>
		</Box>
	);
}

export default Masterclasses;
