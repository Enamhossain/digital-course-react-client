import React from 'react';
import { useLoaderData } from 'react-router-dom';

import ShowCardata from '../Courses/ShowCard/ShowCardata';



const Categories = () => {
     const showCourses = useLoaderData();
    return (
        <div>
           {
              showCourses.map(data => <ShowCardata
                key = {data._id}
                data = {data}
                />)
             } 
        </div>
    );
};

export default Categories;