import { Box, Grid, GridItem, Stack, Icon, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import PastSpeakersCard from "./PastSpeakersCard";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { speakersInfo, speakersInfoMobile } from "../../utils/speakersInfo";

import { Navigation, Pagination, Autoplay } from "swiper";
import { FaArrowRight } from "react-icons/fa";
import { urls } from "../../utils/urls";

function PastSpeakers() {
	const [isLargerThanMobile] = useMediaQuery("(min-width: 450px)");
	const [isLargeLaptop] = useMediaQuery("(min-width: 1330px)");

	// const speakersInfoArray = isLargerThanMobile ? speakersInfo : speakersInfoMobile;

	return (
		<Box
			width="full"
			paddingY={{ base: "4rem", xl: "4rem" }}
			id="past-speakers"
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDir="column"
			height="100vh"
			position="relative"
			paddingX={{ base: "0rem", md: "2rem", xl: "8rem" }}>
			<Text
				fontFamily="Sen"
				fontSize={isLargerThanMobile ? "5rem" : "2.5rem"}
				bgGradient="linear(to-br, brand.light_blue, brand.red)"
				textAlign={{ base: "center", xl: "left" }}
				lineHeight="120%"
				bgClip="text">
				E-SUMMIT 2023 SPEAKERS{" "}
			</Text>
			<Text
				as="a"
				target="_blank"
				href={urls.speakers}
				fontFamily="Sen"
				fontSize={isLargerThanMobile ? "1.5rem" : "1rem"}
				bgGradient="linear(to-br, brand.light_blue, brand.green_blue)"
				opacity="70%"
				fontWeight={700}
				textAlign={{ base: "center", xl: "left" }}
				bgClip="text">
				View All{" "}
				<Icon
					color="white"
					as={FaArrowRight}
					fontSize={isLargerThanMobile ? "1rem" : "0.5rem"}
				/>
			</Text>
			<Grid
				templateColumns={isLargerThanMobile ? "repeat(5,1fr)" : "repeat(1, 1fr)"}
				height="100%"
				width="100%"
				columnGap="8rem">
				{/* <GridItem
					colSpan={isLargerThanMobile ? "2" : "1"}
					height="100%"
					paddingX={isLargerThanMobile ? "0rem" : "1rem"}>
					<VStack
						justifyContent="center"
						height="100%"
						alignItems="flex-start"
						width="100%">
						<Text
							fontFamily="Sen"
							fontSize={isLargerThanMobile ? "5rem" : "3.5rem"}
							bgGradient="linear(to-br, brand.light_blue, brand.red)"
							lineHeight="120%"
							bgClip="text">
							PAST SPEAKERS
						</Text>
						<Text fontSize="1.2rem" lineHeight="150%" color="white">
							With IPOs like Zomato, PayTM, Nykaa, and 40+ unicorns in a single year,
							we are witnessing an inflection point in terms of wealth creation.
							Entrepreneurs have disrupted a multitude of sectors at a fundamental
							level by changing our ways of discovering, producing and consuming.
						</Text>
					</VStack>
				</GridItem> */}
				<GridItem
					colSpan={isLargerThanMobile ? "5" : "1"}
					display="flex"
					justifyContent="center"
					alignItems="center">
					<Box
						width="100%"
						paddingX={isLargerThanMobile ? "2rem" : "0rem"}
						paddingY="2rem"
						display="grid"
						borderRadius="0.5rem"
						position="relative">
						<Swiper
							navigation={true}
							pagination={true}
							// autoplay={true}
							modules={[Pagination, Navigation, Autoplay]}
							spaceBetween={500}
							slidesPerView={1}
							style={{
								padding: isLargerThanMobile ? "4rem" : "1rem",
								width: "100%",
							}}>
							{isLargerThanMobile &&
								speakersInfo.map((speakersArray, index) => {
									return (
										<SwiperSlide key={index}>
											<Grid
												width="100%"
												// bgColor="blue"
												height="100%"
												templateColumns={{
													base: "repeat(1,1fr)",
													md: "repeat(3,1fr)",
												}}
												templateRows={{
													base: "repeat(0,1fr)",
													md: "repeat(2,1fr)",
												}}
												rowGap={isLargerThanMobile ? "2rem" : "4rem"}>
												{speakersArray.map(
													(
														{
															speakerName,
															speakerDesignation,
															speakerCompany,
															speakerImage,
															event,
														},
														index
													) => {
														return (
															<GridItem
																display="flex"
																justifyContent="center"
																alignContent="center"
																key={index}
																colSpan="1">
																<PastSpeakersCard
																	speakerCompany={speakerCompany}
																	speakerName={speakerName}
																	speakerDesignation={
																		speakerDesignation
																	}
																	speakerImage={speakerImage}
																	event={event}
																/>
															</GridItem>
														);
													}
												)}
											</Grid>
										</SwiperSlide>
									);
								})}
							{!isLargerThanMobile &&
								speakersInfoMobile.map(
									(
										{
											speakerName,
											speakerDesignation,
											speakerCompany,
											speakerImage,
											event,
										},
										index
									) => {
										return (
											<SwiperSlide key={index}>
												{/* <Grid
												width="100%"
												// bgColor="blue"
												height="100%"
												templateColumns={{
													base: "repeat(1,1fr)",
													xl: "repeat(3,1fr)",
												}}
												templateRows={{
													base: "repeat(0,1fr)",
													xl: "repeat(2,1fr)",
												}}
												rowGap={isLargerThanMobile ? "2rem" : "4rem"}> */}
												<PastSpeakersCard
													speakerCompany={speakerCompany}
													speakerName={speakerName}
													speakerDesignation={speakerDesignation}
													speakerImage={speakerImage}
													event={event}
												/>
												{/* {speakersArray.map(
													(
														{
															speakerName,
															speakerDesignation,
															speakerCompany,
															speakerImage,
														},
														index
													) => {
														return (
															<GridItem
																display="flex"
																justifyContent="center"
																alignContent="center"
																key={index}
																colSpan="1">
														
															</GridItem>
														);
													}
												)} */}
												{/* </Grid> */}
											</SwiperSlide>
										);
									}
								)}
						</Swiper>
					</Box>
				</GridItem>
			</Grid>
		</Box>
	);
}

export default PastSpeakers;
