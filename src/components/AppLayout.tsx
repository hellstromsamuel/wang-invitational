import { Box } from "@chakra-ui/react";
import { AppHeader } from "./AppHeader";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const AppLayout = (props: Props) => {
  const { children } = props;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Box>
        <AppHeader />
        <Box mt={"50px"}>{children}</Box>
      </Box>
    </motion.div>
  );
};
