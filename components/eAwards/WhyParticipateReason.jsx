import {Flex, Text} from '@chakra-ui/react';
import {FaTrophy, FaMoneyBillWave, FaInstagram} from 'react-icons/fa';
import {BsFillPersonFill} from 'react-icons/bs';
import { TbCertificate } from 'react-icons/tb';

const iconSize = 40;

const iconToElementMap = {
    "trophy": <FaTrophy size={iconSize}></FaTrophy>,
    "mentor": <BsFillPersonFill size={iconSize}></BsFillPersonFill>,
    "bill": <FaMoneyBillWave size={iconSize}></FaMoneyBillWave>,
    "certificate": <TbCertificate size={iconSize}></TbCertificate>,
    "instagram" : <FaInstagram size={iconSize}></FaInstagram>
};  

export default function WhyParticipateReason({icon, title, text}){
    return (
        <>
            <Flex direction="column" justify="center" align="center" color="white" width={{"base":"100%", "md":"30%"}} m="1rem" p="0.5rem">
                {iconToElementMap[icon]}
                <Text fontSize="1.5rem" fontWeight="700" my="1rem" textAlign="center">{title}</Text>
                <Text fontSize="1.2rem" textAlign={"center"} mb="1rem">{text}</Text>
            </Flex>
        </>
    )
}