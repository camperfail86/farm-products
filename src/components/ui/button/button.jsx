import React from "react";
import { StyledButton } from "./styles";
import { Urls } from "../../../url";
import { Link } from "react-router-dom";

export default function Button({minWidthForButton}) {
  return (
    <Link to={Urls.BUY}>
      <StyledButton minWidthForButton={minWidthForButton}>Купить</StyledButton>
    </Link>
  )
}