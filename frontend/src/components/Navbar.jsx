import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container
      maxW={"100%"}
      px={4}
      bg={useColorModeValue("gray.100", "gray.900")}
      boxShadow={"md"}
      mb={4}
      borderRadius={"md"}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, teal.500, blue.500)"}
          bgClip="text"
        >
          <Link to="/"> Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to="/create">
            <Button>
              <CiSquarePlus fontSize={20}></CiSquarePlus>
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "🌒" : "🌤"}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
