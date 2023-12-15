import { Text, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import ixigo from "../../public/assets/sponsors/ixigo_logo.png";
import aws from "../../public/assets/sponsors/AWS.png";
import sidbi from "../../public/assets/sponsors/sidbi.png";
import stockPe from "../../public/assets/sponsors/StockPe.png";
import jetBrains from "../../public/assets/sponsors/jet_brains.png";
import okayStartup from "../../public/assets/sponsors/OkayStartup.jpg";
import beeCabs from "../../public/assets/sponsors/BeeCabsLogo.png";
import easyMyTrip from "../../public/assets/sponsors/EaseMyTrip.png";
import batchOf1990 from "../../public/assets/sponsors/batch of 1990.jpg";
import abhibus from "../../public/assets/sponsors/Abhibus.png";
import KokuyoCamlin from "../../public/assets/sponsors/Kokuyo_Camlin.jpg";
import dbsBank from "../../public/assets/sponsors/dbs-white.jpg";
import zolvit from "../../public/assets/sponsors/Zolvit Logo.png";
import startupTN from "../../public/assets/sponsors/StartupTN.png";
import ITC from "../../public/assets/sponsors/ITC_logo.jpg";
import metamorphosis from "../../public/assets/sponsors/metamorphosis-white.jpg";
import cptl from "../../public/assets/sponsors/CTPL_White.png";
import plm from "../../public/assets/sponsors/plm-white.jpg";
import indianTalent from "../../public/assets/sponsors/indian_talent.png";
import westbridge from "../../public/assets/sponsors/westbridge_white.jpg";
import ohvCloud from "../../public/assets/sponsors/OHVcloud.png";
import deutscheBank from "../../public/assets/sponsors/deutsche_bank.png";
import freshworks from "../../public/assets/sponsors/freshworks.jpeg";
import unstop from "../../public/assets/sponsors/unstop.jpg";
import printwear from "../../public/assets/sponsors/printwear.png";
import Imarticus from "../../public/assets/sponsors/imarticus-logo.png";
import hpcl from "../../public/assets/sponsors/hpcl.png";
import G20 from "../../public/assets/sponsors/G20.jpg";
import unesco from "../../public/assets/sponsors/UNESCO.jpg";
import iitmrp from "../../public/assets/sponsors/IITRP.png";
import iitmef from "../../public/assets/sponsors/iitmef.jpg";
import microsoft from "../../public/assets/sponsors/microsoft.jpg";
import boat from "../../public/assets/sponsors/boat-logo.jpg";
// import skippi from "../../public/assets/sponsors/skippi.png";

import flyingmachine from "../../public/assets/sponsors/flyingmachine.png";
import lens from "../../public/assets/sponsors/lens.jpg";
import tiic from "../../public/assets/sponsors/tiic.jpg";


const imgMap = {
 ixigo : ixigo, 
 aws : aws ,
 sidbi : sidbi ,
 stockPe : stockPe ,
 jetBrains : jetBrains ,
 okayStartup : okayStartup ,
 beeCabs : beeCabs ,
 easyMyTrip : easyMyTrip ,
 batchOf1990 : batchOf1990 ,
 abhibus : abhibus ,
 KokuyoCamlin : KokuyoCamlin ,
 dbsBank : dbsBank ,
 zolvit : zolvit ,
 startupTN : startupTN ,
 ITC : ITC ,
 metamorphosis : metamorphosis,
 cptl : cptl ,
 plm : plm ,
 indianTalent : indianTalent ,
 westbridge : westbridge ,
 ohvCloud : ohvCloud ,
 deutscheBank : deutscheBank ,
 freshworks : freshworks ,
 unstop : unstop ,
 printwear : printwear ,
 Imarticus : Imarticus ,
 hpcl : hpcl ,
 unesco : unesco ,
 G20 : G20 ,
 iitmrp : iitmrp ,
 iitmef : iitmef ,
 boat : boat ,
 microsoft : microsoft,
//  skippi : skippi ,
 flyingmachine : flyingmachine,
 lens : lens ,
 tiic : tiic ,
};

export default function Sponsor({ name, text, img, link }) {
	return (
		<>
			<Flex direction="column" align="center" justify="center" p="2rem" color="white">
			<Flex align="center" justify="center" height="14rem" width="14rem" mb="1rem" backgroundColor="blue.900" borderRadius="20px" boxShadow='0 0 0 1px var(--chakra-colors-white)'
				>
					<Flex maxHeight="12rem" maxWidth="12rem" >
						<Image alt="Partner logo" src={imgMap[img]} />
					</Flex>
				</Flex>
				<Text
					fontSize="1.5rem"
					fontWeight="700"
					textDecoration="underline"
					textAlign="center">
					<Link href={link}>{name}</Link>
				</Text>
				<Text textAlign="center" fontSize="1rem">
					{text}
				</Text>
			</Flex>
		</>
	);
}
