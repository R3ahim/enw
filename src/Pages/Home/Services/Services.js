import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../../hooks';
import Service from '../Home/Service/Service';
import './Services.css'
const Services = () => {
  const [services] = useProducts();

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center  heading'>
            <h1>This is serives</h1>
            </div>
            <div className='row row-cols-1 row-cols-sm-1  row-cols-md-3 g-4'>
        {services.map(service=><Service
        key={service.id}
        service={service}
        ></Service>)}
        </div>
        </div >
    );
};

export default Services;