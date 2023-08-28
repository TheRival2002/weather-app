import { motion } from "framer-motion";
import CitiesList from "../sections/Home/OtherCities/CitiesList";
import { GridMain } from "../styles/Appbar";
import { LinkBtn } from "../styles/components/LinkBtn";
import { StyledListItemText } from "../styles/components/MyList";
import { Stack } from "@mui/material";

const componentVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    filter: "blur(10px)",
  },
};

const Cities = () => {
  return (
    <GridMain
      component={motion.main}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      rowSpacing={4}
      container
      borderRadius="0 0 2rem 2rem"
    >
      <Stack
        flexDirection="row"
        gap={4}
        component={motion.div}
        variants={componentVariants}
        initial="hidden"
        animate="visible"
      >
        <CitiesList />
        <LinkBtn to="/weather-app/">
          <StyledListItemText primary="Return >" />
        </LinkBtn>
      </Stack>
    </GridMain>
  );
};

export default Cities;
