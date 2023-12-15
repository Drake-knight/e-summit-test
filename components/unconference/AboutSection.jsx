import { Flex, Box, Text } from "@chakra-ui/react";
import Heading from "./Heading";

export default function AboutSection() {
	return (
		<>
			<Flex
				id="about"
				direction="column"
				align={{ base: "center", md: "flex-start" }}
				textAlign={{ base: "center", md: "left" }}
				justify="center"
				bgColor="bootcamp.dark_blue"
				padding={{ base: "2rem", md: "4rem" }}>
				<Box
					m="1rem"
					p="2rem"
					minH="100%"
					style={{
						border: "1px solid transparent",
						backgroundOrigin: "border-box",
						backgroundClip: "content-box, border-box",
						boxShadow: " 2px 1000px 1px rgba(0, 0, 38, 1) inset",
						border: "1px solid transparent",
						borderRadius: "10px",
						backgroundImage:
							"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 255, 0)), linear-gradient(135deg, rgba(13, 58, 255, 1), rgba(237, 37, 78, 1))",
						backgroundOrigin: "border-box",
						backgroundClip: "content-box, border-box",
						boxShadow: " 2px 1000px 1px rgba(0, 0, 38, 1) inset",
					}}>
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="What is Unconference?"></Heading>
					<Text color="white" fontSize="1.2rem" textAlign={"center"}>
						At E-Summit, turning Ideas into possibilities is our biggest strength.
						Presenting 7th edition of Unconference, where the brightest minds across the
						country work on real-time challenges that address not the biggest problems
						but the ones that matter. Unconference is aimed at building the creative and
						business mindset of students all over the country. Unconference strives to
						create ripples of imagination in a world full of constants. In Unconference,
						participants are tested on their problem-solving ability, business acumen,
						cultural insight, communication skills, and teamwork within a limited time
						period. Students put their thinking caps on and present out-of-the-box
						solutions for real challenges faced by start-ups.
					</Text>
				</Box>
				{/* <Box
					p="2rem"
					m="1rem"
					minH="100%"
					style={{
						border: "1px solid transparent",
						backgroundOrigin: "border-box",
						backgroundClip: "content-box, border-box",
						boxShadow: " 2px 1000px 1px rgba(0, 0, 38, 1) inset",
						border: "1px solid transparent",
						borderRadius: "10px",
						backgroundImage:
							"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 255, 0)), linear-gradient(135deg, rgba(13, 58, 255, 1), rgba(237, 37, 78, 1))",
						backgroundOrigin: "border-box",
						backgroundClip: "content-box, border-box",
						boxShadow: " 2px 1000px 1px rgba(0, 0, 38, 1) inset",
					}}>
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="Our Vision"></Heading>
					<Text color="white" fontSize="1.2rem" textAlign={"center"}>
						Problems are in every sector but the solution is what matters. Unconference
						is where Ideas turn into possibilities. With case studies along three
						tracks, we thrive to challenge young talent to feel the heat of real-world
						Industry problems and compete head-to-head to bring a change in the
						ecosystem.
					</Text>
				</Box> */}
			</Flex>
		</>
	);
}
