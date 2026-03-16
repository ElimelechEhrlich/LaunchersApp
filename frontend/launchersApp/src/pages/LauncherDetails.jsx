import React from 'react'
import LauncherCard from '../comps/LauncherCard'
import { useParams } from 'react-router';

export default function LauncherDetails() {
    const { id } = useParams()
    const launcherById = useFetch(`http://localhost:3000/api/launchers/${id}`);
    console.log(launcherById);
    return (
        <div>
            <LauncherCard launcherById={launcherById} />
        </div>
    )
}
