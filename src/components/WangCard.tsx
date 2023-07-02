import {
  Box,
  Divider,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CardLayout } from "./CardLayout";

export const WangCard = () => {
  return (
    <CardLayout>
      <Box>
        <Image
          src="/wang_logo.jpg"
          alt="WANG Toppidrett"
          height={"80px"}
          w={"auto"}
        />
      </Box>

      <Box mt={5} fontSize={"xl"}>
        <Text>Initiativ fra WANG Toppidrett Romerike - Innebandy</Text>

        <Link
          mt={2}
          href="https://wang.no/toppidrett/romerike/innebandy"
          target="_blank"
          color="darkblue"
          textDecoration={"underline"}
          fontWeight={"semibold"}
        >
          Les mer her
        </Link>
      </Box>
    </CardLayout>
  );
};
