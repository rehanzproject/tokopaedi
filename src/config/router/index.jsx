import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from '../../component/organism/Product/Product'
import ProductSearch from '../../component/organism/ProductSearch/ProductSearch'
import LoginView from '../../views/LoginView'
import ShoppingCart from '../../component/organism/ShoppingCart/ShoppingCart'
import Shipment from '../../component/organism/Shipment/Shipment'
import Transaction from '../../component/organism/Transaction/Transaction'
import LandingPageView from "../../views/LandingPageView";
import ProductDetail from "../../component/organism/ProductDetail/ProductDetail";
import Pembayaran from "../../component/organism/Pembayaran/Pembayaran";
import SettingAccount from "../../component/organism/SettingAccount/SettingAccount";
import SuccessPageView from "../../views/SuccessPageView"

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPageView />} />
        <Route path="/product" element={<Product />} />
        <Route path="/search" element={<ProductSearch />} />
        <Route path="/:id/search" element={<ProductSearch />} />
        <Route path="/login" element={<LoginView />} />    
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/cart/shipment" element={<Shipment />} />        
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/setting/account" element={<SettingAccount />} />
        <Route path="/success-page" element={<SuccessPageView />} />
        <Route path="/pembayaran" element={<Pembayaran />} />      
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
