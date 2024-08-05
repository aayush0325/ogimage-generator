import React from 'react'
import ReactDOM from 'react-dom/client'

import LandingPage from './pages/landing'
import PostPage from './pages/post'

import './index.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },{
    path: "/post",
    element: <PostPage />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
