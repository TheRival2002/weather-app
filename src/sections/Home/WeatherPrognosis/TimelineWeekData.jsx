import { ListItemButton } from "@mui/material";
import { TimelineWeekItem } from "../../../components/Home/WeatherPrognosis/TimelineWeather/TimelineWeekItem";
import { MyList, MyListItem } from "../../../styles/components/MyList";
import { useDispatch, useSelector } from "react-redux";
import { weekDayActions } from "../../../redux/week-day-slice";
import { weatherData } from "../../../redux/fetch-weather-slice";
import { useEffect } from "react";
import { forecastWeekActions } from "../../../redux/forecast-week-slice";

const TimelineWeekData = () => {
  const dispatch = useDispatch();

  const forecast = useSelector(weatherData);

  useEffect(() => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    if (typeof forecast !== "string" && !Array.isArray(forecast)) {
      const mappedForecast = forecast.forecast.forecastday.map((day, ind) => {
        const dayName = days[ind];
        const condition = day.day.condition.text;
        const realFeel = day.day.avgtemp_c;
        const pressure = day.hour[0].pressure_mb;
        const humidity = day.day.avghumidity;
        const wind = day.day.maxwind_kph;
        const sunrise = day.astro.sunrise;
        const sunset = day.astro.sunset;
        return {
          dayName,
          condition,
          realFeel,
          pressure,
          humidity,
          wind,
          sunrise,
          sunset,
        };
      });
      dispatch(forecastWeekActions.changeWeekData(mappedForecast));
    }
  }, [forecast]);

  const selectedWeekDay = useSelector((state) => state.selectedWeekDay.weekDay);

  const handleClick = (index) => {
    dispatch(weekDayActions.changeWeekDay(index));
  };

  const weekData = useSelector((state) => state.forecastWeek.weekData);
  const mappedListItems = weekData.map((el, index) => {
    return (
      <MyListItem disablePadding key={index}>
        <ListItemButton
          sx={{ padding: "0" }}
          selected={selectedWeekDay === index}
          onClick={() => handleClick(index)}
        >
          <TimelineWeekItem {...el} isSelected={selectedWeekDay === index} />
        </ListItemButton>
      </MyListItem>
    );
  });

  return <MyList disablePadding>{mappedListItems}</MyList>;
};

export default TimelineWeekData;
