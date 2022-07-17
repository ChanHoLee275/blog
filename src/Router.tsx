import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Main from './page/Main';
import Post from './page/Post';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/blog" element={<Main />} />
      <Route path="/blog/post" element={<Post />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
