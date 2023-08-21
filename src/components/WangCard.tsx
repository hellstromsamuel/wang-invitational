import {
  Box,
  Divider,
  Flex,
  Grid,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CardLayout } from "./CardLayout";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const WangCard = () => {
  return (
    <CardLayout>
      <Box>
        <Image
          src="/wang_logo.jpg"
          alt="WANG Toppidrett"
          height={"120px"}
          w={"auto"}
        />
      </Box>

      <Box mt={5} fontSize={"xl"}>
        <Heading as="h2" size="xl">
          Initiativ fra WANG Toppidrett Romerike og Oslo - Innebandy
        </Heading>

        <Grid
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
          }}
          gap={10}
          flexWrap={"wrap"}
          my={5}
        >
          <Text>
            Wang Innebandy ønsker å lage en arena i Oslo og Romerike der de
            beste i sitt årskull møtes. Denne sesongen vil vi starte opp med
            kullene 2007 og 2008. Der kan vi gi deg en mulighet å trene med
            likesinnede samt de med samme ambisjoner. Du trenger ikke å gå på
            Wang Toppidrett eller Wang Ung.
          </Text>
          <Text>
            Målet er å ha 3 samlinger i løpet av året der Wang inviterer
            spillere. Den første samlingen vil finne sted i Eika arena den
            17.september. Om dette kan være noe for deg, hold av datoen.
            Invitasjonene fra Wang kommer i løpet av andre del av august.
          </Text>
        </Grid>

        <Grid
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
          }}
          gap={{
            base: 2,
            md: 10,
          }}
          mt={5}
          flexWrap={"wrap"}
        >
          <Link
            mt={2}
            href="https://wang.no/toppidrett/romerike/innebandy"
            target="_blank"
            color="darkblue"
            fontWeight={"semibold"}
          >
            <HStack>
              <ChevronRightIcon />
              <Text>Les mer om WANG Toppidrett Romerike</Text>
            </HStack>
          </Link>

          <Link
            mt={2}
            href="https://wang.no/toppidrett/oslo/innebandy"
            target="_blank"
            color="darkblue"
            fontWeight={"semibold"}
          >
            <HStack>
              <ChevronRightIcon />
              <Text>Les mer om WANG Toppidrett Oslo</Text>
            </HStack>
          </Link>
        </Grid>
      </Box>
    </CardLayout>
  );
};
