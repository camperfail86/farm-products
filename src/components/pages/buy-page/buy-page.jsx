import "./styles";
import Price from "../../ui/price/price"
import Button from '../../ui/button/button.jsx';
import {Form, Panel, LeftColumn, 
        Title, Address, PriceSpan, ProductSwiper,
        CheckboxLabel} from "./styles";
import ProductCart from "../../ui/product-cart/product-cart"
import CheckboxList from "../../ui/checkbox-list/checkbox-list"
import React, {useState} from "react"
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

export default function BuyPage({products}) {
  const [selectProductIds, setSelectProductIds] = useState([]);
  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );
  return (
    <Form>
      <LeftColumn>
        <Panel marginBottom="20px">
          <Title>Выберите продукты</Title>
          <CheckboxList 
                    labelComponent={CheckboxLabel}
                    name={"select-products"}
                    isGridList={false}
                    options={products.map((product) => ({
                      value: product.id,
                      title: product.name
                    }))}
                    selectValues={selectProductIds}
                    onChange={setSelectProductIds}/>
        </Panel>
        <Panel>
          <Title>Сделать заказ</Title>
          <Address placeholder="Введите адрес доставки" />
          <PriceSpan>Цена:</PriceSpan>
          <Price value={fullPrice}>400</Price>
          <Button minWidthForButton="311px"></Button>
        </Panel>
      </LeftColumn>
      <ProductSwiper         
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fraction"
        }}
        >
        {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCart product={product} />
            </SwiperSlide>
          ))}
      </ProductSwiper>
    </Form>
  )
}