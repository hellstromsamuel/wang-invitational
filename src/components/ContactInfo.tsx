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

export const ContactInfo = () => {
  const persons: Person[] = [
    {
      name: "Espen Eriksson",
      role: "SPORTSJEF INNEBANDY ROMERRIKE",
      phone: "41677319",
      email: "espen.eriksson@wang.no",
      imgUrl: "espen_eriksson.jpeg",
    },
    {
      name: "Geir Nordseth",
      role: "SPORTSJEF INNEBANDY OSLO",
      phone: "22129700",
      email: "geir.nordseth@wang.no",
      imgUrl: "geir_nordseth.jpeg",
    },
  ];
  return (
    <CardLayout>
      <Heading as="h2" size="xl">
        Kontakt
      </Heading>

      <Flex
        gap={{ base: 10, md: 20 }}
        direction={{ base: "column", md: "row" }}
      >
        {persons.map((person, index) => (
          <ContactPerson key={index} person={person} />
        ))}
      </Flex>
    </CardLayout>
  );
};
