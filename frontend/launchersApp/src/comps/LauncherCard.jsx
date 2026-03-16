import React from 'react'
import { useFetch } from '../hooks/useFetch.js';
import { useParams } from 'react-router';

export default function LauncherCard() {
  const {id} = useParams()
    const launcher = useFetch(`http://localhost:3000/api/launchers/${id}`);
    console.log(launcher);
    
    const { _id, city, rocketType, latitude, longitude, name } = launcher[0]
    
  return (
    <div id={_id} className={`h-screen ml-3  w-full  content-center justify-around`}>
      <div className='flex flex-col  gap-3 self-center justify-around h-[60%] rounded w-[40%]' >
        <p id={_id} className='justify-between flex p-2 w-[80%] size border text-center'><span>id:</span> <span>{_id}</span></p>
        <p id={_id} className='justify-between flex p-2 w-[80%] border text-center'><span>city:</span> <span>{city}</span></p>
        <p id={_id} className='justify-between flex p-2 w-[80%] border text-center'><span>rocketType:</span> <span>{rocketType}</span></p>
        <p id={_id} className='justify-between flex p-2 w-[80%] border text-center'><span>latitude:</span> <span>{latitude}</span></p>
        <p id={_id} className='justify-between flex p-2 w-[80%] border text-center'><span>longitude:</span> <span>{longitude}</span></p>
        <p id={_id} className='justify-between flex p-2 w-[80%] border text-center'><span>name:</span> <span>{name}</span></p>
      </ div>
    </div>
  )
}
