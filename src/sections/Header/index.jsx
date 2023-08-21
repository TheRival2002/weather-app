import { AppbarContainer } from "/src/styles/Appbar";
import HeaderInfo from "./HeaderInfo";
import HeaderInteraction from "./HeaderInteraction";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <AppbarContainer
      component="header"
      sx={{
        borderRadius: "2rem 2rem 0 0",
      }}
    >
      <HeaderInfo />
      <HeaderSearch />
      <HeaderInteraction />
    </AppbarContainer>
  );
};

export default Header;
