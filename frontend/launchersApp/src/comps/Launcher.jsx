import React from 'react'

export default function Launcher( {launcher, onClick} ) {
    const { id, city, rocketType, latitude, longitude, name } = launcher
  return (
    <div onClick={onClick} className='ml-3 border flex w-[97%] content-center justify-around'>
        <p className='border w-full text-center'>{id}</p>
        <p className='border w-full text-center'>{city}</p>
        <p className='border w-full text-center'>{rocketType}</p>
        <p className='border w-full text-center'>{latitude}</p>
        <p className='border w-full text-center'>{longitude}</p>
        <p className='border w-full text-center'>{name}</p>
    </div>
  )
}
