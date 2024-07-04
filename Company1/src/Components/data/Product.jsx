import React, { useState } from 'react';
import { resntdata } from './Card';
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Product = () => {
    const selector = useSelector((store)=> store.search);
    console.log(selector);
    const [filter , setFilter] = useState([]);
    const data = resntdata;

    const filterData(){
        
    }


    //  console.log(data);

  return (
    <div className='flex flex-wrap justify-center gap-9'>
      {data.map((item, index) => (
        <div key={index} className='border border-black mb-4 w-full md:w-1/3 lg:w-1/4 rounded-md overflow-hidden'>
          <div className='w-full h-48'>
            <img src={item.imgurl} alt={item.title} className='w-full h-full object-cover rounded-md' />
          </div>
          <div className='p-4 flex flex-col gap-1'>
            <div className='flex items-center justify-between'>
              <h3 className='text-xl font-semibold mt-2'>{item.title}</h3>
              <div className='flex items-center'>
                <FaRegHeart className='ml-2' />
              </div>
            </div>
            <p className='text-blue-500'>₹ {item.price}</p>
            <p className='text-black'>Address: {item.address}</p>
            <div className='flex justify-between mt-2'>
              <p>Beds: {item.beds}</p>
              <p>Baths: {item.bath}</p>
              <p>Sqft: {item.sqft}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
