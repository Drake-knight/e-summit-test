import { Box, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";

function StatsMarquee() {
	const speed = useBreakpointValue({
		base: 40,
		md: 40,
	});
	const isGradientVisible = useBreakpointValue({
		base: false,
		md: true,
	});
	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			fontFamily="Sen"
			marginY={{ base: "0rem", xl: "10rem" }}
			paddingTop={{ base: "4rem", md: "4rem", xl: "1rem" }}
			paddingBottom={{ base: "4rem", md: "2rem" }}>
			<VStack width="100%" spacing={{ base: "2rem", md: "2rem", "2xl": "3rem" }}>
				<Box
					bgColor="rgba(6,6,46,100%)"
					paddingX={{ base: "1rem", md: "2rem" }}
					paddingY={{ base: "2rem", md: "2.5rem" }}
					width="100%">
					<Marquee
						style={{
							display: "flex",
							alignItems: "baseline",
						}}
						speed={speed}
						gradient={isGradientVisible}
						gradientColor={[6, 6, 46]}
						pauseOnHover={true}>
						<Text
							color="brand.red"
							fontSize={{ base: "2rem", xl: "4rem" }}
							marginInline={{ base: "1rem", xl: "3rem" }}>
							50+
						</Text>
						<Text
							color="white"
							fontSize={{ base: "1rem", xl: "2rem" }}
							marginInline={{ base: "1rem", xl: "3rem" }}>
							SPEAKERS
						</Text>
						<Text
							color="brand.red"
							fontSize={{ base: "2rem", xl: "4rem" }}
							marginInline={{ base: "1rem", xl: "3rem" }}>
							1000+
						</Text>
						<Text
							color="white"
							fontSize={{ base: "1rem", xl: "2rem" }}
							marginInline={{ base: "1rem", xl: "3rem" }}>
							STARTUPS
						</Text>
						<Text
							color="brand.red"
							fontSize={{ base: "2rem", xl: "4rem" }}
							marginInline={{ base: "1rem", xl: "3rem" }}>
							30+
						</Text>
						<Text
							color="white"
							fontSize={{ base: "1rem", xl: "2rem" }}
							marginInline={{ base: "1rem", xl: "3rem" }}>
							INVESTORS
						</Text>
						<Text
							color="brand.red"
							fontSize={{ base: "2rem", xl: "4rem" }}
							marginInline={{ base: "1rem", xl: "3rem" }}>
							60+
						</Text>
						<Text
							color="white"
							fontSize={{ base: "1rem", xl: "2rem" }}
							marginInline={{ base: "1rem", xl: "3rem" }}>
							MENTORS
						</Text>
						<Text
							color="brand.red"
							fontSize={{ base: "2rem", xl: "4rem" }}
							marginInline={{ base: "1rem", xl: "3rem" }}>
							18,000+
						</Text>
						<Text
							color="white"
							fontSize={{ base: "1rem", xl: "2rem" }}
							marginInline={{ base: "1rem", xl: "3rem" }}>
							ATTENDEES
						</Text>
					</Marquee>
				</Box>
			</VStack>
		</Box>
	);
}

export default StatsMarquee;
