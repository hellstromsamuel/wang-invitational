import { Box, Flex } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export const CardLayout = (props: Props) => {
  const { children } = props;

  return (
    <Flex
      direction={"column"}
      rounded={20}
      p={10}
      boxShadow={"lg"}
      height={"100%"}
      justify="center"
    >
      {children}
    </Flex>
  );
};
