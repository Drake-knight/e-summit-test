import Heading from "./Heading";
import PastTeam from "./PastTeam";
import { Box, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper";

export default function PastTeamsSection() {
	return (
		<Box w={{ base: "100%", md: "50%" }}>
			<Flex
				p="2rem"
				align="center"
				justify="center"
				direction="column"
				bgColor="bootcamp.dark_blue"
				w="100%">
				<Heading align="center" color="light" label="Past Teams"></Heading>
				<Box
					width={{ base: "100%", xl: "80%" }}
					paddingY="2rem"
					display="flex"
					borderRadius="0.5rem"
					position="relative">
					<Swiper
						navigation={true}
						pagination={true}
						style={{ paddingInline: "4rem", paddingBottom: "4rem" }}
						modules={[Pagination, Navigation]}
						spaceBetween={70}
						slidesPerView={1}>
						<SwiperSlide>
							<PastTeam
								text={
									<span>
										<strong>UrbanMatrix</strong>
										builds industry-grade drones and provides aerial solutions
										that elevate efficiency and profitability for the
										industries. Its ultimate aim is to make drone-integration
										easier, safer and cheaper for all industries and
										organizations.
									</span>
								}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<PastTeam
								text="Tech Table is an online platform that facilitates students to get
                                    internships and connects them to the startup ecosystem. It also
                                    provides an array of startup services, from App development and
                                    Animations to Interactive Websites."
							/>
						</SwiperSlide>
						<SwiperSlide>
							<PastTeam
								text={
									<span>
										<strong>EdarLabs</strong> is building a 21st century
										pedagogy tool that enables students to explore, experiment
										and learn with AR, and VR; assisted by AI. They offer
										experimental learning modules which are highly accessible,
										easy to use and can be deployed on any platform.
									</span>
								}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<PastTeam
								text={
									<span>
										<strong>Orbuculum</strong> is a cutting-edge healthcare
										startup that is refining its AI based system that predicts
										diseases using genome-based data to be used as a disease
										prediction model and screening tool by doctors.
									</span>
								}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<PastTeam
								text={
									<span>
										<strong>DbyT Dynamics</strong> is a design and service
										organization affiliated with the EV ecosystem. They engage
										in developing innovative products and building a tech-based
										platform for mobility in the service sector, focusing on
										Agri-Perishables and Micro Logistics.
									</span>
								}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<PastTeam
								text={
									<span>
										<strong>DbyT Dynamics</strong> is a design and service
										organization affiliated with the EV ecosystem. They engage
										in developing innovative products and building a tech-based
										platform for mobility in the service sector, focusing on
										Agri-Perishables and Micro Logistics.
									</span>
								}
							/>
						</SwiperSlide>
					</Swiper>
				</Box>
			</Flex>
		</Box>
	);
}
