import React from 'react'
import SelectRocketType from '../comps/SelectRocketType'
import { useFetch } from '../hooks/useFetch'

export default function AddLauncher() {
    function onChangeRocketType(e) {
        e.preventDefault()
        localStorage.setItem('rocketType', e.target.value)
    }   
return (
    <div className='w-full h-screen justify-center'>
        <form className='p-3 gap-5 border justify-around rounded flex flex-col w-[30%]'>
            <div onChange={e => {
                e.preventDefault()
                localStorage.setItem('city', e.target.value)
            }} className='w-[80%] self-center flex flex-col justify-between'>
                <label htmlFor="name">name:</label>
                <input placeholder='enter name' className='pl-1 border rounded border-black' type="text" name='name' />
            </div>
            <SelectRocketType firstOption='choose' setFunction={onChangeRocketType} flex_direction='col' />
            <div onChange={e => {
                e.preventDefault()
                localStorage.setItem('latitude', e.target.value)
            }} className='w-[80%] self-center flex flex-col justify-between'>
                <label htmlFor="latitude">latitude:</label>
                <input placeholder='enter latitude' className='pl-1 border rounded border-black' type="number" name='latitude' />
            </div>
            <div onChange={e => {
                e.preventDefault()
                localStorage.setItem('longitude', e.target.value)
            }} className='w-[80%] self-center flex flex-col justify-between'>
                <label htmlFor="longitude">longitude:</label>
                <input placeholder='enter longitude' className='pl-1 border rounded border-black' type="number" name='longitude' />
            </div>
            <div onChange={e => {
                e.preventDefault()
                localStorage.setItem('name', e.target.value)
            }} className='flex flex-col justify-between w-[80%] self-center'>
                <label htmlFor="city">city:</label>
                <input placeholder='enter city' className='pl-1  border rounded border-black' type="text" name='city' />
            </div>
            <button onClick={(e) => {
                e.preventDefault()
                useFetch((`http://localhost:3000/api/launchers`, { method: 'POST', Headers: { "content-type": "aplication/json" }, body: { name: localStorage.name, rocketType: localStorage.rocketType, latitude: localStorage.latitude, longitude: localStorage.longitude, name: localStorage.name } }))
            }} className='border bg-gray-500 hover:bg-gray-700 hover:cursor-pointer rounded-2xl w-[30%] self-center'>submit</button>
        </form>
    </div>
)
}
