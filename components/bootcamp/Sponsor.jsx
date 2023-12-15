import { Text, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import startupBuddy from "../../public/assets/illustrations/bootcamp/sponsors/startupBuddy.jpeg";
import campusFund from "../../public/assets/illustrations/bootcamp/sponsors/campusFund.png";
import omidyar from "../../public/assets/illustrations/bootcamp/sponsors/omidyar.jpeg";
import nsrcel from "../../public/assets/illustrations/bootcamp/sponsors/nsrcel.jpeg";
import deshpande from "../../public/assets/illustrations/bootcamp/sponsors/deshpande.png";
import wadhwani from "../../public/assets/illustrations/bootcamp/sponsors/wadhwani.png";
import chennaiAngels from "../../public/assets/illustrations/bootcamp/sponsors/chennaiAngels.jpeg";
import chennaiWeb3 from "../../public/assets/illustrations/bootcamp/sponsors/chennaiWeb3.png";
import sidbi from "../../public/assets/illustrations/bootcamp/sponsors/sidbi.png";
import itc from "../../public/assets/illustrations/bootcamp/sponsors/itc.png";

const imgMap = {
	startupBuddy: startupBuddy,
	campusFund: campusFund,
	omidyar: omidyar,
	nsrcel: nsrcel,
	deshpande: deshpande,
	wadhwani: wadhwani,
	chennaiAngels: chennaiAngels,
	chennaiWeb3: chennaiWeb3,
	sidbi: sidbi,
	itc: itc,
};

export default function Sponsor({ name, text, img, link }) {
	return (
		<>
			<Flex direction="column" align="center" justify="center" p="2rem" color="white">
				<Flex align="center" justify="center" height="10rem" width="10rem" mb="1rem">
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
