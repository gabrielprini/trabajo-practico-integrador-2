// aca lo que hacemos es configurar vite.
// vite es la herramienta que se encarga de:
// levantar el proyecto durante el desarrollo (npm run dev)
// trabajar con React
// preparar el proyecto para producción (npm run build)
// aplicar plugins y configuraciones especiales

// aca importamos el plugin de react para vite, por ejemplo si tenemos una funcion y adentro
// hay componentes <h1>Hola</h1> y el plugin se encarga de procesar eso
import react from '@vitejs/plugin-react'
// defineConfig: Sirve para definir la configuración de Vite de una forma organizada.
import { defineConfig } from 'vite'
// y aca importamos el plugin de tailwind CSS para Vite. Que es el framework de css
import tailwindcss from '@tailwindcss/vite'

//
export default defineConfig({
  // Plugins que Vite debe utilizar.
  // Los dos se ejecutan con paréntesis porque son funciones que devuelven el plugin.
  plugins: [react(), tailwindcss()],
})