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
  exit: {
    x: "-100vw",
  },
};

const Cities = () => {
  return (
    <GridMain
      component={motion.main}
      variants={containerVariants}
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
