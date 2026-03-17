import { useState } from 'react'
import LauncherInTable from '../comps/LauncherInTable'
import SelectRocketType from '../comps/SelectRocketType'
import { Link, useNavigate } from 'react-router'

export default function Home({ launchers, setIdForDetailsPage }) {
    const [search, setSearch] = useState('')
    const [typeFilter, setTypeFilter] = useState('All')
    const [destroyedFilter, setDestroyedFilter] = useState('All')
    const navigate = useNavigate()
    function launcherClickHendler(e) {
        setIdForDetailsPage(e.target.id)
        navigate(`/launcher_details/${e.target.id}`)
    }
    return (
        <div className='flex flex-col gap-3'>
            <Link className='self-center border rounded-2xl p-2 mt-2 bg-gray-400 hover:bg-gray-500' to={'/add_launcher'}>Add Launcher</Link>
            <div className='pl-3 self-center'>
                <label htmlFor="search">search: </label>
                <input className='pl-1 border rounded border-gray-600' type="text" placeholder='search' onChange={e => setSearch(e.target.value)} />
            </div>
            <SelectRocketType firstOption='All' setFunction={setTypeFilter} flex_direction='row' />
            <SelectDestroyed firstOption='All' setFunction={setDestroyedFilter} flex_direction='row' />
            <div >
                <LauncherInTable onClick={() => { }} className='font-bold' launcher={{ _id: 'id', city: 'city', rocketType: 'rocketType', latitude: 'latitude', longitude: 'longitude', name: 'name' }} />
                {launchers !== null && launchers.filter(launcher => typeFilter === 'All' ? launcher : launcher.rocketType === typeFilter).filter(launcher => (launcher.city.includes(search)).filter(launcher => destroyedFilter === 'All' ? launcher : launcher.destroyed === destroyedFilter)).map(l => l && <LauncherInTable onClick={launcherClickHendler} key={l._id} launcher={l} />)}
            </div>
        </div>
    )
}
