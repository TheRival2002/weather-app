import { ListItemButton } from "@mui/material";
import { TimelineWeekItem } from "../../../components/Home/WeatherPrognosis/TimelineWeather/TimelineWeekItem";
import { MyList, MyListItem } from "../../../styles/components/MyList";
import { useDispatch, useSelector } from "react-redux";
import { weekDayActions } from "../../../redux/week-day-slice";

const TimelineWeekData = () => {
  const dispatch = useDispatch();
  const selectedWeekDay = useSelector((state) => state.selectedWeekDay.weekDay);

  const handleClick = (index) => {
    dispatch(weekDayActions.changeWeekDay(index));
  };

  const index = 0;

  return (
    <MyList disablePadding>
      <MyListItem disablePadding>
        <ListItemButton
          sx={{ padding: "0" }}
          selected={selectedWeekDay === index}
          onClick={() => handleClick(index)}
        >
          <TimelineWeekItem
            index={index}
            isSelected={selectedWeekDay === index}
          />
        </ListItemButton>
      </MyListItem>
      <MyListItem disablePadding>
        <ListItemButton
          sx={{ padding: "0" }}
          selected={selectedWeekDay === index}
          onClick={() => handleClick(index)}
        >
          <TimelineWeekItem index={index} isSelected={false} />
        </ListItemButton>
      </MyListItem>
      <MyListItem disablePadding>
        <ListItemButton
          sx={{ padding: "0" }}
          selected={selectedWeekDay === index}
          onClick={() => handleClick(index)}
        >
          <TimelineWeekItem index={index} isSelected={false} />
        </ListItemButton>
      </MyListItem>
      <MyListItem disablePadding>
        <ListItemButton
          sx={{ padding: "0" }}
          selected={selectedWeekDay === index}
          onClick={() => handleClick(index)}
        >
          <TimelineWeekItem index={index} isSelected={false} />
        </ListItemButton>
      </MyListItem>
      <MyListItem disablePadding>
        <ListItemButton
          sx={{ padding: "0" }}
          selected={selectedWeekDay === index}
          onClick={() => handleClick(index)}
        >
          <TimelineWeekItem index={index} isSelected={false} />
        </ListItemButton>
      </MyListItem>
      <MyListItem disablePadding>
        <ListItemButton
          sx={{ padding: "0" }}
          selected={selectedWeekDay === index}
          onClick={() => handleClick(index)}
        >
          <TimelineWeekItem index={index} isSelected={false} />
        </ListItemButton>
      </MyListItem>
      <MyListItem disablePadding>
        <ListItemButton
          sx={{ padding: "0" }}
          selected={selectedWeekDay === index}
          onClick={() => handleClick(index)}
        >
          <TimelineWeekItem index={index} isSelected={false} />
        </ListItemButton>
      </MyListItem>
    </MyList>
  );
};

export default TimelineWeekData;
