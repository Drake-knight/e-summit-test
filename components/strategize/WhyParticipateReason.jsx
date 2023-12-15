import {Flex, Text} from '@chakra-ui/react';
import {FaTrophy, FaMoneyBillWave, FaChess, FaUsers, FaHandshake, FaUserTie, FaUniversity} from 'react-icons/fa';
import {TbCertificate} from 'react-icons/tb';

const iconSize = 40;

const iconToElementMap = {
    "trophy": <FaTrophy size={iconSize}></FaTrophy>,
    "bill": <FaMoneyBillWave size={iconSize}></FaMoneyBillWave>,
    "certificate": <TbCertificate size={iconSize}></TbCertificate>,
    "handshake": <FaHandshake size={iconSize}></FaHandshake>,
    "chess": <FaChess size={iconSize}></FaChess>,
    "people": <FaUsers size={iconSize}></FaUsers>,
    "tie": <FaUserTie size={iconSize}></FaUserTie>,
    "university": <FaUniversity size={iconSize}></FaUniversity>,
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