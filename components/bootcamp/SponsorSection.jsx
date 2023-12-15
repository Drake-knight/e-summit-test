import Sponsor from './Sponsor';
import Heading from './Heading';
import { Flex} from '@chakra-ui/react';

export default function SponsorSection(){
    return (
        <>
        <Flex w="100%" p="2rem" bgColor="bootcamp.dark_blue" direction={"column"} align="center" justify="center">
            <Heading color="light" align="center" label="Partners" />
            <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"
            >
                 <Sponsor   
                    name="The Startup Buddy" 
                    text="Platform partner" 
                    img="startupBuddy" 
                    link="https://www.thestartupbuddy.co/"
                />
                <Sponsor 
                    name="Campus fund"
                    text="Investment and resource partner"
                    img="campusFund"
                    link="https://www.yourcampusfund.com/"
                />
                <Sponsor 
                    name="Omidyar network India"
                    text="Investment and resource partner"
                    img="omidyar"
                    link="https://www.omidyarnetwork.in/"
                />
                <Sponsor 
                    name="NSRCEL"
                    text="Incubation partner"
                    img="nsrcel"
                    link="https://nsrcel.org/"
                />
                <Sponsor 
                    name="Deshpande startups"
                    text="Incubation partner"
                    img="deshpande"
                    link="https://www.deshpandestartups.org/"
                />
                <Sponsor 
                    name="Wadhwani foundation"
                    text="Incubation partner"
                    img="wadhwani"
                    link="https://www.wfglobal.org/"
                />
                <Sponsor 
                    name="Chennai Angels"
                    text="Investment partner"
                    img="chennaiAngels"
                    link="https://www.thechennaiangels.com/"
                />
                <Sponsor 
                    name="Chennai Web3 Meetup"
                    text="Community partner"
                    img="chennaiWeb3"
                    link="https://twitter.com/Web3Chennai"
                />
                <Sponsor 
                    name="ITC"
                    text="Agritech Track Partner"
                    img="itc"
                    link="https://www.itcportal.com/"
                />
                <Sponsor 
                    name="SIDBI"
                    text="Agnostic Track Partner"
                    img="sidbi"
                    link="https://www.sidbi.in/en"
                />
            </Flex>
           
        </Flex>
        </>
    )
}