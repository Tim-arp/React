import './App.css'
import Navbar from './components/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Username from './components/Username'


function App() {

  const router = createBrowserRouter([
        {
          path: "/home",
          element: <><Navbar/> <Home/></>
        },
        {
          path : "/login",
          element : <> <Navbar/> <Login/></>
        },
        {
          path : "/about",
          element : <><Navbar/> <About/></>
        },
        {
          path : "/user/:username",
          element : <><Navbar/> <Username/></>
        },
    ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
