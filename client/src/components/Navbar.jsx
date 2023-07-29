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

import { Link as ReactLink } from "react-router-dom";
import { CloseIcon, H, HamburgerIcon } from "@chakra-ui/icons";
import { GiWorld } from "react-icons/gi";
import { FaTwitter, FaYoutube, FaFacebook, FaInstaagram } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
    { linkName: "About", path: "./about" },
    { linkName: "Contact", path: "./contact" },
];

const blogLinks = [
    { linkName: "All Blogs", category: "all" },
    { linkName: "Latest Blog", path: "latest" },
    { linkName: "Europe", path: "europe" },
    { linkName: "America", path: "america" },
    { linkName: "Asia", path: "asia" },
    { linkName: "Oceania", path: "oceania" },
    { linkName: "Africa", path: "africa" },
];

const NavLink = ({ path, children }) => (
    <Link
        as={ReactLink}
        to={path}
        px={2}
        py={2}
        fontWeight="semibold"
        _hover={{ textDecoration: "none", bg: mode("blue.100", "blue.800") }}>
        {children}
    </Link>
);

const Navbar = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const [logoHover, setLogoHover] = useState(false);

    return (

        <Box bg={mode("blue.200", "blue.900")} px={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <IconButton bg={mode("blue.200", "blue.900")}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen} />
                <HStack>
                    <Link
                        as={ReactLink}
                        to="/"
                        style={{ textDecoration: "none" }}
                        onMouseEnter={() => setLogoHover(true)}
                        onMouseLeave={() => setLogoHover(false)} >
                        <Flex alignItems="center">
                            <Icon
                                as={GiWorld}
                                h="10"
                                w="10"
                                color={logoHover ? "gray.200" : mode("gray.600", "gray.400")} />
                            <Text fontWeight="extrabold" color={mode("gray.600", "gray.400")}>
                                TravelBay
                            </Text>
                        </Flex>
                    </Link>
                </HStack>
            </Flex>
        </Box>
    );
};

export default Navbar