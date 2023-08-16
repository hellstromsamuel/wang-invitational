import { Box, Flex, Stack, Text, Link, Image } from "@chakra-ui/react";
import { Person } from "./ContactInfo";

interface Props {
  person: Person;
}

export const ContactPerson = (props: Props) => {
  const { person } = props;

  return (
    <Box>
      <Box fontSize={"xl"}>
        <Image
          src={"/persons/" + person.imgUrl}
          alt={person.name}
          height={"150px"}
          w={"auto"}
          rounded={"full"}
          my={5}
        />
        <Text fontWeight={"bold"} fontSize={"xl"} mt={2}>
          {person.name}
        </Text>
        <Text color={"gray"} lineHeight={"none"}>
          {person.role}
        </Text>
      </Box>

      {person.phone && person.email && (
        <Stack spacing={"0"} mt={5} fontSize={"xl"}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 0, md: 2 }}
          >
            <Text fontWeight={"bold"}>Telefon: </Text>
            <Link fontWeight={"normal"} href={"tel:" + person.phone}>
              {person.phone}
            </Link>
          </Flex>
          <Flex
            mt={1}
            direction={{ base: "column", md: "row" }}
            gap={{ base: 0, md: 2 }}
          >
            <Text fontWeight={"bold"}>Epost: </Text>
            <Link href={"mailto:" + person.email}>{person.email}</Link>
          </Flex>
        </Stack>
      )}
    </Box>
  );
};
