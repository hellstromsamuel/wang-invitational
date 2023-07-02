import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { CardLayout } from "./CardLayout";

export const ContactInfo = () => {
  return (
    <CardLayout>
      <Heading as="h2" size="lg">
        Kontakt
      </Heading>

      <Box fontSize={"xl"}>
        <Text fontWeight={"bold"} fontSize={"xl"} mt={2}>
          Espen Eriksson
        </Text>
        <Text color={"gray"} lineHeight={"none"}>
          SPORTSJEF INNEBANDY
        </Text>
      </Box>

      <Stack spacing={"0"} mt={5} fontSize={"xl"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 0, md: 2 }}
        >
          <Text fontWeight={"bold"}>Telefon: </Text>
          <Link fontWeight={"normal"} href="tel:41677319">
            41677319
          </Link>
        </Flex>
        <Flex
          mt={1}
          direction={{ base: "column", md: "row" }}
          gap={{ base: 0, md: 2 }}
        >
          <Text fontWeight={"bold"}>Epost: </Text>
          <Link href="mailto:espen.eriksson@wang.no">
            espen.eriksson@wang.no
          </Link>
        </Flex>
      </Stack>
    </CardLayout>
  );
};
