import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
        <h2>this is course component</h2>
      {
        courses.map(course =><CourseCard key={course.id}
        course={course}
        ></CourseCard>)
      }
    
    </div>
  );
};

export default Courses;