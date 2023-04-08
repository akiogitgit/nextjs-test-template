import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

export type User = {
  id: number
  name: string
}

const Users: NextPage = () => {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(
      res => res.json(),
    )
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <>
      <h1>ユーザー一覧</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Users
