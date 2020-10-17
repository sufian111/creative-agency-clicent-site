import React, { useEffect, useState } from 'react';
import NavbarTop from '../HomePage/Top/Header/NavbarTop';
import OrderCourseMain from './OrderCourseMain';

const OrderCourse = () => {

  


    return (
        <div>
            <NavbarTop></NavbarTop>
            <div className="row container d-flex justify-content-center">
            <OrderCourseMain></OrderCourseMain>
            </div>
        </div>
    );
};

export default OrderCourse;