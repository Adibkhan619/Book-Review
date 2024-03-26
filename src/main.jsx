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
import ListedBook from './Components/ListedBook/ListedBook';
import Wishlist from './Components/Wishlist/Wishlist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
            element:<ListedBook></ListedBook>
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>
          }
        ]
      },
      {

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
