import { Box, Center, HStack, SlideFade, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function Timer() {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const launchDay = new Date("February 5 2023 20:20:00");
		setIsOpen(true);

		const interval = setInterval(() => {
			const now = new Date();
			const difference = launchDay.getTime() - now.getTime();

			const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
			setDays(daysLeft);

			const hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			setHours(hoursLeft);

			const minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			setMinutes(minutesLeft);

			const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);
			setSeconds(secondsLeft);

			console.log(days);
		}, 1000);

		return () => clearInterval(interval);
	}, []);
	return (
		<VStack
			width={{ base: "100%", xl: "40%" }}
			fontFamily="Sen"
			fontWeight={500}
			color={"brand.white"}
			// justifyContent="space-around"
			mx={["3rem", "5rem", "15rem"]}>
			<SlideFade in={isOpen} offsetY="40px">
				<Text
					textAlign="center"
					fontSize={{ base: "3rem", xl: "6rem" }}
					bgClip="text"
					bgGradient="linear(to-br, brand.light_blue, brand.green_blue)"
					lineHeight="150%">
					E-Summit 2023 <br />
				</Text>
				<Text
					textAlign="center"
					lineHeight="150%"
					fontSize={{ base: "2rem", xl: "4rem" }}
					color="white">
					Theme Launch
				</Text>
			</SlideFade>
			<HStack fontSize={{ base: "1.5rem", xl: "3rem" }} gap={[3, 8]}>
				<Stack alignItems="center">
					<Box>{days < 10 ? "0" + days : days}</Box>

					<Box letterSpacing={["1px", "2px"]} fontSize={[12, 15]}>
						{days === 1 ? "Day" : "Days"}
					</Box>
				</Stack>
				<Box pb={["1.7rem", "2rem"]} fontSize={["1.2rem", "2rem"]}>
					:
				</Box>
				<Stack alignItems="center">
					<Box>{hours < 10 ? "0" + hours : hours}</Box>

					<Box letterSpacing={["1px", "2px"]} fontSize={[12, 15]}>
						{hours === 1 ? "Hour" : "Hours"}
					</Box>
				</Stack>
				<Box pb={["1.7rem", "2rem"]} fontSize={["1.2rem", "2rem"]}>
					:
				</Box>
				<Stack alignItems={"center"}>
					<Box>{minutes < 10 ? "0" + minutes : minutes}</Box>

					<Box letterSpacing={["1px", "2px"]} fontSize={[12, 15]}>
						{minutes === 1 ? "Minute" : "Minutes"}
					</Box>
				</Stack>
				<Box pb={["1.7rem", "2rem"]} fontSize={["1.2rem", "2rem"]}>
					:
				</Box>

				<Stack alignItems={"center"}>
					<Text
						bgClip="text"
						bgGradient="linear(to-br, brand.light_blue, brand.green_blue)">
						{seconds < 10 ? "0" + seconds : seconds}
					</Text>
					<Box
						letterSpacing={["1px", "2px"]}
						fontSize={[12, 15]}
						bgClip="text"
						bgGradient="linear(to-br, brand.light_blue, brand.green_blue)">
						{seconds === 1 ? "Second" : "Seconds"}
					</Box>
				</Stack>
			</HStack>
		</VStack>
	);
}

export default Timer;
