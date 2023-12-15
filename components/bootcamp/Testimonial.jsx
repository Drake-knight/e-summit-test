import { Box, Flex, Text } from "@chakra-ui/react";
import rakesh from "../../public/assets/illustrations/bootcamp/testimonials/rakeshRaushan.jpeg";
import rishab from "../../public/assets/illustrations/bootcamp/testimonials/rishab.jpeg";
import ritesh from "../../public/assets/illustrations/bootcamp/testimonials/ritesh.jpg";
import amod from "../../public/assets/illustrations/bootcamp/testimonials/amod.jpg";
import siddharth from "../../public/assets/illustrations/bootcamp/testimonials/siddharth.jpg";
import hari from "../../public/assets/illustrations/bootcamp/testimonials/hari.jpg";
import yogesh from "../../public/assets/illustrations/bootcamp/testimonials/yogesh.jpg";
import nishant from "../../public/assets/illustrations/bootcamp/testimonials/nishant.jpeg";
import ranjan from "../../public/assets/illustrations/bootcamp/testimonials/ranjan.jpeg";
import mekin from "../../public/assets/illustrations/bootcamp/testimonials/mekin.jpg";
import Image from "next/image";

const imgMap = {
	rakesh: rakesh,
	rishab: rishab,
	ritesh: ritesh,
	amod: amod,
	siddharth: siddharth,
	hari: hari,
	yogesh: yogesh,
	nishant: nishant,
	ranjan: ranjan,
	mekin: mekin,
};

export default function Testimonial({ img, name, desc, text }) {
	return (
		<Box w="100%" minH="100%">
			<Flex
				direction="column"
				justify="center"
				align="center"
				color="white"
				minH="100%"
				minW="100%"
				paddingY="1rem"
				paddingBottom= {(name === "Rakesh Raushan" ? "4rem" : "1rem")}
				paddingX="1rem"
				gap="1rem"
				style={{
					border: "1px solid transparent",
					backgroundOrigin: "border-box",
					minHeight: "100% !important",
					backgroundClip: "content-box, border-box",
					boxShadow: " 2px 1000px 1px rgba(0, 0, 38, 1) inset",
					border: "1px solid transparent",
					borderRadius: "10px",
					backgroundImage:
						"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 255, 0)), linear-gradient(135deg, rgba(13, 58, 255, 1), rgba(237, 37, 78, 1))",
					backgroundOrigin: "border-box",
					backgroundClip: "content-box, border-box",
					boxShadow: " 2px 1000px 1px rgba(0, 0, 38, 1) inset",
					
				}}>
				<Image
					width={200}
					src={imgMap[img]}
					alt={`Image of ${name}`}
					style={{ borderRadius: "10px" }}
				/>
				<Flex direction="column">
					<Text fontWeight="700">{name}</Text>
					<Text>{desc}</Text>
				</Flex>
				<Text>{text}</Text>
			</Flex>
		</Box>
	);
}
