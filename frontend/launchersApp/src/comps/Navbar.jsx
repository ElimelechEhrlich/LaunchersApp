import React from 'react'
import { Link, useNavigate } from 'react-router'
import UserDetailes from './UserDetailes'

export default function Navbar() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div className='flex items-center justify-around h-5'>
      <p onClick={() => {localStorage.my_token ? <UserDetailes user={user} /> : navigate('/login')}}>profile</p>
      <Link to={'/register'}>register</Link>
      <Link to={'/login'}>login</Link>
      <Link onClick={() => localStorage.clear()} to={'/login'}>logout</Link>
      {/* {localStorage.my_token ? <UserDetailes user={user} /> : navigate('/login')} */}
    </div>
  )
}
