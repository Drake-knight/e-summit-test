import {Flex, Text, Box} from '@chakra-ui/react';

export default function Heading({label, align, color}){
    if(align == "left"){
        align = "start";
    } else {
        //default is center aligned
        align = "center"
    }
    if(color == "light"){
        color = "white"
    } else {
        //default is dark colors
        color = "black"
    }
    return (
        <>
        <Flex justify="center" align={align} textAlign={align=="center" ? align : "left"} color={color} direction="column" w={"100%"}>
            <Text fontSize="4rem" fontWeight="700">
                {label}
            </Text>
            <Box width="2rem" mb="1rem" border='1px' borderColor={color}></Box>
        </Flex>
        </>
    )
}