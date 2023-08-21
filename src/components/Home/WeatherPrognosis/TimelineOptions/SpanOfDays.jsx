import { ListItemText } from "@mui/material";
import {
  ListItemButtonText,
  MyList,
} from "../../../../styles/components/MyList";
import { MyListItem } from "../../../../styles/components/MyList";

export const SpanOfDays = () => {
  return (
    <>
      <MyList disablePadding>
        <MyListItem disablePadding>
          <ListItemButtonText component="button" sx={{ padding: "0" }}>
            <ListItemText primary="Today" />
          </ListItemButtonText>
        </MyListItem>
      </MyList>
    </>
  );
};
