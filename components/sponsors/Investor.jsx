import { Text, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import openStartups from "../../public/assets/investors/100open.png";
import astir from "../../public/assets/investors/astirVentures.png";
import beej from "../../public/assets/investors/beej.png";
import campus from "../../public/assets/investors/campusFund.png";
import eximius from "../../public/assets/investors/eximiusVentures.png";
import faad from "../../public/assets/investors/faad.png";
import firstCheque from "../../public/assets/investors/firstCheque.png";
import hydrabadAngels from "../../public/assets/investors/hyderabadAngels.png";
import inflection from "../../public/assets/investors/inflection.png";
import pravega from "../../public/assets/investors/pravega.png";
import RPSG from "../../public/assets/investors/RPSG.png";
import satzAdvisor from "../../public/assets/investors/satzAdvisor.png";
import specialInvest from "../../public/assets/investors/specialInvest.png";
import startupXseed from "../../public/assets/investors/startupXseed.png";
import sucseed from "../../public/assets/investors/sucseed.png";
import titan from "../../public/assets/investors/titan.png";
import waterbridge from "../../public/assets/investors/waterbridge.png";
import WFC from "../../public/assets/investors/WFC.png";
import yourNest from "../../public/assets/investors/yourNest.png";
import dailyhunt from "../../public/assets/sponsors/dailynews-white.jpg";
import IESA from "../../public/assets/sponsors/IESA.jpg";
import inc42 from "../../public/assets/sponsors/inc42.png";
import karostartup from "../../public/assets/sponsors/karostartup.png";
import startupnews from "../../public/assets/sponsors/startupnews.jpeg";


const imgMap = {
 //investors
openStartups : openStartups ,
astir : astir,
beej : beej ,
campus : campus ,
eximius : eximius ,
faad : faad ,
firstCheque : firstCheque ,
hydrabadAngels : hydrabadAngels ,
inflection : inflection ,
pravega : pravega ,
RPSG : RPSG ,
satzAdvisor : satzAdvisor ,
specialInvest : specialInvest ,
startupXseed : startupXseed ,
sucseed : sucseed ,
titan : titan ,
waterbridge : waterbridge ,
WFC : WFC ,
yourNest : yourNest ,
dailyhunt : dailyhunt,
IESA : IESA ,
inc42 : inc42 ,
karostartup : karostartup ,
startupnews : startupnews ,
};

export default function Investor({ name, img, link }) {
	return (
		<>
			<Flex direction="column" align="center" justify="center" p="2rem" color="white" >
				<Flex align="center" justify="center" height="12rem" width="12rem" mb="1rem"  backgroundColor="blue.900" borderRadius="20px" boxShadow='0 0 0 1px var(--chakra-colors-white)'>
				<Flex maxHeight="10rem" maxWidth="10rem">
					<Image  alt="Sponsor logo" src={imgMap[img]} />
				</Flex>
				</Flex>
				<Text
					fontSize="1.5rem"
					fontWeight="700"
					textDecoration="underline"
					textAlign="center">
					<Link href={link}>{name}</Link>
				</Text>
			</Flex>
		</>
	);
}
