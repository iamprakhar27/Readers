import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import PostListpage from './pages/PostListpage.jsx'
import Write from './pages/Write.jsx'
import Register from './pages/Register.jsx'
import Loginpage from './pages/Loginpage.jsx'
import SinglePostpage from './pages/SinglePostpage.jsx'
import MainLayout from './layouts/MinLayout.jsx'


const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/posts',
        element: <PostListpage />
      },
      {
        path: '/:slug',
        element: <SinglePostpage />
      },
      {
        path: '/write',
        element: <Write />
      },
      {
        path: '/login',
        element: <Loginpage />
      },
      {
        path: '/register',
        element: <Register />
      }]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
