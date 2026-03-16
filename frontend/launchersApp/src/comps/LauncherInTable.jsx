import React from 'react'

export default function LauncherInTable( { launcher, onClick, className=null} ) {
    const { _id, city, rocketType, latitude, longitude, name } = launcher
  return (
    <div id={_id} onClick={e => onClick(e)} className={`hover:cursor-pointer ml-3 flex w-[97%] content-center justify-around ${className}`}>
        <p id={_id} className=' w-[30%] size border text-center'>{_id}</p>
        <p id={_id} className='w-[14%] border text-center'>{city}</p>
        <p id={_id} className='w-[14%] border text-center'>{rocketType}</p>
        <p id={_id} className='w-[14%] border text-center'>{latitude}</p>
        <p id={_id} className='w-[14%] border text-center'>{longitude}</p>
        <p id={_id} className='w-[14%] border text-center'>{name}</p>
    </div>
  )
}
