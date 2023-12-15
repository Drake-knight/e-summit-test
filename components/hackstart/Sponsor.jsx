import { Text, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import jetbrains from "../../public/assets/illustrations/hackstart/jetbrains.png";
import startuptn from "../../public/assets/illustrations/hackstart/startuptn.png"


const imgMap = {
 jetbrains, startuptn
};

export default function Sponsor({ name, text, img, link }) {
	return (
		<>
			<Flex direction="column" align="center" justify="center" p="3rem" color="white">
				<Flex align="center" justify="center" height="10rem" width={{base:"12rem", md:"16rem"}} mb={{base:"1rem", md:"3rem"}}>
					<Image alt="Sponsor logo" src={imgMap[img]} />
				</Flex>
				<Text
					fontSize="1.5rem"
					fontWeight="700"
					textDecoration="underline"
					textAlign="center">
					<Link href={link}>{name}</Link>
				</Text>
				<Text textAlign="center" fontSize="1rem">
					{text}
				</Text>
			</Flex>
		</>
	);
}
