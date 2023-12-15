import { Flex, Text } from "@chakra-ui/react";
import { FaTrophy, FaMoneyBillWave, FaUserGraduate } from "react-icons/fa";
import { GiChecklist } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { ImFire } from "react-icons/im";
import { TbCertificate } from "react-icons/tb";

const iconSize = 40;

const iconToElementMap = {
	trophy: <FaTrophy size={iconSize}></FaTrophy>,
	peoplegrp: <HiUserGroup size={iconSize}></HiUserGroup>,
	experience: <FaUserGraduate size={iconSize}></FaUserGraduate>,
	decision: <GiChecklist size={iconSize}></GiChecklist>,
	certificate: <TbCertificate size={iconSize}></TbCertificate>,
	pass: <FaMoneyBillWave size={iconSize}></FaMoneyBillWave>,
	fire: <ImFire size={iconSize}></ImFire>
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
