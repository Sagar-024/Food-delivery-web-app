
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider , createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home.jsx'

const router = createBrowserRouter([
{
    path:'/',
    element:<App/>,
    children:[

        {
            index:true,
            element:<Home/>
        },{
            path:'/home',
            element:<Home/>
        }
      

    ]
}


])
createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router}/>
 
)
