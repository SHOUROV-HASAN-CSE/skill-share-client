import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
  const course = useLoaderData();
  console.log(course);

  return (
    <div>
      <h2>this is category component{course.length}</h2>
    </div>
  );
};

export default Category;