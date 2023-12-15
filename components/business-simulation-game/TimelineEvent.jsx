import { Flex, Text } from "@chakra-ui/react";
import { FaRocket, FaStopwatch, FaUserNinja, FaUserGraduate, FaMedal, FaChalkboardTeacher } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { AiFillSound } from "react-icons/ai";


const iconSize = 25;
const iconToElementMap = {
	rocket: <FaRocket size={iconSize} />,
	stopwatch: <FaStopwatch size={iconSize} />,
	register: <GoChecklist size={iconSize} />,
	announce: <AiFillSound size={iconSize} />,

	ninja: <FaUserNinja size={iconSize} />,

	graduate: <FaUserGraduate size={iconSize} />,
	medal: <FaMedal size={iconSize} />,
	workshop: <FaChalkboardTeacher size={iconSize} />
};

export default function TimelineEvent({ icon, text, date }) {
	return (
		<>
			<Flex color="white" align="center" my="2rem">
				<Flex
					align="center"
					justify="center"
					color="white"
					minW={2 * iconSize}
					minH={2 * iconSize}
					borderRadius={iconSize}
					style={{
						backdropFilter: "blur(24px) saturate(180%)",
						backgroundColor: "rgba(8, 8, 74, 0.75)",
					}}
					>
					{iconToElementMap[icon]}
				</Flex>
				<Flex direction="column" mx="2rem">
					<Text fontSize="1.4rem" fontWeight={700}>
						{text}
					</Text>
					<Text fontSize="1rem" fontWeight={400}>
						{date}
					</Text>
				</Flex>
			</Flex>
		</>
	);
}
