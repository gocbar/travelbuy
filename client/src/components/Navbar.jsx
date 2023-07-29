import React from "react";
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Icon,
    Text,
    useDisclosure,
    Stack,
    useColorMode,
    useColorModeValue as mode,
    MenuItem,
    Menu,
    MenuList,
    MenuButton,
    ButtonGroup
} from "@chakra-ui/react";

import {Link as ReactLink} from "react-router-dom";
import { CloseIcon, H, HamburgerIcon } from "@chakra-ui/icons";
import {GiWorld} from "react-icons/gi";
import {FaTwitter, FaYoutube, FaFacebook, FaInstaagram} from "react-icons/fa";
import {useState} from "react";
import {useSelector} from "react-redux";
import {MdAdminPanelSettings} from "react-icons/md";



const Navbar = () => {
    const {isOpen, onClose, onOpen} = useDisclosure();
    return (
        
         <Box bg={mode("blue.200", "blue.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton bg={mode("blue.200", "blue.900")} icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}/>
           </Flex>
         </Box>
       
    );
};

export default Navbar