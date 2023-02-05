import {WrapperLogo, Text, StyledLink} from './styles'
import React from "react";
import { Urls } from "../../../url";
import { ReactComponent as LogoImage } from '../../../assets/logo.svg';

export default function Logo() {
  return (
    <WrapperLogo>
      <StyledLink to={Urls.MAIN}>
        <LogoImage />
        <Text>Фермерские продукты</Text>
      </StyledLink>
    </WrapperLogo>
  )
}