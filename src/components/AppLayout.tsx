import { Box } from "@chakra-ui/react";
import { AppHeader } from "./AppHeader";

interface Props {
  children: React.ReactNode;
}

export const AppLayout = (props: Props) => {
  const { children } = props;

  return (
    <Box>
      <AppHeader />
      <Box mt={"50px"}>{children}</Box>
    </Box>
  );
};
