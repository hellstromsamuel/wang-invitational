import { Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const AppHeader = () => {
  const [showBoxShadow, setShowBoxShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setShowBoxShadow(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex
      justify={"center"}
      align="center"
      h={"50px"}
      w={"100%"}
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      position={"fixed"}
      bg={"white"}
      py={2}
      boxShadow={showBoxShadow ? "md" : "none"}
      transition={"box-shadow 0.3s ease-in-out"}
    >
      <Image
        src="/wang_logo.jpg"
        alt="WANG Romerrike Innebandy"
        height={"100%"}
      />
    </Flex>
  );
};
