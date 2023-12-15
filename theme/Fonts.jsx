import { Global } from "@emotion/react";

const Fonts = () => (
	<Global
		styles={`
      @font-face {
        font-family: 'Sen';
        font-style: normal;
        font-weight: 400;
        src: url('/assets/fonts/Sen-Regular.ttf') format("truetype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Sen';
        font-style: normal;
        font-weight: 800;
        src:  url('/assets/fonts/Sen-ExtraBold.ttf') format("truetype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Sen';
        font-style: normal;
        font-weight: 700;
        src: url('/assets/fonts/Sen-Bold.ttf') format("truetype");
        font-display: swap;
      }
      
      `}
	/>
);

export default Fonts;
