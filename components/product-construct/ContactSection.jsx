import { Box, Stack, Flex, Text, Link } from "@chakra-ui/react";
import Heading from "../bootcamp/Heading";
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
							<b>+91 7976706565</b> Harshal
						</Text>
					</Stack>
				</Flex>
			</Flex>
		</>
	);
}
