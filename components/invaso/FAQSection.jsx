import Question from './Question';
import Heading from './Heading';
import {Flex} from '@chakra-ui/react';

export default function FAQSection(){
    return  (
        <>
        <Flex id="faq" justify="center" direction="column" p="2rem" bgColor="bootcamp.dark_blue" width="100%">
            <Heading align='center' color='light' label='FAQ'></Heading>
            <Question
                question="Is team registration necessary?"                
                answer="Yes, participation is only allowed in teams of 2 or 3." />
            <Question 
                question="Is this event online?"
                answer="The first 2 rounds will be conducted online. The final round will be conducted at IIT Madras, during E-Summit 2023." />
            <Question 
                question="Can participants from a team belong  to different educational institutions?"
                answer="Yes. Invaso does not require participants to be from the same institute." />
        </Flex>
        </>
    )
}