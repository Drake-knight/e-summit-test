import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";

function Hero({ conclave_name }) {
	return (
		<Box
			backgroundColor="bootcamp.dark_blue"
			width="100%"
			p="5px"
			pt={{ md: "200px", sm: "10px", lg: "300px", xl: "300px" }}
			pb={{ md: "200px", sm: "0px", lg: "300px", xl: "300px" }}>
			<style>{`
            @keyframes blobanimation {
				0% {
					transform: translate(0px, 0px) scale(1);
				}
			
				33% {
					transform: translate(30px, -50px) scale(1.1);
				}
			
				66% {
					transform: translate(-20px, 20px) scale(0.9);
				}
			
				100% {
					transform: tranlate(0px, 0px) scale(1);
				}
			}
        `}</style>
			{/* blue blob */}
			<Box
				style={{
					position: "absolute",
					top: "2%",
					right: "55%",
					width: "50%",
					height: "50%",
					backgroundColor: "#4235D5",
					borderRadius: "100%",
					opacity: "25%",
					filter: "blur(80px)",
					maxHeight: "500px",
					maxWidth: "400px",
					animation: "blobanimation 7s infinite",
				}}
			/>
			{/* green blob */}
			<Box
				style={{
					position: "absolute",
					top: "2%",
					left: "45%",
					width: "50%",
					height: "50%",
					backgroundColor: "#4baf28",
					borderRadius: "100%",
					opacity: "30%",
					filter: "blur(80px)",
					animation: "blobanimation 7s infinite",
					maxHeight: "500px",
					maxWidth: "400px",
					animationDelay: "2s",
				}}
			/>
			{/* pink blob */}
			<Box
				style={{
					position: "absolute",
					top: "7%",
					left: "30%",
					width: "50%",
					height: "50%",
					backgroundColor: "#C12A72",
					borderRadius: "100%",
					opacity: "30%",
					filter: "blur(80px)",
					animation: "blobanimation 7s infinite",
					animationDelay: "4s",
					maxHeight: "500px",
					maxWidth: "400px",
				}}
			/>
			<Text
				textAlign="center"
				fontSize={{
					base: conclave_name === "SUSTAINABILITY CONCLAVE" ? "2rem" : "3rem",
					sm: "5xl",
					md: "7xl",
					lg: "7xl",
					xl: "8xl",
				}}
				p={{ base: "2.5rem", xl: "rem" }}
				pl={{ base: "5", xl: "2rem" }}
				// bgGradient="linear(to-l, #C12A72, #4135D6)"
				bgGradient="linear(to-br, brand.light_blue, brand.green_blue)"
				bgClip="text">
				{conclave_name}
			</Text>
		</Box>
	);
}

export default Hero;
