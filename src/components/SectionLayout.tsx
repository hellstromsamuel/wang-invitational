import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const SectionLayout = (props: Props) => {
  const { children } = props;

  return (
    <motion.div
      initial={{ translateY: "10px", opacity: 0 }}
      whileInView={{ translateY: "0px", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
