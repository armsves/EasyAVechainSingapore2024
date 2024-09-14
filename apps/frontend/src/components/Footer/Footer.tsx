"use client";
import {
  VStack,
  Text,
  Container,
  HStack,
  Show,
  Link,
  Flex,
} from "@chakra-ui/react";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";

export const Footer: React.FC = () => {
  const desktopContent = (
    <VStack>
      <HStack
        color={"white"}
        justifyContent={"space-between"}
        w="full"
        borderTopColor={"#3e3c3a"}
        //  borderTopWidth={1}
        py={3}
      >
        <Text
          fontWeight={400}
          fontSize="14px"
          lineHeight="17px"
          color="#8c8c8c"
        >
          2024 VoluntEarn. All rights reserved.
        </Text>

        <Link href="https://www.x.com/armsves" isExternal>
          <FaXTwitter size={22} cursor={"pointer"} />
        </Link>
        <Link href="https://github.com/armsves/EasyAVechainSingapore2024" isExternal>
          <FaGithub size={22} cursor={"pointer"} />
        </Link>

      </HStack>
    </VStack>
  );

  const mobileContent = (
    <VStack>
      <VStack borderTopColor={"#3e3c3a"} borderTopWidth={1} py={8}>
        <Text
          fontWeight={400}
          fontSize="14px"
          lineHeight="17px"
          color="#8c8c8c"
          mt={6}
        >
          2024 VoluntEarn. All rights reserved.
        </Text>


      </VStack>
    </VStack>
  );

  return (
    <Flex bgColor={"#191714"}>
      <Container
        maxW={"container.xl"}
        display={"flex"}
        alignItems={"stretch"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
      >
        <Show above="md">{desktopContent}</Show>
        <Show below="md">{mobileContent}</Show>
      </Container>
    </Flex>
  );
};
