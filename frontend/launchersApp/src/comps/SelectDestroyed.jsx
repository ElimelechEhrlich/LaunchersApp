
import React from 'react'

export default function SelectDestroyed({ firstOption, setFunction, flex_direction }) {
    return (
        <div className={`gap-2 pl-3 w-[80%] self-center flex flex-${flex_direction} justify-between`}>
            <label htmlFor="destroyed">destroyed:</label>
            <select onChange={e => setFunction(e.target.value)} className='w-full border rounded border-black' name="destroyed" id="destroyed">
                <option value={firstOption}>{firstOption}</option>
                <option value="true">true</option>
                <option value="false">false</option>
            </select>
        </div>
    )
}
