import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${props => props.minWidthForButton || "260px"};
  height: 60px;
  background: ${props => props.theme.colorForButton};
  padding: 0;
  border: none;
  color: ${props => props.theme.colorWhite};
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    background-color: ${props => props.theme.colorForButtonHover};
  }
  `
