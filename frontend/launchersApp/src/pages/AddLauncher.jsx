import React from 'react'

export default function AddLauncher() {
    return (
        <form>
            <div>
                <label htmlFor="name">name:</label>
                <input type="text" name='name'/>
            </div>
            <div>
                <label htmlFor="rocketType">rocketType:</label>
                <input type='checkbox' name='rocketType'></input>
            </div>
            <div>
                <label htmlFor="latitude">latitude:</label>
                <input type="number" name='latitude'/>
            </div>
            <div>
                <label htmlFor="longitude">longitude:</label>
                <input type="number" name='longitude'/>
            </div>
            <div>
                <label htmlFor="city">city:</label>
                <input type="text" name='city'/>
            </div>
        </form>
    )
}
