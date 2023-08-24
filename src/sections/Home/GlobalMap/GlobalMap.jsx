import { Stack, Typography } from "@mui/material";
import { GoogleMap } from "../../../components/Home/GlobalMap/GoogleMap";
import { useLayoutEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { mapHeightActions } from "../../../redux/map-height-slice";

const GlobalMap = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  useLayoutEffect(() => {
    function getInitialSize() {
      dispatch(mapHeightActions.changeMapHeight(ref.current.clientHeight));
    }
    function updateSize() {
      dispatch(mapHeightActions.changeMapHeight(ref.current.clientHeight));
    }
    window.addEventListener("load", getInitialSize);
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Stack
      direction="column"
      spacing={4}
      justifyContent="center"
      paddingBottom={4}
      ref={ref}
    >
      <Typography variant="h5" component="h3" fontWeight={600}>
        Global Map
      </Typography>
      <GoogleMap />
    </Stack>
  );
};

export default GlobalMap;
