import { Box, Button, HStack, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect } from "react";
import dynamic from 'next/dynamic';
import silhoute from "../../public/assets/illustrations/people.png";
import silhouteMobile from "../../public/assets/illustrations/people_mobile.png";
import { FaArrowRight, FaTshirt } from "react-icons/fa";
import { urls } from "../../utils/urls";
function Hero() {
	const [isLargerThanMobile] = useMediaQuery("(min-width: 450px)");

	const vibrate = () => {
		if (typeof window !== "undefined" && "vibrate" in navigator) {
		 window.navigator.vibrate([320, 200, 320, 1000, 320, 200, 320]);
		}
	  };
	useEffect(() => {
		(function () {
			var requestAnimationFrame =
				window.requestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					window.setTimeout(callback, 1000 / 60);
				};
			window.requestAnimationFrame = requestAnimationFrame;
		})();

		let background = document.getElementById("bgCanvas");
		let bgCtx = background.getContext("2d");
		let width = window.innerWidth;
		let height = document.getElementById("hero_section").clientHeight;
		height < 400 ? (height = 400) : height;
		console.log(height);
	

		background.width = width;
		background.height = height;

		// Second canvas used for the stars
		bgCtx.fillStyle = "#000026";
		bgCtx.fillRect(0, 0, width, height);

		// stars
		function Star(options) {
			this.size = Math.random() * 2;
			this.speed = Math.random() * 0.1;
			this.x = options.x;
			this.y = options.y;
		}

		Star.prototype.reset = function () {
			this.size = Math.random() * 2;
			this.speed = Math.random() * 0.1;
			this.x = width;
			this.y = Math.random() * height;
		};

		Star.prototype.update = function () {
			this.x -= this.speed;
			if (this.x < 0) {
				this.reset();
			} else {
				bgCtx.fillRect(this.x, this.y, this.size, this.size);
			}
		};

		function ShootingStar() {
			this.reset();
		}

		ShootingStar.prototype.reset = function () {
			this.x = Math.random() * width;
			this.y = 0;
			this.len = Math.random() * 80 + 10;

			if (isLargerThanMobile) {
				this.speed = Math.random() * 5 + 6;
			} else {
				this.speed = Math.random() * 1 + 6;
			}
			this.size = Math.random() * 2 + 0.5;
			// this is used so the shooting stars arent constant
			this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
			this.active = false;
		};

		ShootingStar.prototype.update = function () {
			if (this.active) {
				this.x -= this.speed;
				this.y += this.speed;
				if (this.x < 0 || this.y >= height) {
					this.reset();
				} else {
					let grad = bgCtx.createLinearGradient(
						this.x,
						this.y,
						this.x + this.len,
						this.y - this.len
					);
					grad.addColorStop(0, "#F022FD");
					grad.addColorStop(1, "#000026");
					bgCtx.strokeStyle = grad;
					bgCtx.lineWidth = this.size;
					bgCtx.beginPath();
					bgCtx.moveTo(this.x, this.y);
					bgCtx.lineTo(this.x + this.len, this.y - this.len);
					bgCtx.stroke();
				}
			} else {
				if (this.waitTime < new Date().getTime()) {
					this.active = true;
				}
			}
		};

		var entities = [];

		// init the stars
		if (isLargerThanMobile) {
			for (var i = 0; i < (4 * height) / 3; i += 2) {
				entities.push(new Star({ x: Math.random() * width, y: Math.random() * height }));
			}
		} else {
			for (var i = 0; i < (1 * height) / 3; i += 2) {
				entities.push(new Star({ x: Math.random() * width, y: Math.random() * height }));
			}
		}

		// Add 2 shooting stars that just cycle.
		entities.push(new ShootingStar());
		entities.push(new ShootingStar());
		entities.push(new ShootingStar());

		//animate background
		function animate() {
			bgCtx.fillStyle = "#000026";
			bgCtx.fillRect(0, 0, width, height);
			bgCtx.fillStyle = "#ffffff";
			bgCtx.strokeStyle = "#F022FD";

			var entLen = entities.length;

			while (entLen--) {
				entities[entLen].update();
			}

			requestAnimationFrame(animate);
		}
		animate();
	}, []);
	return (
		<Box
			id="hero_section"
			width="full"
			display={"flex"}
			alignItems="center"
			justifyContent="center"
			height={{ base: "91.5vh", md: "91.5vh" }}
			position="relative">
			<VStack
				height="100%"
				data-scroll
				data-scroll-speed="5"
				data-scroll-delay="0.1"
				width={{ base: "40%", md: "80%", xl: "40%" }}
				justifyContent="start"
				alignItems="center"
				zIndex="15">
				<Text
					marginTop="4rem"
					color="white"
					opacity="90%"
					fontSize={{ base: "1.5rem", md: "3rem", lg: "4rem", xl: "3rem" }}
					whiteSpace="nowrap"
					fontFamily="Sen">
					E-SUMMIT &apos;23
				</Text>
				<Text
					fontFamily="Sen"
					textAlign="center"
					bgClip="text"
					bgGradient="linear(to-br, brand.light_blue, brand.green_blue)"
					lineHeight={{
						base: "3rem",
						md: "5rem",
						lg: "6rem",
						xl: "5rem",
						"2xl": "6.5rem",
					}}
					fontSize={{
						base: "2.5rem",
						md: "4rem",
						lg: "5rem",
						xl: "4rem",
						"2xl": "5rem",
					}}>
					ASSEMBLAGE OF CHANGEMAKERS
				</Text>
				<HStack spacing="2rem" paddingTop="2rem">
					<Button
						rightIcon={<FaTshirt />}
						colorScheme="blue"
						size={{ base: "md", md: "lg" }}
						padding={{ base: "1rem", xl: "2rem" }}
						as="a"
						// href={urls.shop}
						target="_blank"
						fontSize="1.4rem"
						fontFamily="Sen"
						onClick={
							vibrate()} >
						Buy Merch
					</Button>
					<Button
						rightIcon={<FaArrowRight />}
						colorScheme="pink"
						size={{ base: "md", md: "lg" }}
						padding={{ base: "1rem", xl: "2rem" }}
						as="a"
						// href={urls.loginPortal}
						target="_blank"
						fontSize="1.4rem"
						fontFamily="Sen"
						onClick={
							vibrate()} >
						Login
					</Button>
				</HStack>
			</VStack>
			<canvas
				data-scroll //This attribute makes this section an independent scrollable container
				data-scroll-speed="7"
				id="bgCanvas"
				style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}
			/>
			<Box
				data-scroll //This attribute makes this section an independent scrollable container
				data-scroll-speed="6"
				width="100%"
				position="absolute"
				bottom={{ base: "8rem", lg: "-10" }}
				// bottom="0"
				display={{ base: "none", lg: "block" }}
				zIndex="5">
				<Image src={silhoute} alt="silhouete" placeholder="blur" />
			</Box>
			<Box
				data-scroll //This attribute makes this section an independent scrollable container
				data-scroll-speed="6"
				width="100%"
				position="absolute"
				bottom="0"
				display={{ lg: "none" }}
				// bottom="0"
				zIndex="5">
				<Image src={silhouteMobile} alt="silhouete" placeholder="blur" />
			</Box>
		</Box>
	);
}

export default Hero;
