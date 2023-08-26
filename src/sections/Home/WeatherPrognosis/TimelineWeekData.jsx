import { ListItemButton } from "@mui/material";
import { TimelineWeekItem } from "../../../components/Home/WeatherPrognosis/TimelineWeather/TimelineWeekItem";
import { MyList, MyListItem } from "../../../styles/components/MyList";
import { useDispatch, useSelector } from "react-redux";
import { weekDayActions } from "../../../redux/week-day-slice";
import { weatherData } from "../../../redux/fetch-weather-slice";
import { useEffect } from "react";
import { forecastWeekActions } from "../../../redux/forecast-week-slice";
import moment from "moment";
import { motion } from "framer-motion";

const TimelineWeekData = () => {
  const dispatch = useDispatch();

  const forecast = useSelector(weatherData);
  const timelineData = useSelector((state) => state.timelineData.timelineData);

  useEffect(() => {
    if (
      typeof forecast !== "string" &&
      !Array.isArray(forecast) &&
      timelineData === "forecast"
    ) {
      const mappedForecast = forecast.forecast.forecastday.map((day, ind) => {
        const dayName = moment(day.date).format("dddd");
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
      dispatch(forecastWeekActions.changeWeekDataForecast(mappedForecast));
    } else if (
      typeof forecast !== "string" &&
      !Array.isArray(forecast) &&
      timelineData === "air quality"
    ) {
      const mappedAirQuality = forecast.forecast.forecastday.map((day, ind) => {
        const dayName = moment(day.date).format("dddd");
        const airQuality = day.day.air_quality;
        const condition = day.day.condition.text;
        const realFeel = day.day.avgtemp_c;
        const co = airQuality.co;
        const no2 = airQuality.no2;
        const o3 = airQuality.o3;
        const so2 = airQuality.so2;
        const pm10 = airQuality.pm10;
        const pm2_5 = airQuality.pm2_5;
        return {
          dayName,
          condition,
          realFeel,
          co,
          no2,
          o3,
          so2,
          pm10,
          pm2_5,
        };
      });
      dispatch(forecastWeekActions.changeWeekDataAir(mappedAirQuality));
    }
  }, [forecast, timelineData]);

  const selectedWeekDay = useSelector((state) => state.selectedWeekDay.weekDay);

  const handleClick = (index) => {
    dispatch(weekDayActions.changeWeekDay(index));
  };

  let weekData;

  if (timelineData === "forecast") {
    weekData = useSelector((state) => state.forecastWeek.weekDataForecast);
  } else {
    weekData = useSelector((state) => state.forecastWeek.weekDataAir);
  }

  const mappedListItems = weekData.map((el, index) => {
    return (
      <MyListItem disablePadding key={index}>
        <ListItemButton
          sx={{
            padding: "0",
            "&:focus-visible": {
              outline: "1px solid",
              outlineColor: "primary.light",
            },
          }}
          selected={selectedWeekDay === index}
          onClick={() => handleClick(index)}
        >
          <TimelineWeekItem {...el} isSelected={selectedWeekDay === index} />
        </ListItemButton>
      </MyListItem>
    );
  });

  return (
    <MyList
      disablePadding
      component={motion.ul}
      initial={{ x: "-100vw" }}
      animate={{ x: "0" }}
    >
      {mappedListItems}
    </MyList>
  );
};

export default TimelineWeekData;
