import Sponsor from './Sponsor';
import Heading from './Heading';
import { Flex} from '@chakra-ui/react';

export default function SponsorSection(){
    return (
        <>
        <Flex w="100%" p="2rem" bgColor="bootcamp.dark_blue" direction={"column"} align="center" justify="center">
            <Heading color="light" align="center" label="Sponsors" />
            <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"
            >
                 <Sponsor   
                    name="StartupTN" 
                    text="Title partner" 
                    img="startuptn" 
                    link="https://startuptn.in/"
                />
            </Flex>
            <Flex 
                direction={{"base": "column", "md": "row"}}
                wrap="wrap"
                align="center"
                justify="center"
            >
                 <Sponsor   
                    name="JetBrains" 
                    text="Platform partner" 
                    img="jetbrains" 
                    link="https://www.jetbrains.com/"
                />
               
            </Flex>
        </Flex>
        </>
    )
}