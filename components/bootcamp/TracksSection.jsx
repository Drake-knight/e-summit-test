import { Flex, Box } from "@chakra-ui/react";
import Heading from "./Heading";
import Track from "./Track";

export default function TracksSection() {
	return (
		<>
			<Box id="tracks" w="full" p="2rem" bgColor="bootcamp.dark_blue">
				<Heading align="center" color="light" label="TRACKS"></Heading>
				<Flex
					direction={{ base: "column", md: "row" }}
					marginInline="auto"
					align="center"
					justify="center"
					flexWrap={"wrap"}
					width="80%"
					gap="2rem">
					<Track
						icon="fintech"
						title="Fintech"
						text="With fintech finding its application in aiding companies and bussiness owners to manage their finances efficiently this track aims to promote and exploiting the fintech world"></Track>
					<Track
						icon="web"
						title="Web3.0"
						text="Introducing our newest track for the first time ever which focuses on aiding startups in the domain of AI and Blockchain"
					/>
					<Track
						icon="sustainability"
						title="Energy and Environment"
						text="With usage of technology showcasing its negative effects over time, this track focuses on clean energy and aiding startups working in this space"
					/>
					<Track
						icon="agritech"
						title="Agritech"
						text="This track focuses on making the most usage of technology in agriculture"
					/>
					<Track
						icon="agnostic"
						title="Sector Agnostic"
						text="For Startups operating in sectors other than the ones mentioned
above."
					/>
				</Flex>
			</Box>
		</>
	);
}
