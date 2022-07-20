import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category, { CategoryProps, PostsProps } from './component/Category';
import Header from './component/Header';
import Menu from './component/Menu';
import Main from './page/Main';
import Post from './page/Post';

const postsDummy: PostsProps[] = [{ title: 'title1', url: '' }];

const Router = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <BrowserRouter>
      <Header setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} children={<Category title="test" posts={postsDummy} />} />
      <Routes>
        <Route path="/blog" element={<Main />} />
        <Route path="/blog/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
