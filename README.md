# Trabajo Práctico Integrador N° II

Frontend del Sistema de Gestión de Blog Personal con Autenticación, desarrollado con React, Vite y Tailwind CSS. Consume el backend del Trabajo Práctico Integrador N° I.

## Tecnologías

- React (JavaScript) con Vite
- React Router
- Tailwind CSS

## Backend utilizado

Repositorio del Trabajo Práctico Integrador N° I:
https://github.com/gabrielprini/trabajo-practico-integrador-1

## Cómo levantar el proyecto

### 1. Backend

1. Clonar el repositorio del backend e instalar dependencias con `npm install`.
2. Crear el archivo `.env` a partir de `.env.example` y completar los datos de la base de datos y el `JWT_SECRET`.
3. Tener MySQL en ejecución con la base de datos creada.
4. Configurar CORS para aceptar el origen del frontend con credenciales:

```js
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
```

5. Levantar el servidor (por defecto en `http://localhost:3000`).

### 2. Frontend

```bash
git clone https://github.com/gabrielprini/trabajo-practico-integrador-2.git
cd trabajo-practico-integrador-2
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`.

## Rutas

- `/login` y `/register`: rutas públicas.
- `/`: página principal con el listado de artículos (ruta privada).
funcionalidades-carpetas:
components: Acá ponés partes de la interfaz que podés reutilizar en diferentes páginas. Por ejemplo el 
navbar, footer, button, card 
pages: Acá ponés las pantallas principales de tu aplicación. Por ejemplo: home, login, register, profile
router: Si el usuario entra a esta URL, ¿qué página tengo que mostrar?
hooks: Los hooks sirven para guardar lógica que querés reutilizar entre componentes o páginas.