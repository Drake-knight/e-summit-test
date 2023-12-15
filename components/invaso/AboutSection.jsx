import { Flex, Box, Text } from "@chakra-ui/react";
import Heading from "./Heading";

export default function AboutSection() {
	return (
		<>
			<Flex
				id="about"
				direction={{ base: "column", md: "row" }}
				align={{"base": "center", "md":"flex-start"}}
				textAlign={{"base": "center", "md": "left"}}
				justify="center"
				bgColor="bootcamp.dark_blue"
				padding={{ base: "2rem", md: "4rem" }}>
				<Box padding="2rem">
					<Heading align={{"base":"center", "md":"left"}} color="light" label="About Invaso"></Heading>
					<Text color="white" fontSize="1.2rem" mb="2rem">
					Are you tired of inflation eroding the value of your hard-earned money? Simply earning isn&apos;t enough anymore, you need to invest wisely to grow your wealth. At E-Summit 2023&apos;s Youth Conclave, we&apos;re excited to present &apos;Invaso&apos;, an investment competition that challenges young minds to innovate, strategize, and plan for success - skills that are crucial for budding entrepreneurs.


					</Text>
					<Heading align={{"base":"center", "md":"left"}} color="light" label="Our Vision"></Heading>
					<Text color="white" fontSize="1.2rem">
					Our vision at Invaso is to create a platform that inspires young minds to innovate and think critically about investment. We believe in fostering a culture of entrepreneurship and providing opportunities for individuals to develop their investment skills in the form of this competition. Our goal is to empower the next generation of investors and entrepreneurs with the tools and knowledge they need to succeed in the fast-paced world of finance and business.
					</Text>
				</Box>
					
				
				{/* <Flex
					direction="column"
					justify="center"
					align="center"
					padding={{ base: "0rem", md: "2rem" }}
					minW={{ base: "100%", md: "30%" }}
					textAlign="center">
					<Flex
						gap="0.5rem"
						direction="column"
						justify="center"
						align="center"
						margin="1rem">
						<BsPeopleFill color="white" size={iconSize} margin={0} />
						<Text fontSize="1.5rem" color="white" fontWeight={700} m={"-0.5rem"}>
							300+
						</Text>
						<Text fontSize="1.2rem" color="white" textAlign={"center"} margin={0}>
							Registrations last year
						</Text>
					</Flex>
					<Flex
						gap="0.5rem"
						direction="column"
						justify="center"
						align="center"
						margin="1rem">
						<TbZoomMoney color="white" size={iconSize} margin={0} />
						<Text fontSize="1.5rem" color="white" fontWeight={700} m={"-0.5rem"}>
							30k
						</Text>
						<Text fontSize="1.2rem" color="white" textAlign={"center"} margin={0}>
							Prize Money
						</Text>
					</Flex>
				</Flex> */}
				
					
			</Flex>
		</>
	);
}
