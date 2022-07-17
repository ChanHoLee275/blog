import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './component/Header';
import List from './component/List';

const Router = () => (
  <BrowserRouter>
    <Header />
    <List>
      <a href="https://www.flaticon.com/free-icons/growth" title="growth icons">
        Growth icons created by Freepik - Flaticon
      </a>
    </List>
  </BrowserRouter>
);

export default Router;
