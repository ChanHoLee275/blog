import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './component/Header';
import Main from './page/Main';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Route path="/" element={<Main />} />
  </BrowserRouter>
);

export default Router;
