import {Flex, Text, Box} from '@chakra-ui/react';

export default function Heading({label, align}){
    if(align == "left"){
        align = "start";
    } else {
        //default is center aligned
        align = "center"
    }
    return (
        <>
        <Flex justify="center" align={align} textAlign={align=="center" ? align : "left"} color="white" direction="column" w={"100%"}>
            <Text fontSize="2rem" fontWeight="700">
                {label}
            </Text>
            <Box width="2rem" mb="1rem" border='1px' borderColor="white"></Box>
        </Flex>
        </>
    )
}