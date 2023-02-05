import styled from 'styled-components';

export const CardWrapper = styled.section`
  padding: 20px;
  background-color: ${(props) => (props.isNegative ? props.theme.colorNegative : props.theme.colorPositive)}
`;

export const ImageWrapper = styled.div`
  position: relative;
`

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`

export const TextWrapper = styled.div`
  position: relative;
  padding-left: 76px; 
  width: 236px;
`

export const Text = styled.span`
  width: 178px;
  margin-bottom: 4px;
  color: ${props => props.theme.colorWhite};
  font-weight: 400;
  font-size: 14px;
  display: flex;
  justify-content: center;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: ${props => props.isNegative ? props.theme.colorRed : props.theme.colorGreen };
`

export const Paragraph = styled.p`
  width: 500px;
`