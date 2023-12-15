import Heading from "./Heading";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import Mentor from "./Mentor";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper";

export default function MentorsSection() {
	const [isLargerThanMobile] = useMediaQuery("(min-width: 450px)");
	const swiperSlides=(<>
		<SwiperSlide>
			<Mentor
				name="Niket Kumar Phuria"
				linkedin="https://linkedin.com/in/niketphuria"
				img="niket"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Pushpak Teja"
				linkedin="https://linkedin.com/in/pushpakteja-product-manager"
				img="pushpak"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Gaurav Bansal"
				linkedin="https://linkedin.com/in/gauravbansal2"
				img="gaurav"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Rajat Parikh"
				linkedin="https://in.linkedin.com/in/rajat-parikh-0848b488"
				img="rajat"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Narayana Swaroop"
				linkedin="https://linkedin.com/in/narayanaswaroop"
				img="narayana"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Srishti Srivastava"
				linkedin="https://www.linkedin.com/in/srishtisustainabilitystudio/"
				img="srishti"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Amit Ranjan Gupta"
				linkedin="https://linkedin.com/in/amit-ranjan-gupta"
				img="amit"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Pradeep Rathi"
				linkedin="https://linkedin.com/in/pjrathi"
				img="pradeep"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Devraj Shetty"
				linkedin="https://linkedin.com/in/devraj-shetty-0910016"
				img="devraj"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Sharad Ingule"
				linkedin="https://linkedin.com/in/sharadi"
				img="sharad"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Sanjay Prasad"
				linkedin="https://linkedin.com/in/sanjay-prasad-08a2a43"
				img="sanjay"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Ashay Tejwani"
				linkedin="https://linkedin.com/in/ashaytejwani"
				img="ashay"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Madhav Sharda"
				linkedin="https://linkedin.com/in/madhav-sharda-295a21129"
				img="madhav"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Devansh Lakhani"
				linkedin="https://linkedin.com/in/devanshlakhani-financial-services"
				img="devansh"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Arjun Sharma"
				linkedin="https://linkedin.com/in/83arjun"
				img="arjun"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Akshay Bhatla"
				linkedin="https://linkedin.com/in/akshaybhatla"
				img="akshay"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Avnish Sabharwal"
				linkedin="https://linkedin.com/in/avnishsabharwal"
				img="avnish"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Sarvesh Goorha"
				linkedin="https://linkedin.com/in/sarvesh-k-goorha-mentor"
				img="sarvesh"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Gautam Mahesh"
				linkedin="https://linkedin.com/in/gautammahesh88"
				img="gautam"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Bhaskar Roy"
				linkedin="https://www.linkedin.com/in/roybhaskar/"
				img="bhaskar"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Abhishek Gupta"
				linkedin="https://www.linkedin.com/in/abhishekguptas/"
				img="abhishek"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Manish Jain"
				linkedin="https://www.linkedin.com/in/manish-jain-7a06b95/"
				img="manish"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<Mentor
				name="Rahul Ahuja"
				linkedin="https://www.linkedin.com/in/rahulahujaca//"
				img="rahul"
			/>
		</SwiperSlide>
	</>);
	return (
		<>
			<Flex
				w="100%"
				p="2rem"
				bgColor="bootcamp.dark_blue"
				align="center"
				justify="center"
				direction="column">
				<Heading align="center" color="light" label="Mentors" />
				<Box
					width={{ base: "100vw", xl: "80vw" }}
					paddingY="2rem"
					display="flex"
					borderRadius="0.5rem"
					position="relative">
					<Swiper
						navigation={true}
						pagination={true}
						style={{ paddingInline: "4rem", paddingBottom: "4rem" }}
						modules={[Pagination, Navigation]}
						spaceBetween={20}
						slidesPerView={isLargerThanMobile ? 3 : 1}>
						{swiperSlides}
					</Swiper>
				</Box>
			</Flex>
		</>
	);
}
