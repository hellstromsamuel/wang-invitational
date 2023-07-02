import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { SectionLayout } from "./SectionLayout";

export const FrontPage = () => {
  return (
    <Flex
      position={"relative"}
      justifyContent={"center"}
      align={"center"}
      textAlign={"center"}
    >
      <Image
        src="/images/forside.png"
        alt="WANG Invitational"
        width={"100%"}
        maxH={"70vh"}
        objectFit={"cover"} // make it fill the box, but center from bottom
        objectPosition={"bottom"}
      />
      <Box
        h={"100%"}
        w={"100%"}
        bg={"black"}
        opacity={0.6}
        position={"absolute"}
      />

      <Box position={"absolute"} color={"white"} p={2}>
        <SectionLayout>
          <Heading as="h1" size={{ base: "2xl", md: "4xl" }}>
            WANG Invitational
          </Heading>
          <Text fontSize={{ base: "xl", md: "3xl" }} mt={5}>
            Samling på vegne av WANG Innebandy
          </Text>
          <Text fontSize={{ base: "xl", md: "3xl" }}>
            September 2023 (tid og sted kommer)
          </Text>
        </SectionLayout>
      </Box>
    </Flex>
  );
};
