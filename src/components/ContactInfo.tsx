import {
  Box,
  Divider,
  Grid,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

export const ContactInfo = () => {
  return (
    <Box>
      <Heading as="h2" size="lg">
        Kontakt informasjon
      </Heading>
      <Text fontWeight={"bold"} fontSize={"xl"} mt={2}>
        Espen Eriksson
      </Text>
      <Text color={"gray"} lineHeight={"none"}>
        Trener - WANG Romerrike innebandy
      </Text>
      <Divider my={2} />
      <Stack spacing={"0"}>
        <Text>
          Telefon: <Link href="tel:41677319">41677319</Link>
        </Text>
        <Text>
          Epost:{" "}
          <Link href="mailto:Espen.eriksson@wang.no">
            Espen.eriksson@wang.no
          </Link>
        </Text>
      </Stack>
    </Box>
  );
};
