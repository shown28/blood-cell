import React, { useEffect } from 'react'
import './Header.css'
import { useState } from 'react'
import { homeRequestsApi } from '../services/allApi'

const UrgentRequire = ({request}) => {
  
console.log(request)

  return (
    <>
      <div className=' '>

        

        {/* card */}
       
            <div className='urgentRequire block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 '>
            <h1 className='font-bold text-lg'>{request.bloodGroup} Blood Required</h1>
            <h5 className='font-bold '><span className='opacity-40'>Need:</span> {request.units} Units</h5>
            <h5 className='font-bold '><span  className='opacity-40'>Place:</span>{request.place}</h5>
            <h5 className='font-bold '><span  className='opacity-40'>Name:</span>{request.pname}</h5>
            <h5 className='font-bold '><span  className='opacity-40'>Phone:</span>{request.phone} </h5>    
            </div>
       
        {/* <div className='urgentRequire rounded shadow px-5 py-6 bg-stone-100 '>
                <h1 className='font-bold text-lg'>A+ Blood Required</h1>
                <h5 className='font-bold '><span className='opacity-40'>Need:</span> 2 Units</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Place:</span>Govt Hospital Ernakulam</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Name:</span>Manu Antony</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Phone:</span> 1234567890</h5>
                 
                
            </div> */}
      </div>
    </>
  )
}

export default UrgentRequire