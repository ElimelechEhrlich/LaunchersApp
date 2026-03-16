import { useState } from 'react'
import Launcher from '../comps/Launcher'
import SelectRocketType from '../comps/SelectRocketType'
export default function Home({ launchers }) {
    const [search, setSearch] = useState('')
    const [typeFilter, setTypeFilter] = useState('')
    return (
        <>
            <div className='pl-3'>
                <label htmlFor="search">search: </label>
                <input className='pl-1 border rounded border-gray-600' type="text" placeholder='search' onChange={e => setSearch(e.target.value)} />
            </div>
            <SelectRocketType firstOption='All' setFunction={setTypeFilter} flex_direction='row' />
            <Launcher onClick={()=>{}} launcher={{ id: 'id', city: 'city', rocketType: 'rocketType', latitude: 'latitude', longitude: 'longitude', name: 'name' }} />
            {launchers.filter(launcher => typeFilter === 'All'? launcher: launcher.rocketType === typeFilter).filter(launcher => launcher.city.includes(search)).map(l => l && <Launcher onClick={()=>{}} launcher={l} />)}
        </>
    )
}
