import { Box, Stack, Flex, Text, Link } from "@chakra-ui/react";
import Heading from "./Heading";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactSection() {
	return (
		<>
			<Flex
				id="contact"
				direction="column"
				p="2rem"
				justify="center"
				align="center"
				bgColor="bootcamp.dark_blue">
				<Heading align="center" label="Contact Us" color="light"></Heading>
				<Flex justify="center" align="center" my="1rem">
					<FaEnvelope size={30} color="white" fontWeight="700"></FaEnvelope>
					<Link
						mx="1rem"
						href="mailto:events_ecell@smail.iitm.ac.in"
						color="white"
						fontWeight="700">
						events_ecell@smail.iitm.ac.in
					</Link>
				</Flex>
				{/* <Flex justify="center" align="center" my="1rem" color="white"> */}
				<Flex
					my={{ base: 0, md: "1rem" }}
					color="white"
					direction={{ base: "column", md: "row" }}
					wrap="wrap"
					justify="space-between"
					gap={{ base: "0rem", md: "2rem" }}>
					<Stack direction={"row"}>
						<FaPhoneAlt size={15}></FaPhoneAlt>
						<Text>
							<b>+91 7489302243</b> Anuj
						</Text>
					</Stack>

					<Stack direction={"row"}>
						<FaPhoneAlt size={15}></FaPhoneAlt>
						<Text>
							<b>+91 9667223484</b> Sarabjeet
						</Text>
					</Stack>
				</Flex>
				<Flex
					color="white"
					direction={{ base: "column", md: "row" }}
					wrap="wrap"
					justify="space-between"
					gap={{ base: "0rem", md: "2rem" }}>
					<Stack direction={"row"}>
						<FaPhoneAlt size={15}></FaPhoneAlt>
						<Text>
							<b>+91 8830338510</b> Pratik
						</Text>
					</Stack>

					<Stack direction={"row"}>
						<FaPhoneAlt size={15}></FaPhoneAlt>
						<Text>
							<b>+91 9079358044</b> Chitranshu
						</Text>
					</Stack>
					{/* </Flex> */}
				</Flex>
			</Flex>
		</>
	);
}
