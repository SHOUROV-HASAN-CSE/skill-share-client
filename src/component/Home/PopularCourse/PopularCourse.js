import React from 'react';
import { Container } from 'react-bootstrap';
import './PopularCourse.css'
import { FaRegCircle } from 'react-icons/fa';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import img1 from '../../../assets/images/card1.webp'
import img2 from '../../../assets/images/card2.webp'
import img3 from '../../../assets/images/card3.webp'

const PopularCourse = () => {
  return (
    <div className='phmain'>
      <Container>
        <div>
        <p className='phhead'>Pop<span className='under'>ular Cou</span>rses</p>
        <p className='phtitle'>Our <span className='phmtitle'>Latest</span> Courses</p>
        </div>

         <div className='cardbase'>

           {/* card start 1*/}

           <div className='phcard'>
          <div className='phcardhead'>
          <img className='phimg' src={img1} alt="" />

          <div className='rating'>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarHalf className='star'/>
            <BsStar className='star'/>

            <p className='carddigit'>4.2</p>
            <p className='carddigit'>(15)</p>
          </div>

          <p className='phcardtext'>Flutter Apps Development: Basic to Advance Flutter Training</p>

          <div className='pcif'>
            <img className='pcimg' src={img1} alt="" />
            <div>
            <p className='pcinh'>By Shajeel Afzal In Development</p>
            </div>
          </div>

          <div className='d-flex align-items-center justify-content-between px-3'>
            <p className='mt-3 fs-5 fw-semibold booklogo'>$ 45</p>
            <div className='d-flex align-items-center'>
              <FaRegCircle className='booklogo'/>
            <p className='booked mt-3 fs-6 fw-semibold'>1000+   Booked</p>
            </div>
          </div>

          </div>
        </div>

          {/* card end 1*/}

          
           {/* card start 2*/}

           <div className='phcard'>
          <div className='phcardhead'>
          <img className='phimg' src={img2} alt="" />

          <div className='rating'>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarHalf className='star'/>
            <BsStar className='star'/>

            <p className='carddigit'>4.5</p>
            <p className='carddigit'>(11)</p>
          </div>

          <p className='phcardtext'>Mastering the Art of Video EditingTraining</p>

          <div className='pcif'>
            <img className='pcimg' src={img2} alt="" />
            <div>
            <p className='pcinh'>By Muhammad Nasir In Freelancing</p>
            </div>
          </div>

          <div className='d-flex align-items-center justify-content-between px-3'>
            <p className='mt-3 fs-5 fw-semibold booklogo'>$ 30</p>
            <div className='d-flex align-items-center'>
              <FaRegCircle className='booklogo'/>
            <p className='booked mt-3 fs-6 fw-semibold'>300+   Booked</p>
            </div>
          </div>

          </div>
        </div>

          {/* card end 2*/}

          
           {/* card start 3*/}

           <div className='phcard'>
          <div className='phcardhead'>
          <img className='phimg' src={img3} alt="" />

          <div className='rating'>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarFill className='star'/>
            <BsStarHalf className='star'/>
           

            <p className='carddigit'>4.78</p>
            <p className='carddigit'>(52)</p>
          </div>

          <p className='phcardtext'>Microsoft Excel Course for Data & Business Analytics (Basic to Advanced)</p>

          <div className='pcif'>
            <img className='pcimg' src={img3} alt="" />
            <div>
            <p className='pcinh'>By Rahim Zulfiqar Ali</p>
            </div>
          </div>

          <div className='d-flex align-items-center justify-content-between px-3'>
            <p className='mt-3 fs-5 fw-semibold booklogo'>$ 25</p>
            <div className='d-flex align-items-center'>
              <FaRegCircle className='booklogo'/>
            <p className='booked mt-3 fs-6 fw-semibold'>1400+   Booked</p>
            </div>
          </div>

          </div>
        </div>

          {/* card end 3*/}





         </div>
       

      </Container>
      
    </div>
  );
};

export default PopularCourse;