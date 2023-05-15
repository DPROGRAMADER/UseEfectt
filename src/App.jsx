import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Comentarios from './components/Comentarios'
import Usuarios from './components/Usuarios'
import Tareas from './components/Tareas'
import Imagenes from './components/Imagenes'
import Albums from './components/Albums'
import Post from './components/Post'

const router = createBrowserRouter([
  {
    path: '/Comentarios',
    element: <Comentarios />,
  },
  {
    path: '/Usuarios',
    element: <Usuarios />,
  },
  {
    path: '/Tareas',
    element: <Tareas />,
  },
  {
    path: '/Imagenes',
    element: <Imagenes />,
  },
  {
    path: '/Albums',
    element: <Albums />,
  },
  {
    path: '/Post',
    element: <Post />,
  },

])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

