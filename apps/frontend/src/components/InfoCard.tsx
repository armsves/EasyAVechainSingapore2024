import {
  Box,
  Card,
  Image,
  VStack,

} from "@chakra-ui/react";

export const InfoCard = () => {
  return (
    <Card w={"full"}>
      <Box p={3}>
          <VStack w={"full"} 
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    spacing={{ base: 2, md: 4 }}>
            <Image src="/refugio2.jpg" borderRadius={16} />
            <Image src="/refugio3.jpg" borderRadius={16} />
            <Image src="/refugio4.jpg" borderRadius={16} />
          </VStack>
      </Box>
    </Card>
  );
};
