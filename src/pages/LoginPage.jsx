import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import useForm from '../hooks/useForm'

const API_URL = 'http://localhost:3000'

function LoginPage() {
  const navigate = useNavigate()
  const { formState, handleInputChange } = useForm({
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState([])

  const loginUser = async () => {
    try {
      setIsLoading(true)
      setErrors([])

      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        localStorage.setItem('isLogged', 'true')
        navigate('/', { replace: true })
        return
      }

      if (response.status === 400) {
        const result = await response.json()
        setErrors(result.errors.map((error) => error.msg))
      } else if (response.status === 401) {
        setErrors(['Email o contraseña incorrectos.'])
      } else if (response.status === 403) {
        setErrors(['No tenés permisos para realizar esta acción.'])
      } else {
        setErrors(['Ocurrió un error en el servidor. Intentá más tarde.'])
      }
    } catch {
      setErrors(['No se pudo conectar con el servidor. Verificá tu conexión.'])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    loginUser()
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md"
      >
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Iniciar sesión
        </h1>

        {errors.length > 0 && (
          <ul className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700">
            {errors.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        )}

        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleInputChange}
          required
          className="mb-4 mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-green-600 focus:outline-none"
        />

        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleInputChange}
          required
          className="mb-6 mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-green-600 focus:outline-none"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-green-600 py-2 font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? 'Ingresando...' : 'Ingresar'}
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          ¿No tenés cuenta?{' '}
          <Link to="/register" className="font-medium text-green-700 hover:underline">
            Registrate
          </Link>
        </p>
      </form>
    </main>
  )
}

export default LoginPage
