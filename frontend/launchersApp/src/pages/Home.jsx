import { useState } from 'react'
import LauncherInTable from '../comps/LauncherInTable'
import SelectRocketType from '../comps/SelectRocketType'
import { useNavigate } from 'react-router'

export default function Home({ launchers, setIdForDetailsPage }) {
    const [search, setSearch] = useState('')
    const [typeFilter, setTypeFilter] = useState('')
    const navigate = useNavigate()
    function launcherClickHendler(e) {
        setIdForDetailsPage(e.target.id)
        navigate(`/launcher_details/${e.target.id}`)
    }
    return (
        <div className='flex flex-col gap-3'>
            <div className='pl-3 self-center'>
                <label htmlFor="search">search: </label>
                <input className='pl-1 border rounded border-gray-600' type="text" placeholder='search' onChange={e => setSearch(e.target.value)} />
            </div>
            <SelectRocketType firstOption='All' setFunction={setTypeFilter} flex_direction='row' />
            <div >
                <LauncherInTable onClick={() => { }} className='font-bold' launcher={{ _id: 'id', city: 'city', rocketType: 'rocketType', latitude: 'latitude', longitude: 'longitude', name: 'name' }} />
                {launchers !== null && launchers.filter(launcher => typeFilter === 'All' ? launcher : launcher.rocketType === typeFilter).filter(launcher => launcher.city.includes(search)).map(l => l && <LauncherInTable onClick={launcherClickHendler} key={l._id} launcher={l} />)}
            </div>
        </div>
    )
}
