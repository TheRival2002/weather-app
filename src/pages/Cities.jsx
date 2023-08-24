import CitiesList from "../sections/Home/OtherCities/CitiesList";
import { GridMain } from "../styles/Appbar";
import { LinkBtn } from "../styles/components/LinkBtn";
import { StyledListItemText } from "../styles/components/MyList";

const Cities = () => {
  return (
    <GridMain
      component="main"
      rowSpacing={4}
      container
      borderRadius="0 0 2rem 2rem"
    >
      <CitiesList />
      <LinkBtn to="/weather-app/">
        <StyledListItemText primary="Return >" />
      </LinkBtn>
    </GridMain>
  );
};

export default Cities;
