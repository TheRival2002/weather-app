import { Box, CardMedia, Typography } from "@mui/material";
import {
  StackSpaced,
  StyledCard,
  StyledCardContent,
} from "../../../../styles/Appbar";
import RainImg from "../../../../assets/rainy-day.png";
import SunImg from "../../../../assets/sun.png";
import StormImg from "../../../../assets/storm.png";
import { useSelector } from "react-redux";

export const TimelineWeekItem = (props) => {
  const timelineData = useSelector((state) => state.timelineData.timelineData);
  return (
    <StyledCard
      sx={{
        backgroundColor: props.isSelected && "secondary.main",
        color: props.isSelected && "black.main",
        "&:hover": {
          backgroundColor: props.isSelected === false && "primary.light",
        },
      }}
    >
      <StyledCardContent sx={props.isSelected && { alignItems: "start" }}>
        <Typography
          variant="subtitle1"
          component="h2"
          sx={{
            width: "100%",
            paddingBottom: ".5rem",
            fontWeight: "600",
            textAlign: !props.isSelected && "center",
            borderBottom: `1px solid #a7a7a7`,
          }}
        >
          {props.isSelected ? props.dayName : props.dayName.slice(0, 3)}
        </Typography>
        <StackSpaced width="100%" paddingTop={props.isSelected && ".75rem"}>
          {props.isSelected && (
            <Typography
              variant={props.isSelected ? "h3" : "h4"}
              component="span"
            >
              {Math.round(props.realFeel)}°
            </Typography>
          )}
          <CardMedia
            component="img"
            alt="picture of weather condition"
            image={
              props.condition.includes("Sunny")
                ? SunImg
                : props.condition.includes("rain")
                ? RainImg
                : StormImg
            }
            height="60px"
            sx={{ objectFit: "contain" }}
          />
        </StackSpaced>
        <StackSpaced>
          {!props.isSelected && (
            <Typography variant="h4" component="span">
              {Math.round(props.realFeel)}°
            </Typography>
          )}
          {props.isSelected && (
            <Box>
              <Typography variant="body2" component="p">
                {timelineData === "forecast" ? "Real feel:" : "Carbon:"}
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {timelineData === "forecast"
                    ? `${Math.round(props.realFeel)}°`
                    : props.co.toFixed(2)}
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                {timelineData === "forecast" ? "Pressure:" : "Nitrogen:"}
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {timelineData === "forecast"
                    ? `${props.pressure}`
                    : props.no2.toFixed(2)}
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                {timelineData === "forecast" ? "Humidity:" : "Ozone:"}
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {timelineData === "forecast"
                    ? `${props.humidity}%`
                    : props.o3.toFixed(2)}
                </Typography>
              </Typography>
            </Box>
          )}
          {props.isSelected && (
            <Box>
              <Typography variant="body2" component="p">
                {timelineData === "forecast" ? "Wind:" : "Sulphur:"}
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {timelineData === "forecast"
                    ? `${props.wind} km/h`
                    : props.so2.toFixed(2)}
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                {timelineData === "forecast" ? "Sunrise:" : "PM10:"}
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {timelineData === "forecast"
                    ? `${props.sunrise}`
                    : props.pm10.toFixed(2)}
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                {timelineData === "forecast" ? "Sunset:" : "PM2.5:"}
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {timelineData === "forecast"
                    ? `${props.sunset}`
                    : props.pm2_5.toFixed(2)}
                </Typography>
              </Typography>
            </Box>
          )}
        </StackSpaced>
      </StyledCardContent>
    </StyledCard>
  );
};
