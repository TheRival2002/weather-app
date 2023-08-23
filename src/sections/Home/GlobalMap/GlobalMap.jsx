import { Stack, Typography } from "@mui/material";
import { GoogleMap } from "../../../components/Home/GlobalMap/GoogleMap";

const GlobalMap = () => {
  return (
    <Stack direction="column" spacing={4} justifyContent="center">
      <Typography variant="h5" component="h3" fontWeight={600}>
        Global map
      </Typography>
      <GoogleMap />
    </Stack>
  );
};

export default GlobalMap;
