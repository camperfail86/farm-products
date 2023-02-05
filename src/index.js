import React from 'react';
import { createRoot } from "react-dom/client";
import PageWrapper from './components/blocks/page-wrapper/page-wrapper.jsx';
import {features} from "../src/mock/mock";
import {GlobalStyle} from "./styles"
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./thems/default";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Urls } from "./url";
import BuyPage from "./components/pages/buy-page/buy-page";
import {products} from "./mock/mock";
import MainPage from "./components/pages/main-page/main-page";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={Urls.MAIN} element={<PageWrapper features={features}/>}>
            <Route index element={<MainPage features={features}/>} />
            <Route path={Urls.BUY} element={<BuyPage products={products}/>} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </>
);