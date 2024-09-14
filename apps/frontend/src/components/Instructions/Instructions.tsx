import { Card, Flex } from "@chakra-ui/react";
import { Step } from "./Step";

const Steps = [
  {
    icon: "/steps/step1.jpg",
    title: "Volunteer in a shelter",
    description: "Volunteer in an animal shelter.",
  },
  {
    icon: "/steps/step2.jpg",
    title: "Upload a photo of yourself from the shelter",
    description: "Upload your photo and AI (TODO) will verify it with geolocation.",
  },
  {
    icon: "/steps/step3.jpg",
    title: "Get reward for helping the animals",
    description: "Earn B3TR for helping animals in need.",
  },
];

export const Instructions = () => {
  return (
    <Card mt={3} w={"full"}>
      <Flex p={{ base: 4 }} w="100%" direction={{ base: "column", md: "row" }}>
        {Steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </Flex>
    </Card>
  );
};
