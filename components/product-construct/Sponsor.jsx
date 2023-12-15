import { Text, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import traya from "../../public/assets/product-construct/traya.jpg";

export default function Sponsor({ name, text, link }) {
	return (
		<>
			<Flex direction="column" align="center" justify="center" p="2rem" color="white">
				<Flex align="center" justify="center" height="10rem" width="10rem" mb="1rem">
					<Image alt="Sponsor logo" src={traya} />
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
