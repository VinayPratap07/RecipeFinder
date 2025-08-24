import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.tsx'
import Whishlist from './Components/Whishlist.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Meal from './Components/Meal.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path: 'whishlist',
        element: <Whishlist/>
      },
      {
        path: '/:idMeal',
        element: <Meal/>
      }
    ]
  }
])

const queryClient = new QueryClient();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client = {queryClient}>
      <RouterProvider router = {router}/>
    </QueryClientProvider>
  </StrictMode>,
)
