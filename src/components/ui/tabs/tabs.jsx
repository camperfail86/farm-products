import React, { useState } from "react";
import {TabListItem, TabButton, Header, Content} from "./style.js"

export default function Tabs({ tabsList = [], maxContentHeight }) {
  const [selectIndex, setSelectIndex] = useState(0);
  
  return (
    <>
    <Header>
      {tabsList.map((tab, index) => (
        <TabListItem key={`tab${index }`}>
          <TabButton
            $isSelect={selectIndex === index}
            {...(selectIndex === index
              ? { as: "span" }
              : {
                  onClick: () => {
                    setSelectIndex(index);
                  }
                })}
          >
            {tab.title}
          </TabButton>
        </TabListItem>
      ))}
    </Header>
    <Content $maxContentHeight={maxContentHeight}>
      {tabsList[selectIndex].content}
    </Content>
    </>
  )
};