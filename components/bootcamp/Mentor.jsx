import { Flex, Text, Box, useDisclosure, LinkOverlay } from "@chakra-ui/react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import niket from "../../public/assets/illustrations/bootcamp/mentors/niket.jpg";
import pushpak from "../../public/assets/illustrations/bootcamp/mentors/pushpak.jpeg";
import gaurav from "../../public/assets/illustrations/bootcamp/mentors/gaurav.jpeg";
import narayana from "../../public/assets/illustrations/bootcamp/mentors/narayana.jpeg";
import amit from "../../public/assets/illustrations/bootcamp/mentors/amit.jpeg";
import pradeep from "../../public/assets/illustrations/bootcamp/mentors/pradeep.jpeg";
import devraj from "../../public/assets/illustrations/bootcamp/mentors/devraj.jpeg";
import sharad from "../../public/assets/illustrations/bootcamp/mentors/sharad.jpeg";
import sanjay from "../../public/assets/illustrations/bootcamp/mentors/sanjay.jpeg";
import ashay from "../../public/assets/illustrations/bootcamp/mentors/ashay.jpg";
import madhav from "../../public/assets/illustrations/bootcamp/mentors/madhav.jpeg";
import devansh from "../../public/assets/illustrations/bootcamp/mentors/devansh.jpeg";
import arjun from "../../public/assets/illustrations/bootcamp/mentors/arjun.jpeg";
import akshay from "../../public/assets/illustrations/bootcamp/mentors/akshay.png";
import avnish from "../../public/assets/illustrations/bootcamp/mentors/avnish.jpeg";
import sarvesh from "../../public/assets/illustrations/bootcamp/mentors/sarvesh.jpeg";
import gautam from "../../public/assets/illustrations/bootcamp/mentors/gautam.jpeg";
import abhishek from "../../public/assets/illustrations/bootcamp/mentors/abhishek.jpg";
import rahul from "../../public/assets/illustrations/bootcamp/mentors/rahul.jpg";
import manish from "../../public/assets/illustrations/bootcamp/mentors/manish.jpg";
import bhaskar from "../../public/assets/illustrations/bootcamp/mentors/bhaskar.jpg";
import rajat from "../../public/assets/illustrations/bootcamp/mentors/rajat.jpg";
import srishti from "../../public/assets/illustrations/bootcamp/mentors/srishti.jpg";

const imgMap = {
	niket: niket,
	//can't find image for Jawahar Babu
	pushpak: pushpak,
	gaurav: gaurav,
	narayana: narayana,
	amit: amit,
	pradeep: pradeep,
	devraj: devraj,
	sharad: sharad,
	sanjay: sanjay,
	ashay: ashay,
	madhav: madhav,
	devansh: devansh,
	arjun: arjun,
	akshay: akshay,
	avnish: avnish,
	sarvesh: sarvesh,
	gautam: gautam,
    abhishek: abhishek,
    manish: manish,
    rahul: rahul,
    bhaskar: bhaskar,
	rajat: rajat,
	srishti: srishti
};

export default function Mentor({ name, img, linkedin }) {
	return (
		<>
			<Flex w="100%" h="100%" align="center" justify="center">
				<Flex
					borderRadius="10px"
					overflow="hidden"
					pos="relative"
					direction="column"
					align="center"
					justify="center"
					width="15rem"
					height="100%"
					style={{
						border: "1px solid transparent",
						backgroundOrigin: "border-box",
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
					<Flex pos="relative" w="100%" objectFit="cover">
						<Image
							className="object-fit-cover"
							width={240}
							src={imgMap[img]}
							alt="Mentor photo"
						/>
						<Flex
							pos="absolute"
							top="0"
							right="0"
							height="100%"
							width="100%"
							transition="opacity 200ms"
							_hover={{
								opacity: "1",
							}}
							opacity="0"
							justify="center"
							align="center">
							<Flex
								w="100%"
								h="100%"
								align="center"
								justify="center"
								bgColor="rgba(0,0,0,0.5)">
								<LinkOverlay href={linkedin} opacity="1" color="white">
									<FaLinkedin size={40}></FaLinkedin>
								</LinkOverlay>
							</Flex>
						</Flex>
					</Flex>
					<Flex
						z="5"
						w="100%"
						p="0.5rem"
						textAlign="center"
						align="center"
						justify="center"
						bgColor="white"
						flexGrow={1}
						style={{
							backdropFilter: "blur(24px) saturate(180%)",
							backgroundColor: "rgba(8, 8, 74, 0.75)",
						}}>
						<Text fontSize="1rem" color="white">
							{name}
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}
