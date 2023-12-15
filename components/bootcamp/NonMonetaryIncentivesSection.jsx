import { Box, Flex, Text } from "@chakra-ui/react";
import Heading from "./Heading";
import Image from "next/image";
import aws from "../../public/assets/illustrations/bootcamp/Logos/aws.jpg";
import canva from "../../public/assets/illustrations/bootcamp/Logos/canva.png";
import cashfree from "../../public/assets/illustrations/bootcamp/Logos/cashfree.png";
import digitalOcean from "../../public/assets/illustrations/bootcamp/Logos/digitalocean.png";
import dropbox from "../../public/assets/illustrations/bootcamp/Logos/Dropbox.jpg";
import fiverr from "../../public/assets/illustrations/bootcamp/Logos/fiverr.png";
import googleCloud from "../../public/assets/illustrations/bootcamp/Logos/google cloud.png";
import hubspot from "../../public/assets/illustrations/bootcamp/Logos/hubspot.png";
import microsoft from "../../public/assets/illustrations/bootcamp/Logos/microsoft for startups.jpg";
import mixpanel from "../../public/assets/illustrations/bootcamp/Logos/mixpanel.jpg";
import notion from "../../public/assets/illustrations/bootcamp/Logos/notion.png";
import slack from "../../public/assets/illustrations/bootcamp/Logos/slack.png";
import typeform from "../../public/assets/illustrations/bootcamp/Logos/typeform.png";
import webengage from "../../public/assets/illustrations/bootcamp/Logos/webengage.png";
import zendesk from "../../public/assets/illustrations/bootcamp/Logos/zendesk.png";
import okayStartup from "../../public/assets/illustrations/bootcamp/Logos/okayStartup.png";

export default function NonMonetaryIncentivesSection() {
	return (
		<>
			<Flex
				direction="column"
				justify="center"
				align="center"
				p="2rem"
				bgColor="bootcamp.dark_blue">
				<Heading align="center" color="light" label="Non Monetary Incentives" />
				<Flex direction="column" align="center" justify="center">
					<Text fontSize="1.2rem" color="bootcamp.dark_blue">
						In association with
					</Text>
					<Flex w="8rem" h="8rem" align="center" justify="center">
						<Image src={okayStartup} alt="okay startups" />
					</Flex>
				</Flex>
				<Flex
					mt="1rem"
					borderRadius="10px"
					bgColor="bootcamp.dark_blue"
					w="100%"
					direction="row"
					wrap="wrap"
					align="center"
					justify="space-evenly">
					<Flex align="center" justify="center" h="8rem" w="8rem" m="1rem">
						<Image src={aws} alt="aws" />
					</Flex>
					<Flex align="center" justify="center" h="8rem" w="8rem" m="1rem">
						<Image src={canva} alt="canva" />
					</Flex>
					<Flex align="center" justify="center" h="8rem" w="8rem" m="1rem">
						<Image src={cashfree} alt="cashfree" />
					</Flex>
					<Flex align="center" justify="center" h="8rem" w="8rem" m="1rem">
						<Image src={digitalOcean} alt="digital ocean" />
					</Flex>
					<Flex align="center" justify="center" h="8rem" w="8rem" m="1rem">
						<Image src={dropbox} alt="dropbox" />
					</Flex>
					<Flex align="center" justify="center" h="8rem" w="8rem" m="1rem">
						<Image src={fiverr} alt="fiverr" />
					</Flex>
					<Flex align="center" justify="center" h="8rem" w="8rem" m="1rem">
						<Image src={googleCloud} alt="google cloud" />
					</Flex>
					<Flex align="center" justify="center" h="8rem" w="8rem" m="1rem">
						<Image src={hubspot} alt="hubspot" />
					</Flex>
					<Flex align="center" justify="center" h="8rem" w="8rem" m="1rem">
						<Image src={microsoft} alt="microsoft for startups" />
					</Flex>
					<Flex align="center" justify="center" h="8rem" w="8rem" m="1rem">
						<Image src={mixpanel} alt="mixpanel" />
					</Flex>
					<Flex align="center" justify="center" h="8rem" w="8rem" m="1rem">
						<Image src={notion} alt="notion" />
					</Flex>
					<Flex align="center" justify="center" h="8rem" w="8rem" m="1rem">
						<Image src={slack} alt="slack" />
					</Flex>
					<Flex align="center" justify="center" h="8rem" w="8rem" m="1rem">
						<Image src={typeform} alt="typeform" />
					</Flex>
					<Flex align="center" justify="center" h="8rem" w="8rem" m="1rem">
						<Image src={webengage} alt="webengage" />
					</Flex>
					<Flex align="center" justify="center" h="8rem" w="8rem" m="1rem">
						<Image src={zendesk} alt="zendesk" />
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}
