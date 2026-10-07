// Traemos tres hooks de React:
// useState → guardar estados.
// useEffect → ejecutar código cuando ocurre algo, por ejemplo cuando se carga el componente.
// useCallback → guardar una función para que no se cree nuevamente en cada renderizado.
import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  // Esto es parecido a formState, data = datos actuales, setData = funcion para cambiar
  // y empezamos con null porque todavia no recibimos datos de la API
  const [data, setData] = useState(null);
  // sirve para saber: ¿Todavía estoy esperando la respuesta de la API?
  const [isLoading, setIsLoading] = useState(true);
  // Guarda el mensaje de error si algo sale mal.
  const [error, setError] = useState(null);

  // Esta función va a hacer la petición a la API.
  const fetchData = useCallback(async () => {
    try {
      // fetch() hace una petición HTTP.
      // url indica a dónde hacemos la petición.
      // credentials: 'include': Le dice al navegador que incluya las credenciales/cookies
      // en la petición cuando corresponda.
      const response = await fetch(url, { credentials: "include" });

      // "Si la respuesta NO fue exitosa"
      if (!response.ok) {
        // 401 significa que el usuario no está autenticado correctamente.
        if (response.status === 401) {
          throw new Error(
            "Sesión inexistente o expirada. Iniciá sesión nuevamente.",
          );
        }
        // El usuario está autenticado, pero no tiene permiso.
        if (response.status === 403) {
          throw new Error("No tenés permisos para ver este contenido.");
        }
        throw new Error("Ocurrió un error en el servidor. Intentá más tarde.");
      }

      // response.json() convierte esa respuesta para poder trabajar con ella en JavaScript.
      const result = await response.json();
      // aca guardamos el resultado
      setData(result);
      setError(null);
      // Si algo falló dentro del try, llegamos acá.
      // err representa el error.
    } catch (err) {
      setError(err.message);
      // finally se ejecuta siempre, haya salido bien o haya salido mal la petición.
    } finally {
      // setIsLoading(false) Porque ya terminamos de cargar.
      setIsLoading(false);
    }
    // Esto significa que fetchData depende de url.
    // Si cambia url, React crea una nueva versión de fetchData.
  }, [url]);

  // Esto hace que fetchData() se ejecute cuando corresponde.
  useEffect(() => {
    // La consigna pide invocar desde el efecto la función async declarada afuera.
    // Los setState de fetchData ocurren después de un await, no de forma sincrónica.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
    // "Este efecto depende de fetchData."
    // Como fetchData depende de url, si cambia la URL, también se vuelve a ejecutar la petición.
  }, [fetchData]);

  return { data, isLoading, error };
};

export default useFetch;