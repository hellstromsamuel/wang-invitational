import { Box, Flex, Stack, Text, Link } from "@chakra-ui/react";
import { Person } from "./ContactInfo";
import Image from "next/image";

interface Props {
  person: Person;
}

export const ContactPerson = (props: Props) => {
  const { person } = props;

  return (
    <Box>
      <Box fontSize={"xl"}>
        <Image
          style={{
            marginTop: 20,
            marginBottom: 20,
            borderRadius: "50%",
          }}
          src={"/persons/" + person.imgUrl}
          alt={person.name}
          width={150}
          height={150}
        />
        <Text fontWeight={"bold"} fontSize={"xl"}>
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
