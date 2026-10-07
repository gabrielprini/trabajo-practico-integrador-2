import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

const API_URL = 'http://localhost:3000'

function Navbar() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const logoutUser = async () => {
    try {
      setIsLoading(true)
      await fetch(`${API_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      })
    } catch {
      // Si el backend no responde, igual se cierra la sesión local
    } finally {
      localStorage.removeItem('isLogged')
      navigate('/login', { replace: true })
    }
  }

  return (
    <nav className="flex items-center justify-between bg-green-700 px-6 py-3 text-white shadow">
      <span className="text-lg font-bold">Blog Personal</span>

      <div className="flex items-center gap-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>

        <button
          type="button"
          onClick={logoutUser}
          disabled={isLoading}
          className="rounded-lg bg-white px-3 py-1 text-sm font-semibold text-green-700 hover:bg-green-100 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? 'Saliendo...' : 'Logout'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar