import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
      fetch('https://skillshare-server.vercel.app/course-categories')
      .then(res => res.json())
      .then(data => setCategories(data))
    }, [])


  return (
    <div>
      <h2 className='fw-bold text-info mb-4'>Course Category</h2>
      <div>
        {
          categories.map(category => <p key={category.id}>
            <Link to={`/category/${category.id}`}><Button variant="outline-info" className='fw-bold'>{category.name}</Button></Link>
          </p>)
        }
      </div>
    </div>
  );
};

export default LeftSideNav;