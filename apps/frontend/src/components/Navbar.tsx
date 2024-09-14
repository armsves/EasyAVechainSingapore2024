import { Box, Container, HStack, Image, Text } from "@chakra-ui/react";
import { ConnectWalletButton } from "./ConnectWalletButton";
export const Navbar = () => {
  return (
    <Box
      px={0}
      position={"sticky"}
      top={0}
      zIndex={10}
      py={2}
      h={"auto"}
      w={"full"}
      bg={"#f7f7f7"}
    >
<Container
  w="full"
  display="flex"
  flexDirection="row"
  justifyContent="space-between"
  alignItems="center"
  maxW="container.xl"
>
  <HStack alignSelf="center" justifyContent="flex-start" flex={1}>
    <Image src="/logo.jpg" h={20} borderRadius={20} />
    <Text fontSize={24} fontWeight={800}>
      VoluntEarn
    </Text>
  </HStack>

  <HStack alignSelf="center" justifyContent="center" flex={1}>
    <Image src="/banner.jpg" borderRadius={16} />
  </HStack>

  <HStack flex={1} spacing={4} justifyContent="flex-end">
    <ConnectWalletButton />
  </HStack>
</Container>
    </Box>
  );
};
