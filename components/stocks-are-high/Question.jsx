import {Flex, Box, Text, Collapse, useDisclosure} from '@chakra-ui/react';
import {FaQuestionCircle} from 'react-icons/fa';

export default function Question({question, answer}){
    const {isOpen, onToggle} = useDisclosure();

    return  (
        <>
        <Box m="0.5rem" p="1rem" border="1px" borderRadius={"5px"} borderColor="bootcamp.gray" color="bootcamp.gray">
            <Flex w="100%" onClick={onToggle} align="center" justify={"space-between"} cursor="pointer">
                <Flex direction="row" align="center">
                    <Box minW="25px" minH="25px">
                        <FaQuestionCircle size={25}></FaQuestionCircle>
                    </Box>
                    <Text fontSize="1rem" fontStyle={"italic"} mx="1rem">{question}</Text>
                </Flex>
                <Text fontSize="1.2rem">{isOpen ? '-' : '+' }</Text>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <Text mt="1rem" fontSize={"1rem"} color="white">
                    {answer}
                </Text>
            </Collapse>
        </Box>
        </>
    )
}