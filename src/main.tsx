import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Searched from './Components/Searched.tsx'
import Favourite from './Components/Favourite.tsx'
import RecipePage from './Components/RecipePage/RecipePage.tsx'


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
        path: 'favourite',
        element: <Favourite/>
      },{
        path: 'search/:strMeal',
        element: <Searched/>
      },
      {
        path: '/:idMeal',
        element: <RecipePage/>
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
