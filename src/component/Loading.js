import React from 'react'
import lodding from './spiner.gif';

export default function Loading() {
  return (
    <div className='d-flex justify-content-center'>
        <img src={lodding}  alt=""/>
      
    </div>
  )
}
