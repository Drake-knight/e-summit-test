import {Flex, Menu, MenuButton, MenuList, MenuItem, Link, HStack} from '@chakra-ui/react';
import ESummitLogo from '../../public/assets/illustrations/bootcamp/esummit_clean_black.png';
import Image from 'next/image';
import {FaBars} from 'react-icons/fa';

export default function Navbar(){
    return (
        <>
        <Flex 
            w="100%" 
            justify="space-between" 
            align="center" 
            px="2rem" 
            py="1rem" 
            bgColor="white" 
            boxShadow="md" 
            position="sticky" 
            top="0px" 
            right="0px"
            zIndex={"10"}
        >
            <Image src={ESummitLogo} alt="E-Summit logo" height={50} width={50} />
            <Flex align="center" fontSize="1rem" justify="center" color="bootcamp.brown" display={{"base": "none", "md": "block"}}>
                <HStack spacing="1rem">
                <Link href="/">HOME</Link>
                <Link href="#about">ABOUT</Link>
                <Link href="#perks">PERKS</Link>
                <Link href="#tracks">TRACKS</Link>
                <Link href="#sponsors">SPONSORS</Link>
                <Link href="#timeline">TIMELINE</Link>
                <Link href="#faq">FAQ</Link>
                <Link href="#contact">CONTACT</Link>
                <Link href="#">REGISTER</Link>
                </HStack>
            </Flex>
            <Flex align="center" justify="center" display={{"base": "block", "md": "none"}}>
                <Menu>
                    <MenuButton>
                        <FaBars size={30}></FaBars>
                    </MenuButton>
                    <MenuList>
                        <MenuItem> <Link href="/">HOME</Link></MenuItem>
                        <MenuItem><Link href="#about">ABOUT</Link></MenuItem>
                        <MenuItem> <Link href="#perks">PERKS</Link></MenuItem>
                        <MenuItem><Link href="#tracks">TRACKS</Link></MenuItem>
                        <MenuItem> <Link href="#sponsors">SPONSORS</Link></MenuItem>
                        <MenuItem><Link href="#timeline">TIMELINE</Link></MenuItem>
                        <MenuItem><Link href="#faq">FAQ</Link></MenuItem>
                        <MenuItem><Link href="#contact">CONTACT</Link></MenuItem>
                        <MenuItem><Link href="#">REGISTER</Link></MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
        </>
    )
}