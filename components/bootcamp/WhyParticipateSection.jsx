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
						title="Prize Money"
						text="Total prize pool of 6.25 lakhs"></WhyParticipateReason>
					<WhyParticipateReason
						icon="mentor"
						title="Mentorship"
						text="Sector-specific mentoring by industry experts"></WhyParticipateReason>
					<WhyParticipateReason
						icon="workshops"
						title="Workshops"
						text="Hands-On training on key facets of entrepeneurship"
					/>
					<WhyParticipateReason
						icon="warehouse"
						title="Startup Services"
						text="Top performers will get legal and technical assistance"
					/>
					<WhyParticipateReason
						icon="handshake"
						title="Networking"
						text="A chance to be a part of the group comprising Venture Capitalists, Angel Investors, Entrepeneurs, and fellow teams"
					/>
					<WhyParticipateReason
						icon="video"
						title="Media Coverage"
						text="Oppurtunity for promising startups to get featured on popular media platforms and E-Cell IITM handles and newsletters."
					/>
					<WhyParticipateReason
						icon="funds"
						title="Fundraising Opportunities"
						text="Top three teams will receive free passes to external fundraising rounds hosted by VCs. Teams may also receive funding opportunities directly from the Finale Pitch."
					/>
					<WhyParticipateReason
						icon="help"
						title="Incubation Opportunities"
						text="Free incubation opportunity to top performing startups of the cohort, and access to pitching in  incubator summit of E-Summit"
					/>
				</Flex>
			</Flex>
		</>
	);
}
