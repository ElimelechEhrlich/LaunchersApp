import React from 'react'

export default function Launcher( {launcher} ) {
    const { id, city, rocketType, latitude, longitude, name } = launcher
  return (
    <div className='flex w-full justify-around'>
        <p>{id}</p>
        <p>{city}</p>
        <p>{rocketType}</p>
        <p>{latitude}</p>
        <p>{longitude}</p>
        <p>{name}</p>
    </div>
  )
}
