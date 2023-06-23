import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import Meeting from './Meeting/Meeting';
import Review from './Review/Review';
import Skill from './Skill/Skill';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Skill/>
       <Features/>
       <Review/>
       <Meeting/>
    <Testimonial/>
    </div>
  );
};

export default Home;