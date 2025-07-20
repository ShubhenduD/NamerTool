import { ArchAndNaming } from './components/ArchAndNaming/ArchAndNaming'
import Home from './components/Home/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CustomContext from './contexts/CustomContext'
import { Navbar } from './components/Navbar/Navbar'
function App() {

  const router = createBrowserRouter([
    { 
      path: "/", 
      element: <Navbar />,
      children: [
        {index: true, element: <Home />},
        {path: "ArchAndNaming", element: <ArchAndNaming />}
      ],
    }
  ]
);

  return (
    <CustomContext>
      <RouterProvider router={router}/>
    </CustomContext>
  )
}

export default App
