import Sponsor from "../product-construct/Sponsor";
import Heading from "../bootcamp/Heading";
import { Flex } from "@chakra-ui/react";

export default function SponsorSection() {
	return (
		<>
			<Flex
				w="100%"
				p="2rem"
				bgColor="bootcamp.dark_blue"
				direction={"column"}
				align="center"
				justify="center">
				<Heading color="light" align="center" label="Partners" />
				<Flex
					direction={{ base: "column", md: "row" }}
					wrap="wrap"
					align="center"
					justify="center">
					<Sponsor
						name="Traya"
						text="Platform partner"
						img="traya"
						link="https://traya.health/"
					/>
				</Flex>
			</Flex>
		</>
	);
}
