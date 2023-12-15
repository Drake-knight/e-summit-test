import { Box, Card, keyframes, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useSwiperSlide } from "swiper/react";
import Abhay from "../../public/assets/speakers/Abhay.png";
import Tarun from "../../public/assets/speakers/Tarun.png";
import Deepit from "../../public/assets/speakers/Deepit.png";
import Dhiraj from "../../public/assets/speakers/Dhiraj.png";
import Arjun from "../../public/assets/speakers/Arjun.png";
import Rajeev from "../../public/assets/speakers/Rajeev.png";
import Sameer from "../../public/assets/speakers/Sameer.png";
import Vikram from "../../public/assets/speakers/Vikram.png";
import Himeesh from "../../public/assets/speakers/Himeesh.png";
import Shruti from "../../public/assets/speakers/Shruti.png";
import Saptarshi from "../../public/assets/speakers/Saptarshi.png";
import Shravan from "../../public/assets/speakers/Shravan.png";
import Ashutosh from "../../public/assets/speakers/Ashutosh.png";
import Sauvik from "../../public/assets/speakers/Sauvik.png";
import Devinder from "../../public/assets/speakers/Devinder.png";
import Kapil from "../../public/assets/speakers/Kapil.png";
import Gunjan from "../../public/assets/speakers/Gunjan.png";
import Danish from "../../public/assets/speakers/Danish.png";

const speakerImageMap = {
	Abhay,
	Tarun,
	Deepit,
	Dhiraj,
	Arjun,
	Rajeev,
	Sameer,
	Vikram,
	Himeesh,
	Shruti,
	Saptarshi,
	Shravan,
	Ashutosh,
	Sauvik,
	Devinder,
	Kapil,
	Gunjan,
	Danish,
};

const fadeIn = keyframes`
0% {
		background-position: 100% 50%;
	}
100% {
		background-position: 0% 50%;
	}
`;

const animation = `${fadeIn} 1s ease-in-out`;

function PastSpeakersCard({
	speakerName,
	speakerDesignation,
	speakerCompany,
	speakerImage,
	event,
}) {
	const cardColor = "#ed254e";
	const swiperSlide = useSwiperSlide();
	return (
		<Box
			width="70%"
			// height="20rem"
			fontFamily="Sen"
			paddingLeft="0.15rem"
			marginInline="auto"
			marginBottom="2rem"
			borderTopLeftRadius="0.5rem"
			paddingTop="0.15rem"
			style={{
				background: `linear-gradient(-45deg,#000026,#000026,#000026,${cardColor})`,
				backgroundSize: "200% 200%",
				backgroundPosition: "0% 50%",
			}}
			animation={swiperSlide.isActive && animation}>
			<VStack
				bgColor="brand.dark_blue"
				borderTopLeftRadius="0.4rem"
				width="100%"
				height="100%"
				paddingLeft="0.5rem"
				paddingTop="0.5rem"
				alignItems="flex-start"
				spacing="1rem">
				<Box
					width="100%"
					display="flex"
					flexDirection="row"
					justifyContent={{ base: "center", md: "start" }}>
					<Image src={speakerImageMap[speakerImage]} alt="speaker image" width="100%" />
				</Box>
				<VStack
					alignSelf={{ base: "center", md: "start" }}
					alignItems={{ base: "center", md: "flex-start" }}
					spacing="0.1rem">
					<Text color="white" fontSize={"1.2rem"}>
						{speakerName}
					</Text>
					<Text color="white" textAlign={{ base: "center", md: "left" }}>
						<span style={{ opacity: "60%" }}>{speakerDesignation}</span>{" "}
						{speakerCompany && (
							<Text as="span" color="brand.red" fontWeight={700}>
								|
							</Text>
						)}{" "}
						<span style={{ opacity: "60%" }}>{speakerCompany}</span>
					</Text>
				</VStack>
			</VStack>
		</Box>
	);
}

export default PastSpeakersCard;
