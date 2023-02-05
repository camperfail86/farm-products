import styled, {css} from "styled-components";
import { Swiper } from "swiper/react";
import checkboxSelect from "../../../assets/checkbox.svg"

export const Form = styled.form`
  width: 1280px;
  padding: 40px 90px 0 90px; 
  margin: 0 auto;
  display: flex;
  box-sizing: border-box;
  background-color: #f7f7f7;
`

export const Panel = styled.section`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
  0 0 1px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px 20px 10px 20px;
  background-color: #ffffff;
  margin-bottom: ${props => props.marginBottom};
`

export const LeftColumn = styled.div`
  max-height: 100%;
  width: 353px;
  padding-right: 20px;
`

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
`

export const Address = styled.input`
  box-sizing: border-box;
  margin-bottom: 20px;
  display: flex;
  height: 48px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 12px;
  padding-right: 12px;
  font-size: 14px;
`

export const PriceSpan = styled.span`
  font-size: 14px;
  margin-bottom: 6px;
  display: block;
`

export const ProductSwiper = styled(Swiper)`
  width: 727px; 


  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;
