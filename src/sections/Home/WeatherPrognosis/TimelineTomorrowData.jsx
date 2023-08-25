import { CardMedia, Stack, Typography } from "@mui/material";
import {
  StackColumn,
  StackSpaced,
  StyledCard,
  StyledCardContent,
} from "../../../styles/Appbar";
import SunImg from "../../../assets/sun.png";
import RainImg from "../../../assets/rainy-day.png";
import StormImg from "../../../assets/storm.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { weatherData } from "../../../redux/fetch-weather-slice";
import { forecastTomorrowActions } from "../../../redux/forecast-tomorrow-slice";
import moment from "moment";

const TimelineTomorrowData = () => {
  const dispatch = useDispatch();
  const timelineData = useSelector((state) => state.timelineData.timelineData);
  const forecast = useSelector(weatherData);

  useEffect(() => {
    if (
      typeof forecast !== "string" &&
      !Array.isArray(forecast) &&
      timelineData === "forecast"
    ) {
      const morning = forecast.forecast.forecastday[1].hour[10];
      const morning_day_name = moment(
        forecast.forecast.forecastday[1].date
      ).format("dddd");
      const morning_temp = morning.temp_c;
      const morning_wind = morning.wind_kph;
      const morning_pressure = morning.pressure_mb;
      const morning_condition = morning.condition.text;
      const morning_date = forecast.forecast.forecastday[1].date;

      const afternoon = forecast.forecast.forecastday[1].hour[20];
      const afternoon_day_name = moment(
        forecast.forecast.forecastday[1].date
      ).format("dddd");
      const afternoon_temp = afternoon.temp_c;
      const afternoon_wind = afternoon.wind_kph;
      const afternoon_pressure = afternoon.pressure_mb;
      const afternoon_condition = afternoon.condition.text;
      const afternoon_date = forecast.forecast.forecastday[1].date;

      const data = [
        {
          morning: {
            morning_day_name,
            morning_temp,
            morning_wind,
            morning_pressure,
            morning_condition,
            morning_date,
          },
        },
        {
          afternoon: {
            afternoon_day_name,
            afternoon_temp,
            afternoon_wind,
            afternoon_pressure,
            afternoon_condition,
            afternoon_date,
          },
        },
      ];
      dispatch(forecastTomorrowActions.changeForecast(data));
    } else if (
      typeof forecast !== "string" &&
      !Array.isArray(forecast) &&
      timelineData === "air quality"
    ) {
      const morning = forecast.forecast.forecastday[1].hour[10];
      const morning_day_name = moment(
        forecast.forecast.forecastday[1].date
      ).format("dddd");
      const morning_air = morning.air_quality;
      const morning_co = morning_air.co;
      const morning_no2 = morning_air.no2;
      const morning_pm10 = morning_air.pm10;
      const morning_condition = morning.condition.text;
      const morning_date = forecast.forecast.forecastday[1].date;

      const afternoon = forecast.forecast.forecastday[1].hour[20];
      const afternoon_day_name = moment(
        forecast.forecast.forecastday[1].date
      ).format("dddd");
      const afternoon_air = afternoon.air_quality;
      const afternoon_co = afternoon_air.co;
      const afternoon_no2 = afternoon_air.no2;
      const afternoon_pm10 = afternoon_air.pm10;
      const afternoon_condition = afternoon.condition.text;
      const afternoon_date = forecast.forecast.forecastday[1].date;

      const data = [
        {
          morning: {
            morning_day_name,
            morning_co,
            morning_no2,
            morning_pm10,
            morning_condition,
            morning_date,
          },
        },
        {
          afternoon: {
            afternoon_day_name,
            afternoon_co,
            afternoon_no2,
            afternoon_pm10,
            afternoon_condition,
            afternoon_date,
          },
        },
      ];
      dispatch(forecastTomorrowActions.changeAir(data));
    }
  }, [forecast, timelineData]);

  let data;

  if (timelineData === "forecast") {
    data = useSelector((state) => state.forecastTomorrow.forecast);
  } else {
    data = useSelector((state) => state.forecastTomorrow.air_qual);
  }

  return (
    <StyledCard>
      <StyledCardContent sx={{ alignItems: "start" }}>
        <StackSpaced
          sx={{
            width: "100%",
            paddingBottom: ".5rem",
            borderBottom: `1px solid #a7a7a7`,
          }}
        >
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{
              fontWeight: "600",
            }}
          >
            {data[0].morning.morning_day_name}
          </Typography>
          <Typography variant="subtitle1" component="h3">
            {data[0].morning.morning_date}
          </Typography>
        </StackSpaced>
        <StackSpaced paddingTop="1rem" width="100%">
          <Stack flexDirection="row" gap={7}>
            <StackColumn>
              <Typography variant="h6" component="h3">
                Morning:
              </Typography>
              <Typography variant="body2" component="p">
                {timelineData === "forecast" ? "Temperature:" : "Carbon:"}
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {timelineData === "forecast"
                    ? `${data[0].morning.morning_temp}°`
                    : data[0].morning.morning_co}
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                {timelineData === "forecast" ? "Wind:" : "Nitrogen:"}
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {timelineData === "forecast"
                    ? `${data[0].morning.morning_wind} km/h`
                    : data[0].morning.morning_no2}
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                {timelineData === "forecast" ? "Pressure:" : "PM10:"}
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {timelineData === "forecast"
                    ? `${data[0].morning.morning_pressure}MB`
                    : data[0].morning.morning_pm10}
                </Typography>
              </Typography>
            </StackColumn>
            <CardMedia
              component="img"
              alt="picture of weather condition"
              image={
                data[0].morning.morning_condition.includes("Sunny")
                  ? SunImg
                  : data[0].morning.morning_condition.includes("rain")
                  ? RainImg
                  : StormImg
              }
              height="100px"
              sx={{ objectFit: "contain", alignSelf: "center" }}
            />
          </Stack>
          <Stack flexDirection="row" gap={7}>
            <StackColumn>
              <Typography variant="h6" component="h3">
                Afternoon:
              </Typography>
              <Typography variant="body2" component="p">
                {timelineData === "forecast" ? "Temperature:" : "Carbon:"}
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {timelineData === "forecast"
                    ? `${data[1].afternoon.afternoon_temp}°`
                    : data[1].afternoon.afternoon_co}
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                {timelineData === "forecast" ? "Wind:" : "Nitrogen:"}
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {timelineData === "forecast"
                    ? `${data[1].afternoon.afternoon_wind} km/h`
                    : data[1].afternoon.afternoon_no2}
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                {timelineData === "forecast" ? "Pressure:" : "PM10:"}
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {timelineData === "forecast"
                    ? `${data[1].afternoon.afternoon_pressure}MB`
                    : data[1].afternoon.afternoon_pm10}
                </Typography>
              </Typography>
            </StackColumn>
            <CardMedia
              component="img"
              alt="picture of weather condition"
              image={
                data[1].afternoon.afternoon_condition.includes("Sunny")
                  ? SunImg
                  : data[1].afternoon.afternoon_condition.includes("rain")
                  ? RainImg
                  : StormImg
              }
              height="100px"
              sx={{ objectFit: "contain", alignSelf: "center" }}
            />
          </Stack>
        </StackSpaced>
      </StyledCardContent>
    </StyledCard>
  );
};

export default TimelineTomorrowData;
