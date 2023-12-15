import { Box, Flex, Text, Link } from "@chakra-ui/react";
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
						href="mailto:eclub@smail.iitm.ac.in"
						color="white"
						fontWeight="700">
						pr_ecell@smail.iitm.ac.in
					</Link>
				</Flex>
				<Flex justify="center" align="center" my="1rem" color="white">
					<FaPhoneAlt size={30}></FaPhoneAlt>
					<Flex direction="column" justify="center" mx="1rem">
						<Text>
							<b>+91 9022346158</b> Arambh{" "}
						</Text>
						<Text>
							<b>+91 70956 52224</b> Rithwik{" "}
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}
