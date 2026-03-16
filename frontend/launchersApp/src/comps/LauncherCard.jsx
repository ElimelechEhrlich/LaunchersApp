import React from 'react'
import { useFetch } from '../hooks/useFetch.js';
import { useParams } from 'react-router';

export default function LauncherCard({ launcherById }) {   
  const { _id, city, rocketType, latitude, longitude, name } = launcherById
  return (
    <div id={_id} className={`h-screen ml-3  w-full flex items-center justify-around`}>
      <div className='flex flex-col  gap-3 self-center justify-around h-[60%] rounded w-[40%]' >
        <p id={_id} className='justify-between flex p-2 w-[80%] size border text-center'><span>id:</span> <span>{_id}</span></p>
        <p id={_id} className='justify-between flex p-2 w-[80%] border text-center'><span className='font-bold'>city:</span> <span>{city}</span></p>
        <p id={_id} className='justify-between flex p-2 w-[80%] border text-center'><span className='font-bold'>rocketType:</span> <span>{rocketType}</span></p>
        <p id={_id} className='justify-between flex p-2 w-[80%] border text-center'><span className='font-bold'>latitude:</span> <span>{latitude}</span></p>
        <p id={_id} className='justify-between flex p-2 w-[80%] border text-center'><span className='font-bold'>longitude:</span> <span>{longitude}</span></p>
        <p id={_id} className='justify-between flex p-2 w-[80%] border text-center'><span className='font-bold'>name:</span> <span>{name}</span></p>
      </ div>
    </div>
  )
}
