import { Flex, Box, Text } from "@chakra-ui/react";

import Heading from "./Heading";

export default function AboutSection() {
	return (
		<>
			<Flex
				id="about"
				direction={{ base: "column", md: "row" }}
				align={{ base: "center", md: "flex-start" }}
				textAlign={{ base: "center", md: "left" }}
				justify="center"
				bgColor="bootcamp.dark_blue"
				padding={{ base: "2rem", md: "4rem" }}>
				<Box padding="2rem" width={{ base: "100%", md: "90%" }}>
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="What is the E-thletics?"></Heading>
					<Text color="white" fontSize="1.2rem" mb="3rem" align={"center"}>
						E-thletics is a multi-round marathon that walks a player through each step
						of building a company or a product. Every round puts a different
						entrepreneurial ability to the test - from idea generation, analytical
						thinking to critical management - we do it all here. Take back home an
						experience of building something of your own. In the midst of extreme
						competitive pressure, race against the clock while remaining steadfast. Put
						your perseverance and patience to the test and register today.
					</Text>
				</Box>
			</Flex>
		</>
	);
}
