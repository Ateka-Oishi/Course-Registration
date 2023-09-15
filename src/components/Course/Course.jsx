/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Course.css';
import Cart from '../Cart/Cart';
import { FiDollarSign } from "react-icons/fi";
import {BsBook} from "react-icons/bs";
import Swal from 'sweetalert2';




const Course = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

   useEffect((() =>{
    fetch("./course.json")
    .then(res=>res.json())
    .then(data =>setAllCourses(data));
   }), []);
   //console.log(allCourses);
   
   const handleSelectCourse = (course) =>{
   //console.log(course);
   const isAvailable = selectedCourses.find(subject =>subject.id == course.id)
   let courseCredit = course.credit;
   let count = course.price;

   if(isAvailable) {
   //return alert('already selected');
   Swal.fire({
    icon: 'error',
    text: 'Oops! Course is already selected.'
});


   }
   else{
    selectedCourses.forEach((subject) => {
        count = count + subject.price;
        courseCredit = courseCredit + subject.credit;
    });
    
    const totalCreditRemaining = 20 - courseCredit;
    if (courseCredit > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You cannot select more than 20 credits.',
            
          });
        
    }
    else {    
    setTotalCredit(courseCredit);
    setRemaining(totalCreditRemaining);
    setTotalPrice(count);
    setSelectedCourses([...selectedCourses, course]);
   
    }
   }

   };



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
                <h3 className='course-title'>{course.course_name}</h3>
                <p className='description'>{course.details}</p>
                <div className='info'>
                <p><span className='dollar'><FiDollarSign /></span>  Price : {course.price}</p>
                <p><span className='book'><BsBook /></span>  Credit : {course.credit}hr</p>
                </div>
                <button onClick={ () => handleSelectCourse(course)} className='card-btn'>Select</button>
                </div>

           
            ))
         }
            </div>
            <div className="course-cart">
                <Cart selectedCourses={selectedCourses} remaining={remaining} totalCredit={totalCredit} totalPrice={totalPrice}></Cart>
            </div>
           </div>
            
        </div>
    );
};

export default Course;