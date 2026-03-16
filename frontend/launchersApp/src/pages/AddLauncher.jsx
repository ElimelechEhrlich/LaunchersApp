import React from 'react'

export default function AddLauncher() {
    return (
        <div className='w-full h-screen justify-center'>
            <form className='p-3 gap-5 border justify-around rounded flex flex-col w-[30%]'>
                <div className='w-[80%] self-center flex flex-col justify-between'>
                    <label htmlFor="name">name:</label>
                    <input placeholder='enter name' className='pl-1 border rounded border-black' type="text" name='name' />
                </div>
                <div className='w-[80%] self-center flex flex-col justify-between'>
                    <label htmlFor="rocketType">rocketType:</label>
                    <select className='w-full border rounded border-black' name="rocketType" id="rocketType">
                        <option value="Choose">choose</option>
                        <option value="Shahab3">Shahab3</option>
                        <option value="Fetah110">Fetah110</option>
                        <option value="Radwan">Radwan</option>
                        <option value="Kheibar">Kheibar</option>
                    </select>
                </div>
                <div className='w-[80%] self-center flex flex-col justify-between'>
                    <label htmlFor="latitude">latitude:</label>
                    <input placeholder='enter latitude' className='pl-1 border rounded border-black' type="number" name='latitude' />
                </div>
                <div className='w-[80%] self-center flex flex-col justify-between'>
                    <label htmlFor="longitude">longitude:</label>
                    <input placeholder='enter longitude' className='pl-1 border rounded border-black' type="number" name='longitude' />
                </div>
                <div className='flex flex-col justify-between w-[80%] self-center'>
                    <label htmlFor="city">city:</label>
                    <input placeholder='enter city' className='pl-1  border rounded border-black' type="text" name='city' />
                </div>
                <button className='border bg-gray-500 hover:bg-gray-700 hover:cursor-pointer rounded-2xl w-[30%] self-center'>submit</button>
            </form>
        </div>
    )
}
