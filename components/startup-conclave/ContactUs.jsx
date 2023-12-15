import { Box, Flex, Text, Link } from "@chakra-ui/react";
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
						href="mailto:services_ecell@smail.iitm.ac.in"
						color="white"
						fontWeight="700">
						services_ecell@smail.iitm.ac.in
					</Link>
				</Flex>
				<Flex justify="center" align="center" my="1rem" color="white">
					<FaPhoneAlt size={30}></FaPhoneAlt>
					<Flex direction="column" justify="center" mx="1rem">
						<Flex direction="row" wrap="wrap" justify="space-between" gap="2rem">
							<Text>
								<b>+91 83607 50866</b> Vaibhav{" "}
							</Text>
							<Text>
								<b>+91  98450 50496</b> Navneet{" "}
							</Text>
							<Text>
								<b>+91  74830 41007</b> Aditya{" "}
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}
