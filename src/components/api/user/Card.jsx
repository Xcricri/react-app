import { useState, useEffect } from 'react'
import axios from 'axios'

function Card() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=100') // ambil 100 data user
      .then(res => {
        setData(res.data.results)
        setLoading(false)
      })
      .catch(err => {
        console.log("Error: " + err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Random Users</h1>
      <ul className="space-y-3">
        {data.map((user) => (
          <li key={user.login.uuid} className="border p-3 rounded shadow-sm flex items-center space-x-4">
            <img src={user.picture.thumbnail} alt="User" className="rounded-full" />
            <div>
              <p className="font-semibold">{user.name.first} {user.name.last}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card