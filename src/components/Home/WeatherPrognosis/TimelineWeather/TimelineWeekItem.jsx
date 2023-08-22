import { Box, CardMedia, Typography } from "@mui/material";
import {
  StackSpaced,
  StyledCard,
  StyledCardContent,
} from "../../../../styles/Appbar";
import RainImg from "../../../../assets/rainy-day.png";
import SunImg from "../../../../assets/sun.png";
import StormImg from "../../../../assets/storm.png";

export const TimelineWeekItem = ({
  dayName,
  condition,
  humidity,
  pressure,
  realFeel,
  sunrise,
  sunset,
  wind,
  isSelected,
}) => {
  return (
    <StyledCard
      sx={{
        backgroundColor: isSelected && "secondary.main",
        color: isSelected && "black.main",
      }}
    >
      <StyledCardContent sx={isSelected && { alignItems: "start" }}>
        <Typography
          variant="subtitle1"
          component="h2"
          sx={{
            width: "100%",
            paddingBottom: ".5rem",
            fontWeight: "600",
            textAlign: !isSelected && "center",
            borderBottom: `1px solid #a7a7a7`,
          }}
        >
          {isSelected ? dayName : dayName.slice(0, 3)}
        </Typography>
        <StackSpaced width="100%" paddingTop={isSelected && ".75rem"}>
          {isSelected && (
            <Typography variant={isSelected ? "h3" : "h4"} component="span">
              {Math.round(realFeel)}°
            </Typography>
          )}
          <CardMedia
            component="img"
            alt="picture of weather condition"
            image={
              condition.includes("Sunny")
                ? SunImg
                : condition.includes("rain")
                ? RainImg
                : StormImg
            }
            height="60px"
            sx={{ objectFit: "contain" }}
          />
        </StackSpaced>
        <StackSpaced>
          {!isSelected && (
            <Typography variant="h4" component="span">
              {Math.round(realFeel)}°
            </Typography>
          )}
          {isSelected && (
            <Box>
              <Typography variant="body2" component="p">
                Real feel:
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {Math.round(realFeel)}°
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                Pressure:
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {pressure}MB
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                Humidity:
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {humidity}%
                </Typography>
              </Typography>
            </Box>
          )}
          {isSelected && (
            <Box>
              <Typography variant="body2" component="p">
                Wind:
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {wind} km/h
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                Sunrise:
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {sunrise}
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                Sunset:
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  {sunset}
                </Typography>
              </Typography>
            </Box>
          )}
        </StackSpaced>
      </StyledCardContent>
    </StyledCard>
  );
};
