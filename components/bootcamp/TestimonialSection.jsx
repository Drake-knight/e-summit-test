import Heading from "./Heading";
import Testimonial from "./Testimonial";
import { Box, Flex, AspectRatio, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper";

export default function TestimonialSection() {
	const style = useBreakpointValue(
		{
			base: {},
			md: {
				color: "white",
				wrap: "wrap",
				minW: "300px",
				padding: "1rem",
				gap: "1rem",
			},
		},
		{
			fallback: "md",
		}
	);
	return (
		<>
			<Flex
				direction="column"
				align="center"
				justify="center"
				bgColor="bootcamp.dark_blue"
				width="100%"
				p="2rem">
				<Heading align="center" color="light" label="Testimonials" />
				<Flex w="100%" gap="3rem" wrap="wrap" justify="center">
					<Box
						width={{ base: "100vw", md: "40%" }}
						paddingY="2rem"
						display="flex"
						borderRadius="0.5rem"
						height="100%"
						position="relative"
						{...style}
						style={{
							backdropFilter: "blur(24px) saturate(180%)",
							backgroundColor: "rgba(8, 8, 74, 0.75)",
							borderRadius: "12px",
							border: "1px solid rgba(255, 255, 255, 0.125)",
							paddingTop: "2rem"
						}}>
						<Swiper
							navigation={true}
							pagination={true}
							style={{ paddingInline: "4rem", paddingBottom: "4rem" }}
							modules={[Pagination, Navigation]}
							spaceBetween={100}
							slidesPerView={1}>
							<SwiperSlide style={{ width: "100%" }}>
								<Testimonial
									name="Rakesh Raushan"
									desc="Founder, Tech Table"
									text="We participated in Bootcamp 2019. Bootcamp is the best opportunity to validate your idea and get connected to a mentor who can guide you in the entrepeneurial world."
									img="rakesh"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Testimonial
									name="Rishab Verma"
									img="rishab"
									desc="Founder, UrbanMatrix"
									text="The mentorship provided by 
                        the Bootcamp team and
                        mentors were really great.
                        The feedback we got, really
                        helped us to see where we
                        are doing wrong, and where
                        we should be heading.
                        Overall it acted as a guiding
                        hand for us."
								/>
							</SwiperSlide>
						</Swiper>
					</Box>
					<Box
						align="center"
						justify="center"
						position="relative"
						paddingY="2rem"
						w={{ base: "100vw", md: "40%" }}
						display="flex"
						direction="column"
						color="white"
						wrap="wrap"
						minW="300px"
						padding="1rem"
						gap="1rem"
						style={{
							backdropFilter: "blur(24px) saturate(180%)",
							backgroundColor: "rgba(8, 8, 74, 0.75)",
							borderRadius: "12px",
							border: "1px solid rgba(255, 255, 255, 0.125)",
						}}>
						<Swiper
							navigation={true}
							pagination={true}
							style={{ paddingInline: "4rem", paddingBottom: "4rem" }}
							modules={[Pagination, Navigation]}
							spaceBetween={100}
							slidesPerView={1}>
							<SwiperSlide>
								<Flex align="center" justify="center" w="100%" h="100%">
									<AspectRatio
										ratio={560 / 315}
										w={{ base: "320px", md: "100%" }}
										maxW="560px">
										<iframe
											src="https://www.youtube.com/embed/5LOPpTaTKUE"
											title="YouTube video player"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen
											style={{ width: "100%" }}></iframe>
									</AspectRatio>
								</Flex>
							</SwiperSlide>
							<SwiperSlide>
								<Flex align="center" justify="center" w="100%" h="100%">
									<AspectRatio ratio={560 / 315} w="100%" maxW="560px">
										<iframe
											src="https://www.youtube.com/embed/ucY50wKpJpA"
											title="YouTube video player"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen></iframe>
									</AspectRatio>
								</Flex>
							</SwiperSlide>
							<SwiperSlide>
								<Flex align="center" justify="center" w="100%" h="100%">
									<AspectRatio ratio={560 / 315} w="100%" maxW="560px">
										<iframe
											src="https://www.youtube.com/embed/gxTzMWmwrMU"
											title="YouTube video player"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen></iframe>
									</AspectRatio>
								</Flex>
							</SwiperSlide>
							<SwiperSlide>
								<Flex align="center" justify="center" minW="100%" minH="100%">
									<AspectRatio ratio={560 / 315} w="100%" maxW="560px">
										<iframe
											src="https://www.youtube.com/embed/djRM4YRs_YE"
											title="YouTube video player"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen></iframe>
									</AspectRatio>
								</Flex>
							</SwiperSlide>
							<SwiperSlide>
								<Flex align="center" justify="center" w="100%" h="100%">
									<AspectRatio ratio={560 / 315} w="100%" maxW="560px">
										<iframe
											src="https://www.youtube.com/embed/KNdjbW-iLoU"
											title="YouTube video player"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen></iframe>
									</AspectRatio>
								</Flex>
							</SwiperSlide>
						</Swiper>
					</Box>
				</Flex>
			</Flex>
		</>
	);
}
