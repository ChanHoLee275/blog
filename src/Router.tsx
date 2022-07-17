import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './component/Header';
import List from './component/List';

const Router = () => <BrowserRouter><Header/><List></List></BrowserRouter>; 

export default Router;