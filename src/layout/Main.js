import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/share/Footer/Footer';
import Header from '../component/share/Navbar/Header/Header';

const Main = () => {
  return (
    <div>
      <Header/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default Main;