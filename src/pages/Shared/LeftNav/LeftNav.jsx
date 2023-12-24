import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftNews from '../LeftNews/LeftNews';

const LeftNav = () => {
    const [categories, setCategories] = useState([]); 

    useEffect(() =>{
         fetch('http://localhost:4000/categories')
         .then(res => res.json())
         .then(data => setCategories(data))
         .catch(error => console.error(error))
    },[])

    return (
        <div className='mt-4'>
           <h4 className=' mb-3 ps-4'>All Category</h4>
           <h3 className='shadow-sm bg-light p-3 text-center'>National News</h3>
           <div className='ps-5 py-3 shadow-sm p-3 mb-5 bg-white rounded mt-4'>
           {
            categories.map(category => <p key={category.id}>
                <Link to={`/category/${category.id}`}className='text-decoration-none p-3 text-secondary fs-5'>{category.name}</Link>
            </p>)
           }
           </div>
           <LeftNews></LeftNews>
        </div>
    );
};

export default LeftNav;