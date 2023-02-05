import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperLogo = styled.div`
  align-self: center;
  display: flex;
`

export const Text = styled.span`
  font-weight: 700;
  font-size: 28px;
  display: flex;
  align-self: center;
  margin-left: 24px;
`

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${props => props.theme.fontColorBlack};
`
