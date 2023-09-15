/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Course.css';
import Cart from '../Cart/Cart';
import { FiDollarSign } from "react-icons/fi";
import {BsBook} from "react-icons/bs";



const Course = () => {

    const [allCourses, setAllCourses] = useState([])
   useEffect((() =>{
    fetch("./course.json")
    .then(res=>res.json())
    .then(data =>setAllCourses(data));
   }), []);
//    console.log(allCourses);

    return (
        
        <div className='container'>
           <div className="course-container">
            <div className="card-container">
         {
            allCourses.map(course => (
                <div key={course.id} className="card">
                   
                <div className="card-img">
                    <img className='photo' src={course.image} alt="" />
                </div>
                <h3 className='course_name'>{course.course_name}</h3>
                <p className='description'>{course.details}</p>
                <div className='info'>
                <p><span className='dollar'><FiDollarSign /></span> Price : {course.price}</p>
                <p><span className='book'><BsBook /></span> Credit : {course.credit}hr</p>
                </div>

                <button className='card-btn'>Select</button>
                </div>

           
            ))
         }
            </div>
            <div className="course-cart">
                <h1>this is cart</h1>
            </div>
           </div>
            
        </div>
    );
};

export default Course;