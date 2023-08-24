import { ListItemButton } from "@mui/material";
import { MyList, MyListItem } from "../../../styles/components/MyList";
import { City } from "../../../components/global/City";
import { useDispatch, useSelector } from "react-redux";
import { bulkData, bulkLoading } from "../../../redux/fetch-bulk-slice";
import { useEffect } from "react";
import { fetchBulk } from "../../../utils/FetchBulk";
import { bulkDataActions } from "../../../redux/bulk-data-slice";
import { selectCityActions } from "../../../redux/select-city-slice";
import { changeLocationActions } from "../../../redux/change-location-slice";

const CitiesList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(bulkLoading);
  const data = useSelector(bulkData);

  const bulkInfo = useSelector((state) => state.bulkData.bulkData);

  useEffect(() => {
    if (loading === "idle") {
      dispatch(fetchBulk());
    }
  }, [loading, dispatch]);

  useEffect(() => {
    if (typeof data !== "string" && !Array.isArray(data)) {
      const mappedBulkData = data.bulk.map((item) => {
        const location = item.query.location.name;
        const country = item.query.location.country;
        const temp = item.query.current.temp_c;
        const condition = item.query.current.condition.text;
        return { location, country, temp, condition };
      });
      dispatch(bulkDataActions.changeBulkData(mappedBulkData));
    }
  }, [data]);

  const handleClick = (index, city) => {
    dispatch(selectCityActions.changeSelectedCity(index));
    dispatch(changeLocationActions.changeLocation(city));
  };

  const mappedItems = bulkInfo.map((el, index) => {
    return (
      <MyListItem key={index} disablePadding sx={{ width: "100%" }}>
        <ListItemButton
          sx={{
            padding: "0",
            "&:focus-visible": {
              outline: "1px solid",
              outlineColor: "primary.light",
            },
          }}
          onClick={() => handleClick(index, el.location)}
        >
          <City {...el} />
        </ListItemButton>
      </MyListItem>
    );
  });

  return (
    <MyList
      disablePadding
      sx={{
        flexDirection: "column",
        alignItems: "stretch",
        overflowY: "scroll",
      }}
    >
      {mappedItems}
    </MyList>
  );
};

export default CitiesList;
