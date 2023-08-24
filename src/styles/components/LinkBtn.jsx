import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const LinkBtn = styled(Link)(({ theme }) => ({
  color: theme.palette.white_dimmed.main,
  textDecoration: "none",
}));
