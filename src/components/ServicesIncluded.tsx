import {
  Box,
  Flex,
  Grid,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CardLayout } from "./CardLayout";
import { ContactPerson } from "./ContactPerson";
import { CheckIcon } from "@chakra-ui/icons";

export interface Person {
  name: string;
  role: string;
  phone: string;
  email: string;
  imgUrl: string;
}

export const ServicesIncluded = () => {
  const servicesIncluded = [
    "Individuell utvikling ",
    "Samhandling med andre",
    "Skudd",
    "Teknikk",
    "Spesifikk målvaktstrening",
    "Videoanalyse av den enkelte",
    "Pluss mye mer",
  ];

  return (
    <CardLayout>
      <Heading as="h2" size="xl">
        Fokuset på disse dagene
      </Heading>

      <Grid
        mt={5}
        gap={5}
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
      >
        {servicesIncluded.map((service, index) => (
          <HStack key={index} spacing={5}>
            <CheckIcon color="green.500" fontSize="2xl" />
            <Text
              fontSize={{
                base: "md",
                md: "xl",
              }}
            >
              {service}
            </Text>
          </HStack>
        ))}
      </Grid>
    </CardLayout>
  );
};
