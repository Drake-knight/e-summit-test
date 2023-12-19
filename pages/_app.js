/* eslint-disable @next/next/no-sync-scripts */
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { theme } from "../theme/theme";
import Fonts from "../theme/Fonts";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import "../components/CustomPromptPWA/global.css"

function MyApp({ Component, pageProps }) {
	const containerRef = useRef(false);
	const router = useRouter();

	useEffect(() => {
		if ("serviceWorker" in navigator) {
			window.addEventListener("load", function () {

				navigator.serviceWorker.register("firebase-messaging-sw.js", { scope: 'firebase-cloud-messaging-push-scope' }).then(
					function (registration) {
						console.log(" Service Worker registration successful with scope: ", registration.scope);
					},
					function (err) {
						console.log(" Service Worker registration failed: ", err);
					}
				);
			});

		}
	}, []);

	return (
		<ChakraProvider theme={theme}>
			{/* <Head>
				<title>E-Summit &apos;23</title>
				<meta name="description" content="" />
				<link rel="icon" href="/assets/favicon.png" />
			</Head> */}
			{<Head>
				<link rel="manifest" href="/manifest.json" />
			</Head>}
			<Fonts />
			<LocomotiveScrollProvider
				options={{
					smooth: true,
					// ... all available Locomotive Scroll instance options
				}}
				watch={[
					router.asPath,
					//..all the dependencies you want to watch to update the scroll.
					//  Basicaly, you would want to watch page/location changes
					//  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
				]}
				containerRef={containerRef}>
				<main data-scroll-container ref={containerRef}>
					<Component {...pageProps} />
				</main>
			</LocomotiveScrollProvider>
		</ChakraProvider>
	);
}

export default MyApp;
