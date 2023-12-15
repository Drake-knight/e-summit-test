import { Flex, Box, Text } from "@chakra-ui/react";
import {
	FaTrophy,
	FaBriefcase,
	FaWarehouse,
	FaHandshake,
	FaVideo,
	FaHandHoldingUsd,
	FaHandsHelping,
	FaLightbulb,
	FaCertificate,
	FaLaptopCode,
	FaLaptop,
} from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

const iconSize = 40;

const iconToElementMap = {
	trophy: <FaTrophy size={iconSize}></FaTrophy>,
	certificate: <FaCertificate size={iconSize}></FaCertificate>,
	bulb: <FaLightbulb size={iconSize}></FaLightbulb>,
	webinar: <FaLaptopCode size={iconSize}></FaLaptopCode>,
	intern: <RiUserSettingsFill size={iconSize}></RiUserSettingsFill>,
	handshake: <FaHandshake size={iconSize}></FaHandshake>,

	mentor: <BsFillPersonFill size={iconSize}></BsFillPersonFill>,
	workshops: <FaBriefcase size={iconSize}></FaBriefcase>,
	warehouse: <FaWarehouse size={iconSize}></FaWarehouse>,

	video: <FaVideo size={iconSize}></FaVideo>,
	funds: <FaHandHoldingUsd size={iconSize}></FaHandHoldingUsd>,
	help: <FaHandsHelping size={iconSize}></FaHandsHelping>,
};

export default function WhyParticipateReason({ icon, title, text }) {
	return (
		<>
			<Flex
				direction="column"
				justify="center"
				align="center"
				color="white"
				width={{ base: "100%", md: "30%" }}
				m="1rem"
				p="0.5rem">
				{iconToElementMap[icon]}
				<Text fontSize="1.5rem" fontWeight="700" my="1rem" textAlign="center">
					{title}
				</Text>
				<Text fontSize="1.2rem" textAlign={"center"} mb="1rem">
					{text}
				</Text>
			</Flex>
		</>
	);
}
