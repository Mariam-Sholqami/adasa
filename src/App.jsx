
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Componant/Layout/Layout'
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import BlogDetails from './Pages/BlogDetails/BlogDetails';


function App() {
 const router = createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'/blog',element:<Blog/>},
    {path:'/about',element:<About/>},
    {path:'*',element:<NotFound/>},
    {path: "blog/:slug",element: <BlogDetails />,}
  ]
 }])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
