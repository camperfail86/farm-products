import styled from "styled-components";
import aboutImage from "../../../assets/man.svg";
import {Div} from '../../../styled/Div/div'

export const Text = styled.p`
  width: 538px;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 115%;
  font-style: normal;
  margin: 0 0 24px 0;
`

export const IndexMain = styled(Div)`
  position: relative;

  &::after {
    position: absolute;
    top: 66px;
    bottom: 0;
    right: -383px;
    display: block;
    content: "";
    width: 273px;
    height: 544px;
    margin: auto;
    z-index: 2;
    background: url(${aboutImage});
  }

  &::before {
    background-color: #C4E2FF;
    width: 447px;
    height: 447px;
    border-radius: 100%;
    position: absolute;
    content: "";
    top: -97px;
    bottom: 0;
    right: -469px;
  }
`;

export const WrapperMain = styled.div`
  width: 637px;
  padding-left: 90px;
  padding-right: 554px;
  padding-top: 183px;
  padding-bottom: 183px;
  position: relative;
  background-color: #D8ECFE;
`;