import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check login status from backend (adjust endpoint as needed)
    fetch('http://localhost:5000/api/auth/status', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => setIsLoggedIn(data.loggedIn))
      .catch(err => console.error(err))
  }, [])

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow">
      <h1 className="text-2xl font-bold">INVEST</h1>
      <div className="flex gap-4">
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="hover:text-blue-400 ">Login</Link>
            <Link to="/register" className="hover:text-green-400">Register</Link>
          </>
        ) : (
          <button
            onClick={() => {
              fetch('http://localhost:5000/api/auth/logout', {
                method: 'POST',
                credentials: 'include',
              })
                .then(() => setIsLoggedIn(false))
            }}
            className="hover:text-red-400"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}