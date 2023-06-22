import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../component/share/Footer/Footer';
import LeftSideNav from '../component/share/LeftSideNav/LeftSideNav';
import Header from '../component/share/Navbar/Header/Header';

const Main = () => {
  return (
    <div>
      <Header/>
      <Container>
      <Row>
        <Col lg="4">
          <LeftSideNav/>
        </Col>
        <Col lg="8">
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </div>
  );
};

export default Main;