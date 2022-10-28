import React, { useEffect,useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./category.css"
// import  {useState} from 'react'
const Category = () => {
   
   const [categories,setCategories] = useState([])

 useEffect(()=>{
    fetch('https://digital-course-server-enamhossain.vercel.app/course-categories')
    .then(res => res.json())
    .then(data => setCategories(data));
 })
    return (
        <div className = "card  shadow pt-5 pb-5 mt-5 mb-5 bg-white rounded ">
            
          

          <ListGroup className="mx-5  category">
             {categories.map(category => 
                <ListGroup.Item className='list' key ={category.id}  variant="info">
                <Link className ="categorys" to ={`/category/${category.id}`}>{category.name}</Link>
               
                 </ListGroup.Item>
               )}
          </ListGroup>

        </div>
    );
};

export default Category;