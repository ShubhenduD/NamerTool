import { Children, useState } from 'react'
import './App.css'
import { Home } from './components/Home/Home'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CustomContext from './contexts/CustomContext'

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> }
  ]);

  return (
    <CustomContext>
      <RouterProvider router={router} />
    </CustomContext>
  )
}

export default App
