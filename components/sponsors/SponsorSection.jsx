import Sponsor from "./Sponsor";
import MainSponsor from "./MainSponsor";
import Heading from "./Heading";
import Investor from "./Investor";

import { Flex, Text, Box } from "@chakra-ui/react";

export default function SponsorSection() {
	return (
		<>
			<Flex
				w="100%"
				p="2rem"
				bgColor="bootcamp.dark_blue"
				direction={"column"}
				align="center"
				justify="center">
				<Heading color="light" align="center" label="Sponsors" />
				<Flex direction="column" wrap="wrap" align="center" justify="center">
					<Text fontSize="2.5rem" fontWeight="700" textColor="white" textAlign="center">
						Title Sponsor
					</Text>
					<Box width="2rem" mb="1rem" border="1px" borderColor="white"></Box>
				</Flex>
				<Flex
					direction={{ base: "column", md: "row" }}
					wrap="wrap"
					align="center"
					justify="center"
					borderRadius="0 30px ">
					<MainSponsor
						name="Westbridge Capital"
						text="Title Sponsor"
						img="westbridge"
						link="https://westbridgecap.com/"
					/>
				</Flex>
				<Flex
					direction="column"
					wrap="wrap"
					align="center"
					justify="center"
					marginTop="60px">
					<Text fontSize="2rem" fontWeight="700" textColor="white" textAlign="center">
						Powered By Sponsor
					</Text>
					<Box width="2rem" mb="1rem" border="1px" borderColor="white"></Box>
            </Flex>
            <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"
            >
                <MainSponsor 
                    name="IITMAA Batch of 1990"
                    text="Powered By Sponsor"
                    img="batchOf1990"
                    link="#"
                />
            </Flex>
            <Flex 
                direction="column"
                wrap="wrap"
                align="center"
                justify="center"
                marginTop="16px"
            >
                <Text
                	fontSize="2rem"
					fontWeight="700"
                    textColor="white"
					textAlign="center">
                Recognized By
                </Text>
            <Box width="2rem" mb="1rem" border='1px' borderColor="white"></Box>

            </Flex>
            <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"

            >
                <MainSponsor 
                    name="UNESCO"
                    text="Recognized By"
                    img="unesco"
                    link="#"
                />
                <MainSponsor 
                    name="G20"
                    text="Recognized By"
                    img="G20"
                    link="#"
                />
            </Flex>
            <Flex 
                direction="column"
                wrap="wrap"
                align="center"
                justify="center"
                marginTop="16px"
            >
                <Text
                	fontSize="2rem"
					fontWeight="700"
                    textColor="white"
					textAlign="center">
                Platinum Sponsors
                </Text>
                <Box width="2rem" mb="1rem" border='1px' borderColor="white"></Box>

            </Flex>
            <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"

            >
                <MainSponsor 
                    name="DBS"
                    text="Platinum Sponsor"
                    img="dbsBank"
                    link="https://www.dbs.com/in/index/default.page"
                />
                <MainSponsor 
                    name="Zolvit"
                    text="Platinum Sponsor"
                    img="zolvit"
                    link="https://dev.zolvit.com/"
                />
            </Flex>
            <Flex 
                direction="column"
                wrap="wrap"
                align="center"
                justify="center"
                marginTop="16px"

            >
                <Text
                	fontSize="2rem"
					fontWeight="700"
                    textColor="white"
					textAlign="center">
                Ecosystem Partners
                </Text>
                <Box width="2rem" mb="1rem" border='1px' borderColor="white"></Box>

            </Flex>
            <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"
                marginBottom={{"md":16}}

            >
                <MainSponsor 
                    name="IITM Entrepreneurs Forum"
                    text="Ecosystem Partner"
                    img="iitmef"
                    link="#"
                />
                <MainSponsor 
                    name="IITM Incubation Cell"
                    text="Ecosystem Partner"
                    img="iitmic"
                    link="#"
                />
                <MainSponsor 
                    name="IITM Alumni Association"
                    text="Ecosystem Partner"
                    img="iitmaa_logo"
                    link="#"
                />
                
            </Flex>

            <Flex 
                direction="column"
                wrap="wrap"
                align="center"
                justify="center"
            >
                <Text
                	fontSize="2rem"
					fontWeight="700"
                    textColor="white"
					textAlign="center">
                    Other Sponsors
                </Text>
                <Box width="2rem" mb="1rem" border='1px' borderColor="white"></Box>

            </Flex>
            <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"
                marginBottom={{"md":24}}

            >
                <Sponsor 
                    name="HPCL"
                    text="HealThy Powered By Sponsor"
                    img="hpcl"
                    link="#"
                />
                <Sponsor 
                    name="Deutsche Bank"
                    text="Inspirit Title Sponsor"
                    img="deutscheBank"
                    link="https://www.db.com/"
                />
                <Sponsor 
                    name="OVHcloud"
                    text="Elevate Title Sponsor"
                    img="ohvCloud"
                    link="https://www.ovhcloud.com/en/"
                />
                <Sponsor 
                    name="StartupTN"
                    text="Hackstart Title Sponsor"
                    img="startupTN"
                    link="https://startuptn.in/about/"
                />
            </Flex>
            <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"
                marginBottom={{"md":24}}
            >

                <Sponsor 
                    name="SIDBI"
                    text="Event Sponsor- Bootcamp"
                    img="sidbi"
                    link="https://www.sidbi.in/en"
                />
                <Sponsor 
                    name="TIIC"
                    text="Gold Sponsor "
                    img="tiic"
                    link="#"
                />
                <Sponsor 
                    name="ITC"
                    text="Event Sponsor- Bootcamp"
                    img="ITC"
                    link="https://www.itcportal.com/"
                />
                <Sponsor 
                    name="The PLM Ecosystem "
                    text="Event Sponsor- Solve To Evolve"
                    img="plm"
                    link="https://www.theplmecosystem.com/"
                />
                
            </Flex>
            <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="space-evenly"
                marginBottom={{"md":24}}

            >
                <Sponsor 
                    name="JetBrains"
                    text="Platform Sponsor - Hackstart"
                    img="jetBrains"
                    link="https://www.jetbrains.com/community/education/#students"
                />
                <Sponsor 
                    name="Indian Talent"
                    text="Platform Sponsor - E-21"
                    img="indianTalent"
                    link="https://www.indiantalent.org/"
                />
                <Sponsor 
                    name="StockPe"
                    text="Platform Sponsor - Stocks Are High"
                    img="stockPe"
                    link="https://stockpe.in/"
                />
                <Sponsor 
                    name="Imarticus Learning"
                    text="Platform Sponsor- BSG"
                    img="Imarticus"
                    link="https://imarticus.org/"
                />
                 
            </Flex>
            <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="space-evenly"
                marginBottom={{"md":24}}

            >
                <Sponsor 
                    name="Metamorphosis"
                    text="Event Sponsor- E-21"
                    img="metamorphosis"
                    link="https://metamorphosisedu.com/"
                />
                <Sponsor 
                    name="AWS"
                    text="Cloud Service Sponsor"
                    img="aws"
                    link="https://aws.amazon.com/?nc2=h_lg"
                />
                <Sponsor 
                    name="Freshworks"
                    text="SAAS Sponsor"
                    img="freshworks"
                    link="https://www.freshworks.com/?tactic_id=3419410&utm_source={GoogleAdwords}&utm_medium=FWorks-Search-India&utm_campaign=FWorks-Search-India&utm_term=freshworks&device=m&matchtype=p&network=g&gclid=Cj0KCQjw8e-gBhD0ARIsAJiDsaUS5BSUnk6lAU2rveW9N__trfp_b8Yjl21Snxw2YKn4EwKeMxKPoYQaAhr4EALw_wcB&gclid=Cj0KCQjw8e-gBhD0ARIsAJiDsaUS5BSUnk6lAU2rveW9N__trfp_b8Yjl21Snxw2YKn4EwKeMxKPoYQaAhr4EALw_wcB"
                />
                <Sponsor 
                    name="OkayStartup"
                    text="Bootcamp In Association With Sponsor"
                    img="okayStartup"
                    link="https://okaystartup.com/"
                />
                
            </Flex>

            <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"
                marginBottom={{"md":24}}

            >
                <Sponsor 
                    name="Camixel Technologies"
                    text="Workshop Sponsor"
                    img="cptl"
                    link="https://www.camixel.com/"
                />
                <Sponsor 
                    name="Kokuyo Camlin"
                    text="Stationery Sponsor"
                    img="KokuyoCamlin"
                    link="https://www.kokuyocamlin.com/camel/"
                />
                <Sponsor 
                    name="Abhibus"
                    text="Transit Sponsor"
                    img="abhibus"
                    link="https://www.abhibus.com/"
                />
                <Sponsor 
                    name="PrintWear"
                    text="Merchandise Sponsor"
                    img="printwear"
                    link="http://www.printwear.net/"
                />
                
            </Flex>
            <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"
                marginBottom={{"md":24}}

            >   
                <Sponsor 
                    name="EaseMyTrip"
                    text="Travel Sponsor"
                    img="easyMyTrip"
                    link="https://www.easemytrip.com/?utm_source=google&utm_medium=cpc&utm_campaign=788997081&utm_content=39319940377&utm_term=easemytrip&utm_campaign=788997081&utm_source=g_c&utm_medium=cpc&utm_term=e_easemytrip&adgroupid=39319940377&gclid=Cj0KCQjw8e-gBhD0ARIsAJiDsaXQcgAphUCeQxhzLaU-A6ezPyXi6_LZiESAnhIuxje4RrpzVYVHlyMaAiAfEALw_wcB"
                />
                <Sponsor 
                    name="BeeCabs"
                    text="Mobility Sponsor"
                    img="beeCabs"
                    link="https://www.beecabs.in/"
                />
                <Sponsor 
                    name="Ixigo"
                    text="Airline Sponsor"
                    img="ixigo"
                    link="https://www.ixigo.com/"
                />
                <Sponsor 
                    name="Boat"
                    text="Audio Sponsor"
                    img="boat"
                    link="https://www.boat-lifestyle.com/"
                />
                
            </Flex>
            <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"
            >   
                <Sponsor 
                    name="Microsoft for Startups"
                    text="EDD Powered By sponsor"
                    img="microsoft"
                    link="https://www.microsoft.com/en-us/startups"
                />
                <Sponsor 
                    name="Unstop"
                    text="Online Hosting Sponsor"
                    img="unstop"
                    link="https://unstop.com/"
                />
                <Sponsor 
                    name="Flying Machine"
                    text="Lifestyle Partner"
                    img="flyingmachine"
                    link="#"
                />
                <Sponsor 
                    name="Lenskart"
                    text="Eyewear Partner"
                    img="lens"
                    link="#"
                />

            </Flex>
            <Flex 
                direction="column"
                marginTop={32}
                wrap="wrap"
                align="center"
                justify="center"
            >
                <Text
                	fontSize="2rem"
					fontWeight="700"
                    textColor="white"
					textAlign="center">
                Media Partners
                </Text>
                <Box width="2rem" mb="1rem" border='1px' borderColor="white"></Box>

            </Flex>
            <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"
            >   
                <Investor 
                    name="Karo Start-Up"
                    img="karostartup"
                    link="#"
                />
                <Investor 
                    name="Startup News"
                    img="startupnews"
                    link="#"
                />
                <Investor 
                    name="Inc 42"
                    img="inc42"
                    link="#"
                />
                <Investor 
                    name="IESA"
                    img="IESA"
                    link="#"
                />
                <Investor 
                    name="DailyHunt"
                    img="dailyhunt"
                    link="#"
                />
               

            </Flex>

            <Flex 
                direction="column"
                marginTop={32}
                wrap="wrap"
                align="center"
                justify="center"
            >
                <Text
                	fontSize="2rem"
					fontWeight="700"
                    textColor="white"
					textAlign="center">
                Investment Partners
                </Text>
                <Box width="2rem" mb="1rem" border='1px' borderColor="white"></Box>

            </Flex>
            <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"
                marginBottom={{"md":24}}

            >
                 <Investor
                    name="100 Open Startups" 
                    img="openStartups" 
                    link="#"
                />
                 <Investor
                    name="Astir Ventures" 
                    img="astir" 
                    link="#"
                />
                 <Investor
                    name="Beej Network" 
                    img="beej" 
                    link="#"
                />
                 <Investor
                    name="Campus Fund" 
                    img="campus" 
                    link="#"
                />
                 <Investor
                    name="Eximius Ventures" 
                    img="eximius" 
                    link="#"
                />
                </Flex>
                <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"
                marginBottom={{"md":24}}

                >
                 <Investor
                    name="Faad Network " 
                    img="faad" 
                    link="#"
                />
                 <Investor
                    name="Firstcheque" 
                    img="firstCheque" 
                    link="#"
                />
                 <Investor
                    name="Hyderabad Angels" 
                    img="hydrabadAngels" 
                    link="#"
                />
                 <Investor
                    name="Inflection Point Ventures" 
                    img="inflection" 
                    link="#"
                />
                 <Investor
                    name="Pravega Ventures" 
                    img="pravega" 
                    link="#"
                />
                </Flex>
                <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"
                marginBottom={{"md":24}}

                >
                 <Investor
                    name="RPSG Capital Ventures" 
                    img="RPSG" 
                    link="#"
                />
                 <Investor
                    name="Satz Venture Nurturers" 
                    img="satzAdvisor" 
                    link="#"
                />
                 <Investor
                    name="Speciale Invest" 
                    img="specialInvest" 
                    link="#"
                />
                 <Investor
                    name="StartupXseed" 
                    img="startupXseed" 
                    link="#"
                />
                 <Investor
                    name="SucSEED Ventures" 
                    img="sucseed" 
                    link="#"
                />
                </Flex>
                <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"
                marginBottom={{"md":24}}

                >
                 <Investor
                    name="Titan Capital" 
                    img="titan" 
                    link="#"
                />
                 <Investor
                    name="WaterBridge" 
                    img="waterbridge" 
                    link="#"
                />
                 <Investor
                    name="We Founder Circle" 
                    img="WFC" 
                    link="#"
                />
                 <Investor
                    name="YourNest" 
                    img="yourNest" 
                    link="#"
                />
                
            </Flex>
        </Flex>
        </>
    )
}