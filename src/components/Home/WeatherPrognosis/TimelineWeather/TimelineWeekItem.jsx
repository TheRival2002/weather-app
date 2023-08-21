import { Box, CardMedia, Typography } from "@mui/material";
import {
  StackSpaced,
  StyledCard,
  StyledCardContent,
} from "../../../../styles/Appbar";

export const TimelineWeekItem = ({ index, isSelected }) => {
  return (
    <StyledCard>
      <StyledCardContent sx={isSelected && { alignItems: "start" }}>
        <Typography
          variant="subtitle1"
          component="h2"
          sx={{ fontWeight: "600" }}
        >
          Monday
          {/* when data added with props check if it is selected, if it is display full day if not only first 3 letters  */}
        </Typography>
        <StackSpaced width="100%">
          {isSelected && (
            <Typography variant={isSelected ? "h3" : "h4"} component="span">
              16°
            </Typography>
          )}
          <CardMedia
            component="img"
            alt="picture of weather condition"
            image="/src/assets/rainy-day.png"
            height="60px"
            sx={{ objectFit: "contain" }}
          />
        </StackSpaced>
        <StackSpaced>
          {!isSelected && (
            <Typography variant="h4" component="span">
              16°
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
                  18°
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                Pressure:
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  1000MB
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                Humidity:
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  51%
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
                  5-8 km/h
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                Sunrise:
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  6:02 AM
                </Typography>
              </Typography>
              <Typography variant="body2" component="p">
                Sunset:
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: ".25rem", fontWeight: "700" }}
                >
                  6:02 PM
                </Typography>
              </Typography>
            </Box>
          )}
        </StackSpaced>
      </StyledCardContent>
    </StyledCard>
  );
};
