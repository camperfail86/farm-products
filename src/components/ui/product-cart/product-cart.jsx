import React from "react";
import Tabs from "../../ui/tabs/tabs"
import { ProductImage, ProductTitle, Price, ContentWrapper, Panel } from "./styles";
import OptionsList from "../../ui/options-list/options-list"

export default function ProductCart({ product }) {
  const tabsList = [
    {
      title: "Oписание",
      content: product.description
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />
    }
  ];

  return (
    <Panel>
      <ProductImage src={product.image}/>
      <ContentWrapper>
        <ProductTitle>{product.name}</ProductTitle>
        <Tabs maxContentHeight="103px" tabsList={tabsList}/>
        <Price>{product.price} руб. / {product.weight} гр.</Price>
      </ContentWrapper>
    </Panel>
  );
};