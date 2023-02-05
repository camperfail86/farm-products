import {CardWrapper, ImageWrapper, Image, TextWrapper, Text, Paragraph} from './styles'

export default function FeatureCard({  
  title, // название особенности
  owner, // владелец особенности (обычный магазин, фермерский)
  about, // описание особенности
  isNegative, // является ли особенность отрицательной
  image}
  )
  {
    return(
      <CardWrapper isNegative={isNegative}>
        <ImageWrapper>
          <Image width={56} height={56} src={image} alt={title}/>
        </ImageWrapper>
        <TextWrapper>
          <Text isNegative={isNegative}>{owner}</Text>
          <b>{title}</b>
        </TextWrapper>
          <Paragraph>
          Домашняя колбаса из мяса, соли и специй и колбаса из магазина — 
          два настолько разных продукта, что они даже не родственники
          </Paragraph>
      </CardWrapper>
    )
} 
