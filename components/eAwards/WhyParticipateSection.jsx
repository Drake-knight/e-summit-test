import { Flex } from "@chakra-ui/react";
import Heading from "./Heading";
import WhyParticipateReason from "./WhyParticipateReason";

export default function WhyParticipateSection() {
	return (
		<>
			<Flex
				id="perks"
				direction="column"
				bgColor="bootcamp.dark_blue"
				width="full"
				justify="center"
				p="2rem">
				<Heading align="center" color="light" label="Why participate?"></Heading>
				<Flex
					direction={{ base: "column", md: "row" }}
					align="center"
					justify="center"
					wrap="wrap">
					<WhyParticipateReason
						icon="trophy"
						title="Prizes"
						text="Title of 'Best Entrepeneur in IITM' along with trophy and visibility on the next E-Summit page as E-Awards winner"></WhyParticipateReason>
					<WhyParticipateReason
						icon="mentor"
						title="Mentorship"
						text="Mentorship from the esteemed panel of judges"></WhyParticipateReason>
					<WhyParticipateReason
						icon="certificate"
						title="Certificates"
						text="Official Certificates from E-Cell IIT Madras for all participants and winners"
					/>
					<WhyParticipateReason
						icon="instagram"
						title="Shoutouts"
						text="Special post and mentions on various E-Cell IIT M&#39;s social media handles"
					/>
				</Flex>
			</Flex>
		</>
	);
}
