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
      const morning_temp = morning.temp_c;
      const morning_wind = morning.wind_kph;
      const morning_pressure = morning.pressure_mb;
      const morning_condition = morning.condition.text;

      const afternoon = forecast.forecast.forecastday[1].hour[20];
      const afternoon_temp = afternoon.temp_c;
      const afternoon_wind = afternoon.wind_kph;
      const afternoon_pressure = afternoon.pressure_mb;
      const afternoon_condition = afternoon.condition.text;

      const data = [
        {
          morning: {
            morning_temp,
            morning_wind,
            morning_pressure,
            morning_condition,
          },
        },
        {
          afternoon: {
            afternoon_temp,
            afternoon_wind,
            afternoon_pressure,
            afternoon_condition,
          },
        },
      ];
      dispatch(forecastTomorrowActions.changeForecast(data));
    }
  }, [forecast, timelineData]);

  let data;

  if (timelineData === "forecast") {
    data = useSelector((state) => state.forecastTomorrow.forecast);
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
            Tuesday
          </Typography>
          <Typography variant="subtitle1" component="h3">
            2023-08-23
          </Typography>
        </StackSpaced>
        <StackSpaced paddingTop="1rem" width="100%">
          <Stack flexDirection="row" gap={7}>
            <StackColumn>
              <Typography variant="h6" component="h3">
                Morning:
              </Typography>
              <Typography variant="body2" component="p">
                Temperature:
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {data[0].morning.morning_temp}°
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                Wind:
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {data[0].morning.morning_wind} km/h
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                Pressure:
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {data[0].morning.morning_pressure}MB
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
                Temperature:
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {data[1].afternoon.afternoon_temp}°
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                Wind:
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {data[1].afternoon.afternoon_temp} km/h
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                Pressure:
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {data[1].afternoon.afternoon_temp}MB
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
