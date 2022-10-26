import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
         <h1 className='fs-1 fw-semibold mb-5 text-info text-center'>All Course</h1>
      {
        courses.map(course =><CourseCard key={course.id}
        course={course}
        ></CourseCard>)
      }
    
    </div>
  );
};

export default Courses;