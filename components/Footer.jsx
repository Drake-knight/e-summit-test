import {
	Box,
	Button,
	Divider,
	Grid,
	GridItem,
	HStack,
	Icon,
	Stack,
	Text,
	VStack,
	useMediaQuery,
	Link,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { urls } from "../utils/urls";
import { DiscordIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "./Icons";
import ecellIcon from "../public/assets//illustrations/e-cell_logo_white.png";
import esummitLogo from "../public/assets/illustrations/esummit_logo.png";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Footer({ websiteQueries }) {
	const [isLargerThanMobile] = useMediaQuery("(min-width: 450px)");
	const [isLargeLaptop] = useMediaQuery("(min-width: 1560px)");

	return (
		<Box
			id="footer"
			width="100%"
			backgroundColor="rgba(6,6,46,100%)"
			paddingTop={{ base: "3rem", xl: "6rem" }}
			paddingBottom={{ base: "1rem", xl: "2rem" }}
			fontFamily="Sen">
			<VStack
				spacing="2rem"
				alignItems="flex-start"
				width={{ base: "90%", xl: "80%", "2xl": "70%" }}
				marginInline="auto">
				<Grid
					width="100%"
					gap="2rem"
					templateColumns={{ base: "repeat(7, 1fr)", md: "repeat(12,1fr)" }}>
					<GridItem
						colSpan={{ base: 3, md: 5, xl: 2 }}
						display="flex"
						flexDirection="column"
						gap="1rem">
						<Box width={isLargerThanMobile ? "80%" : "90%"}>
							<a href={urls.homepage} target="_blank" rel="noreferrer">
								<Image src={ecellIcon} alt="E-Cell Logo" />
							</a>
						</Box>

						<HStack
							marginTop="auto"
							width={{ base: "80%", md: "100%" }}
							spacing={{ base: "0.25rem", md: "0.5rem" }}
							justifyContent={{ base: "flex-start", md: "flex-start" }}
							opacity="60%">
							<a target="_blank" rel="noreferrer" href={urls.discord}>
								<DiscordIcon
									fontSize="1.5rem"
									color="white"
									_hover={{ color: "#7289da" }}
									transitionDuration="0.2s"
								/>
							</a>

							<a target="_blank" rel="noreferrer" href={urls.twitter}>
								<TwitterIcon
									fontSize="1.5rem"
									color="white"
									_hover={{ color: "#00acee" }}
									transitionDuration="0.2s"
								/>
							</a>

							<a target="_blank" rel="noreferrer" href={urls.instagram}>
								<InstagramIcon
									fontSize="1.5rem"
									color="white"
									_hover={{ color: "#C13584" }}
									transitionDuration="0.2s"
								/>
							</a>

							<a target="_blank" rel="noreferrer" href={urls.linkedin}>
								<LinkedinIcon
									fontSize="1.5rem"
									color="white"
									_hover={{ color: "#006192" }}
									transitionDuration="0.2s"
								/>
							</a>

							<a target="_blank" rel="noreferrer" href={urls.youtube}>
								<YoutubeIcon
									fontSize="1.5rem"
									color="white"
									_hover={{ color: "brand.red" }}
									transitionDuration="0.2s"
								/>
							</a>
						</HStack>
					</GridItem>
					<GridItem colSpan={{ base: 4, md: 2 }}>
						<VStack color="white" spacing="1rem" alignItems="flex-start">
							<Text fontSize="lg" fontWeight={500}>
								E-Summit
							</Text>
							<Link
								fontSize={{ base: "xs", md: "sm" }}
								userSelect="none"
								as="a"
								_hover={{ opacity: "80%", cursor: "pointer" }}
								href="/sponsors"
								mt="0.5rem"
								transition="0.1s"
								opacity="60%">
								Sponsors
							</Link>
							<Text
								fontSize={{ base: "xs", md: "sm" }}
								userSelect="none"
								// as="a"
								// _hover={{ opacity: "80%", cursor: "pointer" }}
								transition="0.1s"
								// target="_blank"
								// href={urls["Integrate dApp"]}
								opacity="60%">
								Merchandise
							</Text>
							<Text
								fontSize={{ base: "xs", md: "sm" }}
								userSelect="none"
								// as="a"
								// _hover={{ opacity: "80%", cursor: "pointer" }}
								transition="0.1s"
								// target="_blank"
								// href={urls["Hashstack 101"]}
								opacity="60%">
								Access Passess
							</Text>
						</VStack>
					</GridItem>
					<GridItem colSpan={{ base: 3, md: 2 }}>
						<VStack color="white" spacing="1rem" alignItems="flex-start">
							<Text fontSize="lg" fontWeight={500}>
								E-Cell
							</Text>
							<Text
								fontSize={{ base: "xs", md: "sm" }}
								as="a"
								_hover={{ opacity: "80%", cursor: "pointer" }}
								mt="0.5rem"
								transition="0.1s"
								target="_blank"
								href={urls.team}
								opacity="60%">
								Team
							</Text>
							<Text
								fontSize={{ base: "xs", md: "sm" }}
								as="a"
								_hover={{ opacity: "80%", cursor: "pointer" }}
								transition="0.1s"
								target="_blank"
								href={urls.pastSponsors}
								opacity="60%">
								Past Sponsors
							</Text>
							<Text
								fontSize={{ base: "xs", md: "sm" }}
								as="a"
								_hover={{ opacity: "80%", cursor: "pointer" }}
								transition="0.1s"
								target="_blank"
								href={urls.blog}
								opacity="60%">
								Blog
							</Text>
							{/* <Text
								fontSize={{ base: "xs", md: "sm" }}
								as="a"
								_hover={{ opacity: "80%", cursor: "pointer" }}
								transition="0.1s"
								target="_blank"
								href={urls.suspire}
								opacity="60%">
								Suspire
							</Text> */}
						</VStack>
					</GridItem>
					<GridItem colSpan={{ base: 4, md: 3 }}>
						<Stack direction="column" color="white" alignItems="flex-start">
							<Text fontSize="lg" fontWeight={500}>
								Contact
							</Text>
							<Text
								fontSize={{ base: "xs", md: "sm" }}
								sx={{ marginTop: "1rem !important" }}>
								For website queries
								<br />
								<Text
									opacity="60%"
									as="span"
									fontSize={{ base: "0.7rem", md: "0.8rem" }}>
									<Icon mr="0.5rem" as={FaPhoneAlt} /> +91 {websiteQueries}
									<br />
									<Icon mr="0.5rem" as={FaEnvelope} /> wmo_ecell@smail.iitm.ac.in
								</Text>
							</Text>
							<Text fontSize={{ base: "xs", md: "sm" }} userSelect="none">
								For other queries
								<br />
								<Text
									opacity="60%"
									as="span"
									fontSize={{ base: "0.7rem", md: "0.8rem" }}>
									<Icon mr="0.5rem" as={FaPhoneAlt} /> +91 99909 06606 (Guneet)
									<br />
									<Icon mr="0.5rem" as={FaEnvelope} /> sr_ecell@smail.iitm.ac.in
								</Text>
							</Text>
							<Text
								bgClip="text"
								bgGradient="linear(to-br, brand.light_blue, brand.green_blue)"
								fontSize={{ base: "xs", md: "md" }}
								userSelect="none">
								For sponsorship queries
								<br />
								<Text
									opacity="60%"
									color="white"
									as="span"
									fontSize={{ base: "0.7rem", md: "0.8rem" }}>
									<Icon as={FaPhoneAlt} mr="0.5rem" /> +91 80730 61703 (Sushant)
									<br />
									<Icon mr="0.5rem" as={FaEnvelope} />{" "}
									corporate_ecell@smail.iitm.ac.in
								</Text>
							</Text>
						</Stack>
					</GridItem>
					<GridItem colSpan={{ base: 5, md: 3 }} colStart={{ base: 2 }}>
						<VStack
							borderRadius="0.5rem"
							bgColor="brand.light_blue"
							paddingX={isLargeLaptop ? "2rem" : "1rem"}
							paddingTop="1rem"
							paddingBottom="2rem">
							<HStack
								// marginLeft="-5rem"
								width="100%"
								justifyContent="center"
								alignItems="center">
								<Box
									width="20%"
									display="flex"
									justifyContent="center"
									alignItems="center">
									<Image alt="E-Summit Logo" src={esummitLogo}></Image>
								</Box>
							</HStack>
							<Text
								color="white"
								fontSize={
									isLargeLaptop
										? "1.5rem"
										: isLargerThanMobile
										? "1.5rem"
										: "2rem"
								}
								textAlign="center"
								fontWeight={700}>
								E-Summit &apos;23 <br />
							</Text>
							<Text
								color="white"
								fontSize="0.9rem"
								lineHeight="100%"
								opacity="90%"
								textAlign="center"
								fontWeight={600}>
								Some assembly required!
								{/* <br />{" "} */}
							</Text>
							<Text
								textAlign="center"
								color="white"
								fontWeight={600}
								fontSize="0.9rem"
								opacity="90%">
								<s>Batteries</s> Fun included.
							</Text>
							<Button
								colorScheme="pink"
								color="white"
								as="a"
								href={urls.loginPortal}
								target="_blank">
								Login
							</Button>
						</VStack>
					</GridItem>
				</Grid>

				<Box width="100%">
					<Divider orientation="horizontal" opacity="20%" borderBottomWidth="0.1rem" />
					<Stack
						direction={{ base: "column", md: "row" }}
						width="100%"
						spacing="0.75rem"
						color={"white"}
						justifyContent="space-between"
						marginTop="1.5rem">
						<Text fontSize={{ base: "xs", md: "sm" }} color="white">
							🛠️{" "}
							<Text as="span" opacity="60%">
								with
							</Text>{" "}
							❤️{" "}
							<Text as="span" opacity="60%">
								by Web Ops, E-Cell IITM
							</Text>
						</Text>
						<HStack spacing="2rem">
							<Text
								fontSize={{ base: "xs", md: "sm" }}
								as="a"
								_hover={{ opacity: "80%", cursor: "pointer" }}
								transition="0.1s"
								target="_blank"
								href="/tnc"
								opacity="60%">
								Terms of Service
							</Text>
							<Text
								fontSize={{ base: "xs", md: "sm" }}
								as="a"
								_hover={{ opacity: "80%", cursor: "pointer" }}
								transition="0.1s"
								target="_blank"
								href="privacy-policy"
								opacity="60%">
								Privacy Policy
							</Text>
							<Text
								fontSize={{ base: "xs", md: "sm" }}
								// as="a"
								// _hover={{ opacity: "80%", cursor: "pointer" }}
								// transition="0.1s"
								// target="_blank"
								// href="/"
								opacity="40%">
								© E-Cell IIT Madras. All Rights Reserved
							</Text>
						</HStack>
					</Stack>
				</Box>
			</VStack>
		</Box>
	);
}

export default Footer;
