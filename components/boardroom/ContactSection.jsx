import { Flex, Text, Link, Stack } from "@chakra-ui/react";
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
						eclub@smail.iitm.ac.in
					</Link>
				</Flex>
				<Flex justify="center" align="center" my="1rem" color="white">
					{/* <FaPhoneAlt size={30}></FaPhoneAlt> */}

					<Flex
						direction={{ base: "column", md: "row" }}
						wrap="wrap"
						justify="space-between"
						gap="2rem">
						<Stack direction={"row"}>
							<FaPhoneAlt size={20}></FaPhoneAlt>
							<Text>
								<b>+91 9888271444</b> Sarayu Kancharla
							</Text>
						</Stack>

						<Stack direction={"row"}>
							<FaPhoneAlt size={20}></FaPhoneAlt>
							<Text>
								<b>+91 9600927472</b> S. Nikhilesh
							</Text>
						</Stack>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}
