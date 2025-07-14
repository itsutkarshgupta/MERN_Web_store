import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { useColorMode } from "@chakra-ui/react";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"100%"} px={4} boxShadow={"md"} mb={4} borderRadius={"md"}>
      <Flex
        h={20}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.900, blue.400)"}
          bgClip="text"
        >
          <Link to="/"> Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to="/">
            <Button>
              <IoHomeOutline fontSize={20}></IoHomeOutline>
            </Button>
          </Link>
          <Link to="/create">
            <Button>
              <FaRegPlusSquare fontSize={20}></FaRegPlusSquare>
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "🌙" : "☀️"}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
