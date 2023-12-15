import { extendTheme, theme as base } from "@chakra-ui/react";

const colors = {
	brand: {
		green_blue: "#5AF7DC",
		dark_blue: "#000026",
		dark_blue_translucent: "rgba(0,0,38,80%)",
		pink: "#FF16FF",
		light_blue: "#0D3AFF",
		white: "#FFFFFF",
		red: "#ED254E",
	},
	bootcamp: {
		dark_blue: "#0C0A33",
		beige: "#FFECD1",
		purple: "#81265E",
		gray: "#CECED6",
		brown: "#CBA376"
	}
};

const fonts = {
	fonts: {
		Sen: `Sen, ${base.fonts.body}`,
	},
};

export const theme = extendTheme({ colors, fonts });
