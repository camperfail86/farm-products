import styled from "styled-components";

export const ProductImage = styled.img`
  width: 248px;
  height: 248px;
  margin-right: 20px;
`;

export const Panel = styled.section`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
  0 0 1px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px 20px 10px 20px;
  background-color: #ffffff;
`

export const ContentWrapper = styled.div`
  position: relative;
  float: right;
  width: 417px;
  min-height: 248px;
  padding-bottom: 30px;
  box-sizing: border-box;
`;

export const ProductTitle = styled.h3`
  margin-bottom: 15px;
`;

export const Price = styled.span`
  position: absolute;
  bottom: 0;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
`;
