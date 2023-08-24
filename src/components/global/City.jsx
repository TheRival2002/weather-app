import { CardMedia, Typography } from "@mui/material";
import {
  StackColumn,
  StyledCard,
  StyledCardContentRow,
} from "../../styles/Appbar";
import SunImg from "../../assets/sun.png";
import RainImg from "../../assets/rainy-day.png";
import StormImg from "../../assets/storm.png";

export const City = (props) => {
  return (
    <StyledCard
      sx={{
        width: "100%",
        "&:hover": {
          backgroundColor: "primary.light",
        },
      }}
    >
      <StyledCardContentRow>
        <StackColumn>
          <StackColumn justifyContent="initial" gap="0.25rem !important">
            <Typography variant="body1" component="h4">
              {props.country}
            </Typography>
            <Typography variant="h6" component="h3">
              {props.location}
            </Typography>
          </StackColumn>
          <Typography variant="body1" component="p" justifySelf="end">
            {props.condition}
          </Typography>
        </StackColumn>
        <StackColumn>
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
            height="50px"
            sx={{ objectFit: "contain" }}
          />
          <Typography
            variant="h5"
            component="p"
            justifySelf="end"
            alignSelf="center"
          >
            {props.temp}°
          </Typography>
        </StackColumn>
      </StyledCardContentRow>
    </StyledCard>
  );
};
