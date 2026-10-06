import useFetch from '../hooks/useFetch'

// Guardamos la dirección donde está funcionando nuestro backend.
const API_URL = 'http://localhost:3000'

const HomePage = () => {
    // aca lo que hacemos es hacer nuestra peticion al backend con nuestra url + pai/articles
    // al final de useFetch teníamos: return { data, isLoading, error }, entonces sacamos las tres cosas 
    // data => artículos recibidos, isLoading => ¿está cargando?, error => ¿hubo un error?
  const { data, isLoading, error } = useFetch(`${API_URL}/api/articles`)

  // Eso significa que terminamos la ejecución de HomePage en ese momento.
  if (isLoading) {
    return <p className="p-6 text-center text-gray-500">Cargando artículos...</p>
  }

  // mostramos el error 
  if (error) {
    return (
      <p className="m-6 rounded-lg bg-red-100 p-4 text-center text-red-700">
        {error}
      </p>
    )
  }

  // Acá tenemos dos condiciones. Si data no existe o ¿El array tiene 0 elementos?
  if (!data || data.length === 0) {
    return (
      <p className="p-6 text-center text-gray-500">
        No hay artículos publicados todavía.
      </p>
    )
  }

  // si llegamos aca es porque no hubo errores, termino de cargar y existen articulos 
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Artículos</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* data contiene los artículos.
            .map() recorre cada elemento*/}
        {data.map((article) => (
            // React necesita identificar cada elemento de una lista.
          <article
            key={article.id}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              {article.title}
            </h2>
            <p className="mt-2 text-gray-600">{article.excerpt}</p>
            <p className="mt-4 text-sm text-green-700">
              Por {article.author.username}
            </p>
          </article>
        ))}
      </div>
    </main>
  )
}

export default HomePage