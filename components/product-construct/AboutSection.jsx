import { Flex, Box, Text, Stack } from "@chakra-ui/react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiIncubator } from "react-icons/gi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TbGift, TbSpeakerphone, TbZoomMoney } from "react-icons/tb";
import Heading from "../bootcamp/Heading";
import aboutUs from "../../public/assets/product-construct/Work time-amico.svg";
import vision from "../../public/assets/product-construct/Collab-bro.svg";
import mission from "../../public/assets/product-construct/Time management-pana.svg";
import Image from "next/image";

export default function AboutSection() {
	const iconSize = 60;
	return (
		<>
			<Flex
				p="4rem"
				pb="0rem"
				direction={{ base: "column", md: "row" }}
				align="center"
				justify="center"
				w="100%"
				bgColor="bootcamp.dark_blue"
				gap="1rem">
				<Flex
					direction="column"
					pt="2rem"
					justifyContent="flex-start"
					width={{ base: "100%", md: "50%" }}
					color="white"
					textAlign="center"
					align="center"
					gap="1rem">
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="About Us"></Heading>
					<Text color="white" fontSize="1.2rem" mb="2rem">
						The Product construct event, in a nutshell, is a complete walkthrough of
						product management. we will have 2 case study problems in competitions which
						will try to cover the major topics of product management right from finding
						product-market fit to designing UI/UX.
					</Text>
				</Flex>
				<Flex
					align="center"
					justify="center"
					direction="column"
					w={{ base: "100%", md: "50%" }}>
					<Flex justify="center" align="center" w="100%" maxW="100%">
						<Image src={aboutUs} alt="product-construct-logo" />
					</Flex>
				</Flex>
			</Flex>

			<Flex
				p="4rem"
				// p={{ base: "2rem", xl: "8rem" }}
				direction={{ base: "column", md: "row" }}
				align="center"
				justify="center"
				w="100%"
				bgColor="bootcamp.dark_blue"
				gap="1rem">
				<Flex
					align="center"
					justify="center"
					direction="column"
					w={{ base: "100%", md: "50%" }}>
					<Flex justify="center" align="center" w="100%" maxW="100%">
						<Image src={vision} alt="product-construct-logo" />
					</Flex>
				</Flex>
				<Flex
					direction="column"
					py="2rem"
					justifyContent="flex-start"
					width={{ base: "100%", md: "50%" }}
					color="white"
					textAlign="center"
					align="center"
					gap="1rem">
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="Our vision"></Heading>
					<Text color="white" fontSize="1.2rem" mb="2rem">
						We have the vision to incorporate the underlying concepts of product
						management and procedure heading towards building products to be
						incorporated and practiced by students.This will give them an edge towards
						building products and will avoid common mistakes towards a path for product
						building.
					</Text>
				</Flex>
			</Flex>

			<Flex
				p="4rem"
				direction={{ base: "column", md: "row" }}
				align="center"
				justify="center"
				w="100%"
				bgColor="bootcamp.dark_blue"
				gap="1rem">
				<Flex
					direction="column"
					py="2rem"
					justifyContent="flex-start"
					width={{ base: "100%", md: "50%" }}
					color="white"
					textAlign="center"
					align="center"
					gap="1rem">
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="Our mission"></Heading>
					<Text color="white" fontSize="1.2rem" mb="2rem">
						The soul purpose of the product construct event is to give a glimpse of the
						product managerial aspect to young and budding minds and also to inculcate
						the analytical thinking of building a product as is done by corporates.
					</Text>
				</Flex>
				{/* <Flex
					direction="column"
					py="2rem"
					justifyContent="flex-start"
					width={{ base: "100%", md: "50%" }}
					color="white"
					textAlign="center"
					align="center"
					gap="1rem">
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="Our vision"></Heading>
					<Text color="white" fontSize="1.2rem" mb="2rem">
						We have the vision to incorporate the underlying concepts of product
						management and procedure heading towards building products to be
						incorporated and practiced by students.This will give them an edge towards
						building products and will avoid common mistakes towards a path for product
						building.
					</Text>
				</Flex> */}
				<Flex
					align="center"
					justify="center"
					direction="column"
					w={{ base: "100%", md: "50%" }}>
					<Flex justify="center" align="center" w="100%" maxW="100%">
						<Image src={aboutUs} alt="product-construct-logo" />
					</Flex>
				</Flex>
			</Flex>

			{/* <Flex
				id="about"
				direction={{ base: "column", md: "row" }}
				align={{ base: "center", md: "flex-start" }}
				textAlign={{ base: "center", md: "left" }}
				justify="center"
				bgColor="bootcamp.dark_blue"
				padding={{ base: "2rem", md: "4rem" }}>
				<Box padding="2rem">
					<Stack
						width="100%"
						direction={{ base: "column", xl: "row" }}
						paddingInline={{ base: "2rem", xl: "0" }}
						alignItems="center"
						justifyContent="center"
						height="100%">
						<Flex>
							<Box
								flexBasis="35%"
								pb={{ base: "4rem", xl: "2rem" }}
								height="100%"
								alignItems="center"
								justifyContent="center"
								display="flex"
								minWidth="20rem">
								<Image
									src={aboutUs}
									alt="image"
									alignItems="center"
									justifyContent="center"
								/>
							</Box>
							<Box>
								<Heading
									align={{ base: "center", md: "left" }}
									color="light"
									label="About Us"></Heading>
								<Text color="white" fontSize="1.2rem" mb="2rem">
									Great product managers exhibit strong product sense, leadership,
									communication, intellectual aptitude, strategic vision, and
									analytical decision-making skills. Each of these skills is
									critical to the product manager’s ability to lead a variety of
									stakeholders in developing, designing, and shipping successful
									products.
								</Text>
							</Box>
						</Flex>
					</Stack>
					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="Our Mission"></Heading>
					<Text color="white" fontSize="1.2rem" mb="2rem">
						Entrepreneurship-Cell IIT Madras calls together all tinkerers, thinkers,
						designers, and problem-solvers to get inside the business of new-age
						technology, and provides a unique opportunity to solve a real Product
						Management problem through a case study competition.
					</Text>

					<Heading
						align={{ base: "center", md: "left" }}
						color="light"
						label="Our Vision"></Heading>
					<Text color="white" fontSize="1.2rem">
						This case study competition is designed to attract and engage budding early
						talent to creatively respond to live and realistic business challenges. This
						competition will allow students to stretch their imaginations and develop
						innovative solutions to the day-to-day challenges faced by the startup.
						Finalists will also get a chance to work for that startup along with the
						cash prize provided by E-Cell IIT Madras.
					</Text>
				</Box>
			</Flex> */}
		</>
	);
}
