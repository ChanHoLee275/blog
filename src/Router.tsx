import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Main from './page/Main';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/blog" element={<Main />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
