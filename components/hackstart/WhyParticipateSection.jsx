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
						text="Total prize pool of INR 50K"></WhyParticipateReason>
					<WhyParticipateReason
						icon="pass"
						title="Special Access E-Summit 2023"
						text="Get special access to complete E-Summit events, talks, workshops and much more!"></WhyParticipateReason>
					<WhyParticipateReason
						icon="certificate"
						title="Official Certificate"
						text="Get Official Certificates from E-Cell IIT Madras for all participants and winners"></WhyParticipateReason>
					<WhyParticipateReason
						icon="fire"
						title="Datalore Access"
						text='All participants will get 2 months free access to "Datalore" by JetBrains.'></WhyParticipateReason>
					<WhyParticipateReason
						icon="experience"
						title="Experience"
						text="Teams would have the opportunity to face real-world scenarios and discover the true potential of data."
					/>
					<WhyParticipateReason
						icon="peoplegrp"
						title="Networking"
						text="Compete with like-minded people and get a chance to expand your network"
					/>
				</Flex>
			</Flex>
		</>
	);
}
