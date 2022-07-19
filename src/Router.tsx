import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Menu from './component/Menu';
import Main from './page/Main';
import Post from './page/Post';

const Router = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <BrowserRouter>
      <Header setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Routes>
        <Route path="/blog" element={<Main />} />
        <Route path="/blog/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
