/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Cart.css";
import Course from '../Course/Course';

const Cart = ({selectedCourses, remaining, totalCredit}) => {
    // console.log(selectedCourses);
    return (
        <div>
            
            <h5 className='remaining'>Credit Hour Remaining {remaining} hr</h5>
            <hr />
             
            <h4 className='course-name'>Course Name : {selectedCourses.length}</h4>
            
            {
            selectedCourses.map((course,idx) => (
                <li key={idx}>{idx+1}. {course.course_name}</li>
                
               
                
            ))
            }
            <hr />
            <h5 className='total-credit'>Total Credit Hour: {totalCredit}</h5>
            <hr />

        </div>
    );
};

export default Cart;