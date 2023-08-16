import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { CardLayout } from "./CardLayout";
import { ContactPerson } from "./ContactPerson";

export interface Person {
  name: string;
  role: string;
  phone: string;
  email: string;
  imgUrl: string;
}

export const Coaches = () => {
  const coaches_romerrike: Person[] = [
    {
      name: "Rune Ali Zouhar",
      role: "TRENER INNEBANDY",
      phone: "",
      email: "",
      imgUrl: "rune_ali_zouhar.jpeg",
    },
    {
      name: "Henrik Pettersen",
      role: "TRENER INNEBANDY",
      phone: "",
      email: "",
      imgUrl: "henrik_pettersen.jpeg",
    },
    {
      name: "Nicholay Halvorsen",
      role: "TRENER INNEBANDY",
      phone: "",
      email: "",
      imgUrl: "nicholay_halvorsen.jpeg",
    },
  ];

  const coaches_oslo: Person[] = [
    {
      name: "Frank Nordseth",
      role: "TRENER INNEBANDY",
      phone: "",
      email: "",
      imgUrl: "frank_nordseth.jpeg",
    },
    {
      name: "Christer Rönnmark",
      role: "TRENER INNEBANDY",
      phone: "",
      email: "",
      imgUrl: "christer_ronnmark.jpeg",
    },
  ];

  return (
    <CardLayout>
      <Heading as="h2" size="xl" mb={5}>
        Trenere
      </Heading>

      <Heading as="h3" size="lg" my={2}>
        Romerrike
      </Heading>
      <Flex gap={{ base: 10, md: 20 }} flexWrap={"wrap"}>
        {coaches_romerrike.map((person, index) => (
          <ContactPerson key={index} person={person} />
        ))}
      </Flex>

      <Box my={5} />

      <Heading as="h3" size="lg" my={2}>
        Oslo
      </Heading>
      <Flex gap={{ base: 10, md: 20 }} flexWrap={"wrap"}>
        {coaches_oslo.map((person, index) => (
          <ContactPerson key={index} person={person} />
        ))}
      </Flex>
    </CardLayout>
  );
};
