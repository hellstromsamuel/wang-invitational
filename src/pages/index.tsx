import Head from "next/head";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { ContactInfo } from "@/components/ContactInfo";
import { SectionLayout } from "@/components/SectionLayout";
import { FrontPage } from "@/components/FrontPage";
import { WangCard } from "@/components/WangCard";
import { ServicesIncluded } from "@/components/ServicesIncluded";
import { Coaches } from "@/components/Coaches";

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

        <Box p={5} maxWidth={"1200px"} mx={"auto"}>
          <Box mb={10}>
            <SectionLayout>
              <WangCard />
            </SectionLayout>
          </Box>

          <Box mb={10}>
            <SectionLayout>
              <ServicesIncluded />
            </SectionLayout>
          </Box>

          <Box mb={10}>
            <SectionLayout>
              <ContactInfo />
            </SectionLayout>
          </Box>

          <Box mb={10}>
            <SectionLayout>
              <Coaches />
            </SectionLayout>
          </Box>

          <Grid gap={10}>
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
      </Box>
    </>
  );
}
