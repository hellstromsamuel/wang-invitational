import Head from "next/head";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { ContactInfo } from "@/components/ContactInfo";
import { SectionLayout } from "@/components/SectionLayout";
import { FrontPage } from "@/components/FrontPage";
import { WangCard } from "@/components/WangCard";

const bilder = ["bilde1", "bilde2", "bilde3", "bilde4", "bilde5"];

export default function Home() {
  return (
    <>
      <Head>
        <title>WANG Intviational</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box mb={10}>
        <FrontPage />

        <Grid
          gap={10}
          my={10}
          flexWrap={"wrap"}
          p={5}
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          maxWidth={"1200px"}
          marginX={"auto"}
        >
          <SectionLayout>
            <WangCard />
          </SectionLayout>

          <SectionLayout>
            <ContactInfo />
          </SectionLayout>
        </Grid>

        <Grid gap={10} p={5} maxWidth={"1200px"} marginX={"auto"}>
          {bilder.map((bilde) => (
            <SectionLayout key={bilde}>
              <Image
                key={bilde}
                alt={"Innebandy " + bilde}
                src={`/images/${bilde}.png`}
                rounded={20}
              />
              <Text mt={2} ml={2} fontSize={"xl"}>
                Foto: Frank Nordseth, NBF
              </Text>
            </SectionLayout>
          ))}
        </Grid>
      </Box>
    </>
  );
}
