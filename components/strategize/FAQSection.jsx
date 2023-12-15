import Question from './Question';
import Heading from './Heading';
import {Flex} from '@chakra-ui/react';

export default function FAQSection(){
    return  (
        <>
        <Flex id="faq" justify="center" direction="column" p="2rem" bgColor="bootcamp.dark_blue" width="100%">
            <Heading align='center' color='light' label='FAQ'></Heading>
            <Question
                question="How will the problem statement for the SDGs be provided?"
                answer="The problem statement will be launched on the official portal for Strategize, as well as over Unstop. The teams clearing for finals will be mailed the problem statement with other relevant details regarding the final round." />
            <Question
                question="Are the rounds offline or online?"                
                answer="Round 1, the workshop, and Round 2 will be online and the finale will be offline for the qualified teams." />
            <Question 
                question="Can we use external resources to support our policy proposal?"
                answer="Yes, participants are encouraged to use external resources to support their policy proposal. However, it is important to ensure that all sources are cited appropriately and that the policy proposal is entirely original."/>
            <Question 
                question="Are there any prerequisites for participation?"
                answer="No pre-requisites at all! Just put on the best of your thinking caps!" />
            <Question 
                question="Can participants from a team belong  to different educational institutions?"
                answer="Yes, cross institute teams may participate in Strategize." />
            <Question 
                question="When do we get the timing details for the offline rounds?"
                answer="All the details regarding timing and venue will be conveyed through email and WhatsApp." />
            <Question 
                question="What will be the mode of the workshop?"
                answer="The workshop will be conducted in online mode." />
            <Question 
                question="Who are eligible for the workshop?"
                answer="Teams which qualify Round 1, will be eligible for the workshop on policy making." />
            <Question
                question="Who will cover the cost of stay and travelling to IIT Madras?"
                answer="Please ensure that you arrange for your travel and accommodation in advance, as we are not responsible for any of the above." />
            <Question
                question="Can participants submit more than one policy proposal?"
                answer="No, teams can only submit one policy proposal." />
        </Flex>
        </>
    )
}