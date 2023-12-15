import React from "react";
import {
	Box,
	Text,
	Link,
	HStack,
	useMediaQuery,
	Menu,
	MenuList,
	MenuItem,
	MenuButton,
	Icon,
	Button,
	Flex,
	IconButton,
	MenuGroup,
	MenuDivider,
	DarkMode,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import ecellLogo from "../public/assets/illustrations/e-cell_logo_white_wo_captions.png";
import esummit_logo from "../public/assets/illustrations/esummit_logo.png";
import { urls } from "../utils/urls";
import {
	FaBullhorn,
	FaArrowRight,
	FaBars,
	FaHandshake,
	FaTicketAlt,
	FaTshirt,
} from "react-icons/fa";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

function Navbar({ isCountdownNavbar }) {
	const [isLargerThanMobile] = useMediaQuery("(min-width: 450px)");
	const conclaves = [
		{ name: "Youth Conclave", link: "youth-conclave" },
		{ name: "Innovators Conclave", link: "innovators-conclave" },
		{ name: "Startup Conclave", link: "startup-conclave" },
		{ name: "Sustainability Conclave", link: "sustainability-conclave" },
	];

	return (
		<>
			<Box
				position="sticky"
				display="flex"
				zIndex="1000"
				height="8vh"
				alignItems="center"
				top="0"
				w="full"
				paddingY={4}
				paddingX={4}
				backdropFilter="auto"
				backdropBlur="0.5rem"
				boxShadow="md"
				textColor="header-white"
				justifyContent="space-between"
				bgColor="transparent">
				<HStack alignItems="center" gap="1rem" zIndex="1000">
					<Box width={{ base: "20%", xl: "10%" }}>
						<Image src={ecellLogo} alt="logo" />
					</Box>

					<Link href="/">
						<Text fontWeight="bold" color="brand.white">
							E-Cell{" "}
							<Text as="span" fontWeight="normal" color="brand.white">
								IIT-Madras
							</Text>
						</Text>
					</Link>
				</HStack>
				{isCountdownNavbar && (
					<Box
						width={{ base: "30%", xl: "10%" }}
						display="flex"
						flexDirection="row"
						justifyContent="end"
						alignItems="center">
						<Image src={esummit_logo} alt="logo" />
					</Box>
				)}
				{isLargerThanMobile && !isCountdownNavbar && (
					<HStack
						fontFamily="Sen"
						alignItems="center"
						fontSize={{ base: "1rem", lg: "0.7rem", xl: "1rem" }}
						gap={{ base: "1rem", lg: "2.5rem", xl: "2rem", "2xl": "1rem" }}>
						<Menu>
							{({ isOpen }) => (
								<>
									<MenuButton>
										<Flex>
											<Text color="white">Conclaves</Text>
											<Icon
												as={!isOpen ? AiFillCaretDown : AiFillCaretUp}
												color="rgb(130, 0,0)"
												fontSize="xl"
												mt="1"
											/>
										</Flex>
									</MenuButton>
									<MenuList bg="brand.dark_blue_translucent">
										{conclaves.map((conclave) => {
											return (
												<MenuItem
													key={conclave.name}
													bg="brand.less_dark_blue"
													border="brand.white"
													color="brand.white">
													<Link href={`/conclaves/${conclave.link}`}>
														{conclave.name}
													</Link>
												</MenuItem>
											);
										})}
									</MenuList>
								</>
							)}
						</Menu>
						<Link color="white" href="/sponsors">
							Sponsors
						</Link>
						<Button
							rightIcon={<FaBullhorn />}
							colorScheme="orange"
							size={{ base: "md", md: "md" }}
							padding={{ base: "1rem", xl: "1rem" }}
							as="a"
							href={urls.speakers}
							target="_blank"
							fontSize="1.4rem"
							fontFamily="Sen">
							Speakers
						</Button>
						<Button
							rightIcon={<FaTshirt />}
							colorScheme="blue"
							size={{ base: "md", md: "md" }}
							padding={{ base: "1rem", xl: "1rem" }}
							as="a"
							href={urls.shop}
							target="_blank"
							fontSize="1.4rem"
							fontFamily="Sen">
							Buy Merch
						</Button>
						<Button
							rightIcon={<FaArrowRight />}
							colorScheme="pink"
							size={{ base: "md", md: "md" }}
							padding={{ base: "1rem", xl: "1rem" }}
							as="a"
							href={urls.loginPortal}
							target="_blank"
							fontSize="1.4rem"
							fontFamily="Sen">
							Login
						</Button>
					</HStack>
				)}
				{isLargerThanMobile && (
					<Box
						position="absolute"
						bottom="0"
						style={{
							height: "0.5vh",
							width: "100%",
							background:
								"linear-gradient(to right, #000026 0, #ED254E 50%, #ED254E 50%, #000026 100%)",
						}}
						zIndex="0"
					/>
				)}
				{!isLargerThanMobile && (
					<DarkMode>
						<Menu>
							<MenuButton
								as={IconButton}
								aria-label="Options"
								icon={<FaBars />}
								variant="outline"
							/>
							<MenuList fontFamily="Sen">
								<MenuGroup color="white" title="Conclaves">
									<MenuItem color="white">
										<Link href={`/conclaves/youth-conclave`}>Youth</Link>
									</MenuItem>
									<MenuItem color="white">
										<Link href={`/conclaves/innovators-conclave`}>
											Innovator&apos;s{" "}
										</Link>
									</MenuItem>
									<MenuItem color="white">
										<Link href={`/conclaves/startup-conclave`}>Startup </Link>
									</MenuItem>
									<MenuItem color="white">
										<Link href={`/conclaves/sustainability-conclave`}>
											Sustainability{" "}
										</Link>
									</MenuItem>
								</MenuGroup>
								<MenuDivider />
								<MenuItem
									as="a"
									href={urls.registerPortal}
									target="_blank"
									color="white"
									icon={<FaArrowRight />}>
									<Text>Register</Text>
								</MenuItem>
								<MenuItem
									as="a"
									href={urls.speakers}
									target="_blank"
									color="white"
									icon={<FaBullhorn />}>
									<Text>Speakers</Text>
								</MenuItem>
								<MenuItem
									as="a"
									href={urls.shop}
									target="_blank"
									color="white"
									icon={<FaTshirt />}>
									<Text>Merchandise</Text>
								</MenuItem>
								<MenuItem
									as="a"
									href={urls.sponsors}
									target="_blank"
									color="white"
									icon={<FaHandshake />}>
									<Text>Sponsors</Text>
								</MenuItem>
							</MenuList>
						</Menu>
					</DarkMode>
				)}
			</Box>
		</>
	);
}

export default Navbar;
