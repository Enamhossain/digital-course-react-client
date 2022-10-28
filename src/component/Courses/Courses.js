import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCardata from './ShowCard/ShowCardata';


const Courses = () => {
     const allCourses = useLoaderData()
   
    return (
        <div>
              
              <h3>Browse Our Popular Course</h3>
              
           {
              allCourses.map(data => <ShowCardata
                key = {data._id}
                data = {data}
                />)
             } 
   
             
            
        </div>
    );
};

export default Courses;