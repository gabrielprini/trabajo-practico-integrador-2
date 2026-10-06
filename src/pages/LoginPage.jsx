// Link sirve para navegar entre páginas de React sin recargar toda la página.
import { Link } from "react-router";
// Traemos el hook que vimos antes. Nos permite manejar: email y password sin tener que crear un useState separado para cada uno.
import useForm from "../hooks/useForm";

// Creamos el componente que representa nuestra página de login.
function LoginPage() {
  // Acá estamos utilizando el hook que vimos anteriormente.
  const { formState, handleInputChange } = useForm({
    email: "",
    password: "",
  });

  // Esta función se ejecuta cuando el usuario envía el formulario. Por ejemplo cuando hace clic
  const handleSubmit = (event) => {
    // lo que hace event.preventDefault() es que cuando enviás un formulario HTML,
    // el navegador intenta: enviar el formulario y recargar/navegar la página. preventDefault() evita ese comportamiento.
    event.preventDefault();
  };

  return (
    // es el contenedor
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      {/* onSubmit={handleSubmit}, Significa: Cuando se envíe este formulario, ejecutá handleSubmit.*/}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md"
      >
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Iniciar sesión
        </h1>

        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
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
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
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
          Ingresar
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          ¿No tenés cuenta?{" "}
          <Link
            to="/register"
            className="font-medium text-green-700 hover:underline"
          >
            Registrate
          </Link>
        </p>
      </form>
    </main>
  );
}

export default LoginPage;
