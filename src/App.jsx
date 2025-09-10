import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Layout from './pages/Layout.jsx'
import Favorite from './pages/Favorite/Favorite.jsx'
import Compare from './pages/Compare/Compare.jsx'
import Maps from './pages/Maps/Maps.jsx'
import Home from './pages/Home/Home.jsx'
import SearchPage from './pages/Flight/SearchPage.jsx'
import ChooseSeat from './pages/Flight/ChooseSeat.jsx'
import TicketsPage from './pages/Flight/TicketsPage.jsx'
import BardindPass from './pages/Flight/BardindPass.jsx'

function App() {

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout /> ,
    children:[
  {
    index:true, 
    element:<Home/>
  }, 
    {
      path:'home', 
      element:<Home/>
    },
      {
      path:'favorite', 
      element:<Favorite/>
    },
      {
      path:'compare', 
      element:<Compare/>
    },
      {
      path:'maps', 
      element:<Maps/>
    },
    {
      path:'flight',
      element:<SearchPage/>
    },
    {
      path:'seat',
      element:<ChooseSeat/>
    },
    {
      path:'tickets',
      element :<TicketsPage/>
    },
    {
      path:"bardind",
      element:<BardindPass/>
    }

  ]},
])
   return (
    <>
    <RouterProvider router={router} /> 
      </>
  )
}

export default App