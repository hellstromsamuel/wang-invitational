import { Box, Flex, Heading, Image } from "@chakra-ui/react";
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

      <Heading
        as="h1"
        size={{ base: "2xl", md: "4xl" }}
        position={"absolute"}
        color="white"
      >
        <SectionLayout>WANG Invitational</SectionLayout>
      </Heading>
    </Flex>
  );
};
