import {Box, Flex, Text} from '@chakra-ui/react';
import {FaRocket, FaStopwatch, FaThumbsUp, FaVideo, FaUserTag, FaComments, FaUserTie, FaUserNinja, FaUserAstronaut, FaUserGraduate} from 'react-icons/fa';

const iconSize = 25;
const iconToElementMap = {
    "rocket": <FaRocket size={iconSize} />,
    "stopwatch": <FaStopwatch size={iconSize} />,
    "thumbsup": <FaThumbsUp size={iconSize} />,
    "video": <FaVideo size={iconSize} />,
    "personTag": <FaUserTag size={iconSize} />,
    "comments": <FaComments size={iconSize} />,
    "ninja": <FaUserNinja size={iconSize} />,
    "astronaut": <FaUserAstronaut size={iconSize} />,
    "tie": <FaUserTie size={iconSize} />,
    "graduate": <FaUserGraduate size={iconSize} />,
}

export default function TimelineEvent({icon, text, date}){
    return (
        <>
        <Flex color="white" align="center" my="2rem">
            <Flex 
                align="center" 
                justify="center" 
                color="white" 
                minW={2*iconSize} 
                minH={2*iconSize} 
                borderRadius={iconSize}
                style={{
                    backdropFilter: "blur(24px) saturate(180%)",
                    backgroundColor: "rgba(8, 8, 74, 0.75)",
                }}
            >
                {iconToElementMap[icon]}
            </Flex>
            <Flex direction="column" mx="2rem">
                <Text fontSize="1.4rem" fontWeight={700}>{text}</Text>
                <Text fontSize="1rem" fontWeight={400}>{date}</Text>
            </Flex>
        </Flex>
        </>
    )
}