import { Center, SlideFade, Text, VStack } from "@chakra-ui/react";
// import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// import ecell_particles from "../../public/assets/vids/ecell_particles.mp4";

function ClothAnimation() {
	const [isOpen, setIsOpen] = useState(false);
	const vidRef = useRef(null);
	useEffect(() => {
		setIsOpen(true);
		vidRef.current.play();
	}, []);
	return (
		<VStack width={{ base: "100%", xl: "60%" }}>
			<video muted="muted" preload="metadata" loop playsinline ref={vidRef}>
				<source src="/assets/vids/ecell_particles.mp4" type="video/mp4" />
			</video>
		</VStack>
	);
}

export default ClothAnimation;
