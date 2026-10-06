import { Link } from "react-router";
import useForm from "../hooks/useForm";

// aca lo que hacemos es en vez de escribir toda esa clase en cada <input>, lo guardamos una sola vez
const inputClass =
  "mb-4 mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-green-600 focus:outline-none";
const labelClass = "block text-sm font-medium text-gray-700";

function RegisterPage() {
  const { formState, handleInputChange } = useForm({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-md"
      >
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Crear cuenta
        </h1>

        <div className="grid gap-x-4 sm:grid-cols-2">
          <div>
            <label htmlFor="first_name" className={labelClass}>
              Nombre
            </label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              value={formState.first_name}
              onChange={handleInputChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="last_name" className={labelClass}>
              Apellido
            </label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              value={formState.last_name}
              onChange={handleInputChange}
              required
              className={inputClass}
            />
          </div>
        </div>

        <label htmlFor="username" className={labelClass}>
          Nombre de usuario
        </label>
        <input
          id="username"
          name="username"
          type="text"
          value={formState.username}
          onChange={handleInputChange}
          required
          className={inputClass}
        />

        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleInputChange}
          required
          className={inputClass}
        />

        <label htmlFor="password" className={labelClass}>
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
          className="w-full rounded-lg bg-green-600 py-2 font-semibold text-white hover:bg-green-700"
        >
          Registrarme
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Ya tenés cuenta?{" "}
          <Link
            to="/login"
            className="font-medium text-green-700 hover:underline"
          >
            Iniciá sesión
          </Link>
        </p>
      </form>
    </main>
  );
}

export default RegisterPage;
