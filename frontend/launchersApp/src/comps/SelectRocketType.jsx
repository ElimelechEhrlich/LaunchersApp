
import React from 'react'

export default function SelectRocketType({ firstOption, setFunction, flex_direction }) {
    return (
        <div className={`gap-2 pl-3 w-[80%] self-center flex flex-${flex_direction} justify-between`}>
            <label htmlFor="rocketType">rocketType:</label>
            <select onChange={e => setFunction(e.target.value)} className='w-full border rounded border-black' name="rocketType" id="rocketType">
                <option value={firstOption}>{firstOption}</option>
                <option value="Shahab3">Shahab3</option>
                <option value="Fetah110">Fetah110</option>
                <option value="Radwan">Radwan</option>
                <option value="Kheibar">Kheibar</option>
            </select>
        </div>
    )
}
