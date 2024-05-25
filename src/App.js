import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './features/home/Home'
import Blog from './features/home/Blog'
import Help from './features/home/Blog'
import NotFound from './ui/NotFound'
import RootLayOut from './ui/RootLayout'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: 'blog', element: <Blog /> },
        { path: 'help', element: <Help /> },
        { path: '*', element: <NotFound /> },

      ]

    },


  ])
  return <RouterProvider router={router} />
}

export default App
