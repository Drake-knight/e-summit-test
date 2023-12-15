import { Button, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function RoundCard({ name, description, oneLine, src, eventLink }) {
	return (
		<Flex
			direction="column"
			color="white"
			w="20%"
			wrap="wrap"
			minW="350px"
			padding="2rem"
			gap="1rem"
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
			<Image src={src} alt="image" width="250" height="250" />
			<Text
				fontSize="2.2rem"
				fontWeight="700"
				bgGradient="linear(to-l, #C12A72, #4135D6)"
				bgClip="text">{`${name}`}</Text>
			<Text fontSize="1.3rem">{oneLine}</Text>
			<Text textAlign="justify">{description}</Text>
			<Text
				colorScheme="bootcamp.dark_blue"
				marginInline={{ base: "auto", xl: "0" }}
				fontSize="xl"
				ml="9.8rem"
				mb="0">
				{eventLink && (
					<Link
						href={eventLink}
						bgGradient="linear(to-l, #C12A72, #4135D6)"
						bgClip="text">
						VIEW EVENT
					</Link>
				)}
				{!eventLink && (
					<Text bgGradient="linear(to-l, #C12A72, #4135D6)" bgClip="text">
						COMING SOON
					</Text>
				)}
			</Text>
		</Flex>
	);
}
