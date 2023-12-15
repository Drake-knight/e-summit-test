import { Alert, Button, Center, FormControl, Input, Icon, AlertIcon } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaBell } from "react-icons/fa";

function EmailForm() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [status, setStatus] = useState("");

	const handleClick = async (e) => {
		e.preventDefault();
		// const email = { email };
		{
			console.log(email);
		}
		const response = await fetch("/api/email", {
			method: "POST",
			//need to send data as string to server
			body: JSON.stringify({ email }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const user = await response.json();
		// console.log({ user });
		if (!response.ok) {
			console.log(user.error);
			setStatus("Error");
			setError(user.error);
		} else {
			setEmail("");
			setError("");
			setStatus("success");
			console.log("Email added successfully");
		}
	};
	return (
		<>
			<Center flexDirection={"column"} gap={[6, 8]}>
				<FormControl isInvalid={error} isRequired pt={["4rem", "3rem"]}>
					<Center flexDirection={"column"}>
						<Input
							placeholder="Enter your email"
							type="email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							bg={"rgba(217, 217, 217, 0.16)"}
							width="100%"
							border="none"
							color={"brand.white"}
						/>
					</Center>
				</FormControl>
				<Button
					onClick={handleClick}
					borderRadius={[5, 7]}
					size="lg"
					colorScheme="pink"
					fontSize={[12, 18]}>
					Set Reminder <Icon as={FaBell} ml={[2, 3]} />
				</Button>
			</Center>
			<Center>
				<Center
					mt={[5, 5, 2.5]}
					width={"fit-content"}
					fontSize={[12, 16]}
					fontWeight={"semibold"}>
					{status === "success" && (
						<Alert status="success" borderRadius={7} height={[5, 8]}>
							<AlertIcon boxSize={[4, 5]} />
							Email set for reminder. Fire on!
						</Alert>
					)}
					{error && (
						<Alert status="error" borderRadius={7} height={[5, 8]}>
							<AlertIcon boxSize={[4, 5]} />
							{error}
						</Alert>
					)}
				</Center>
			</Center>
		</>
	);
}

export default EmailForm;
