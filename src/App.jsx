import { Children, useState } from 'react'
import './App.css'
import { Home } from './components/Home/Home'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CustomContext from './contexts/CustomContext'

function App() {

  // const router = createBrowserRouter([
  //   { path: "/NamerTool/", element: <Home /> }
  // ]);

  return (
    <CustomContext>
      <Home />
    </CustomContext>
  )
}

export default App
