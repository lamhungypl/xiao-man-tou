import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LayoutContainer } from 'src/views/common';
import Account from 'src/views/pages/Account';
import Cart from 'src/views/pages/Cart';
import Checkout from 'src/views/pages/Checkout';
import Contact from 'src/views/pages/Contact';
import Home from 'src/views/pages/Home';
import Login from 'src/views/pages/Login';
import NotFound from 'src/views/pages/NotFound';
import ProductDetails from 'src/views/pages/ProductDetails';
import ProductList from 'src/views/pages/Products';
import WishList from 'src/views/pages/Wishlist';

import logo from '../logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LayoutContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<WishList />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resource/*" element={<WishList />} />
          <Route path="/products*" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
