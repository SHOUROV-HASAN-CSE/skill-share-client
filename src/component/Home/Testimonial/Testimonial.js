import React from 'react';
import { Container } from 'react-bootstrap';
import './Testimonial.css';
import img1 from '../../../assets/images/images.jpeg';

const Testimonial = () => {
  return (
    <div className='tesbg'>

      <Container>
        <div>
          <p className='tesh'><span className='under'>Feedba</span>ck</p>
          <p className='test'>Testimonials</p>
          <p className='testext'>The best platform for learning. I will definitely recommend “Learn with Shajeel”. Application and Youtube channnel related to this page are best for learning purpose. I would recommend this course to every beginner out there.
          </p>
        </div>
          <div className='testif'>
            <img className='testiimg' src={img1} alt="" />
            <div>
            <p className='testinh'>Shourov Hasan</p>
            <p className='testin'>Student</p>
            </div>
          </div>

      </Container>
      
    </div>
  );
};

export default Testimonial;