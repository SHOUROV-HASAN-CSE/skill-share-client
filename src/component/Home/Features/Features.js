import React from 'react';
import { Container } from 'react-bootstrap';
import './Features.css';
import { PiSunglassesBold, PiCurrencyCircleDollarBold, PiQuestionBold } from "react-icons/pi";
import { LuTimerReset } from "react-icons/lu";
import { FaTools, FaFacebookF } from "react-icons/fa";

const Features = () => {
  return (
    <div className='featurehead'>
      <Container>
        <p className='festitle'> F<span className='festitles'>eature</span>s</p>
        <h1 className='fesahead'>Master <span className='feshead2'>the skills</span> to drive your career</h1>
        <div className='rowdiv'>

        <div>
          <div className='fhead'>
         <PiSunglassesBold className='flogo'/> 
         <p className='ftop'>Live & Recorded Sessions</p>
         <p className='fmiddle'>LWS Academy offers a variety of class formats, including live and recorded classes with high-quality playback.</p>
        </div>
          </div>

          <div>
          <div className='fhead'>
         <LuTimerReset className='flogo'/> 
         <p className='ftop'>Interactive Quizzes & Materials</p>
         <p className='fmiddle'>At LWS Academy, the students are given interactive and innovative materials to make their learning experience more enjoyable.</p>
        </div>
          </div>

          <div>
          <div className='fhead'>
         <PiCurrencyCircleDollarBold className='flogo'/> 
         <p className='ftop'>Freelancing Sessions</p>
         <p className='fmiddle'>Students will also learn how to sell their skills online through Fiverr's freelance platform.</p>
        </div>
          </div>

          <div>
          <div className='fhead'>
         <PiQuestionBold className='flogo'/> 
         <p className='ftop'>Assignments & Quizzes</p>
         <p className='fmiddle'>Students will have the opportunity to research their topic, accelerate their learning, and create different samples for their portfolio.</p>
        </div>
          </div>

          <div>
          <div className='fhead'>
         <FaTools className='flogo'/> 
         <p className='ftop'>Free Premium Resources</p>
         <p className='fmiddle'>Students will get high-quality resources (themes, templates, tools) for free to make their work stand out.</p>
        </div>
          </div>

          <div>
          <div className='fhead'>
         <FaFacebookF className='flogo'/> 
         <p className='ftop'>Private Facebook Group</p>
         <p className='fmiddle'>A Support Chat With Trainer, His Team And Your Class Mates.</p>
        </div>
          </div>
      
        </div>
      </Container>
      
    </div>
  );
};

export default Features;