import { AutocompleteSearch } from "../../components/Header/AutocompleteSearch";
import { AppbarContentContainer } from "../../styles/Appbar";

const HeaderSearch = () => {
  return (
    <AppbarContentContainer sx={{ position: "relative" }}>
      <AutocompleteSearch />
    </AppbarContentContainer>
  );
};

export default HeaderSearch;
