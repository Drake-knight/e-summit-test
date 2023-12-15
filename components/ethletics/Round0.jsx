import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Heading from "./Heading";

export default function Round0() {
	return (
		<>
			<Flex
				id="about"
				direction={ "column"}
				align={{ base: "center" }}
				textAlign={{ base: "center", md: "left" }}
				justify="center"
				bgColor="bootcamp.dark_blue"
				padding={{ base: "2rem", md: "4rem" }} gap={{base:"1rem"}}>
					
				
					<Heading
						align={ "center" }
						color="light"
						label="Round 0 : Revamp Regatta"></Heading>
						<Flex direction={{base:"column",md:"row"}} gap={{md:"2rem"}} alignItems="center" >
						<Text color={"white"} fontSize="1.2rem">Click here to access the problem statement</Text>
						<Button
						align={"center"}
						bgColor={"bootcamp.purple"}
						colorScheme="pink"
						
						my="1rem"
						as="a"
						href="https://drive.google.com/file/d/1fhmPk8I2lpAqdvEGyx8V3V1knmiwb4cn/view?usp=sharing">
						Problem Statement
					</Button>
					
				
						</Flex>
					
						<Flex direction={{base:"column",md:"row"}} gap={{md:"2rem"}} alignItems="center" >
						<Text color={"white"} fontSize="1.2rem">Click here to upload your submissions</Text>
						<Button
						align={"center"}
						
						colorScheme="pink"
						
						my="1rem"
						as="a"
						href="https://portal.esummitiitm.org/event/ethletics">
						UPLOAD
					</Button>
				</Flex>
				<Text color={"white"} fontSize="1rem"><strong>*Note : </strong>Submission window closes at 11:59 PM, 12-03-2023.</Text>
					
			</Flex>
		</>
	);
}
