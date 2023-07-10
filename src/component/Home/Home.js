import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import Meeting from './Meeting/Meeting';
import PopularCourse from './PopularCourse/PopularCourse';
import Review from './Review/Review';
import Skill from './Skill/Skill';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Skill/>
       <Features/>
       <PopularCourse/>
       <Review/>
       <Meeting/>
    <Testimonial/>
    </div>
  );
};

export default Home;