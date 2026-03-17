import React from 'react'

export default function UserDetailes(user) {
  const {_id, username, email, user_type, last_login} = user
  return (
    <div>
        <p>{_id}</p>
        <p>{username}</p>
        <p>{email}</p>
        <p>{user_type}</p>
        <p>{last_login}</p>
    </div>
  )
}
