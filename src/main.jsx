import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import BookDetails from './Components/BookDetails/BookDetails';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wishlist from './Components/Wishlist/Wishlist';
import ReadBook from './Components/ReadBook/ReadBook';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>

      },
      {
        path: "/book/:id",
        element:<BookDetails></BookDetails>,
        loader: ()=> fetch('/public/BookData.json')
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/public/BookData.json'),
        children:[
          {
            path:"readBook",
            index: true,
            element:<ReadBook></ReadBook>,
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>
          }
        ]
      },
      {
        path:"/pagesToRead",
        element:<PagesToRead></PagesToRead>
      }
    ]
  }, 
]);

<ToastContainer/>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
