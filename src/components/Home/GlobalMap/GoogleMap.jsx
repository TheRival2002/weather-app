import { Box } from "@mui/material";
import MapImg from "../../../assets/Map.png";

export const GoogleMap = () => {
  return (
    <Box
      component="img"
      sx={{
        height: "100%",
        width: "100%",
        objectFit: "contain",
      }}
      alt="The house from the offer."
      src={MapImg}
    />
  );
};
