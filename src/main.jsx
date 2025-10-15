import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from "./App"
import Home from "./pages/Home"
import Details from "./pages/Details"
import SearchResult from "./pages/SearchResult"
import FilmsTrailer from './pages/FilmsTrailer'
import FilmIndividual from "./pages/FilmIndividual"

import {createBrowserRouter, RouterProvider} from "react-router-dom"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "details/:id",
                element: <Details/>
            },
            {
                path: "search",
                element: <SearchResult/>
            },
            {
                path: "films/:id",
                element: <FilmsTrailer/>
            },
            {
                path: "video/:key",
                element: <FilmIndividual/>
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
