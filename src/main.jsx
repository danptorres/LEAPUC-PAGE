import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Importar rotas
import Home from './routes/Home';
import WhoIsUs from './routes/WhoIsUs'
import OurTeams from './routes/OurTeams.jsx'
import Products from './routes/Products'
import Contact from './routes/Contact';
import Login from './routes/Login'
import Register from './routes/Register.jsx';

// Importar rotas dos produtos
import Product1 from './routes/products/routes-products/Product1.jsx';
import Product2 from './routes/products/routes-products/Product2.jsx';
import Product3 from './routes/products/routes-products/Product3.jsx';
import Product4 from './routes/products/routes-products/Product4.jsx';
import Product5 from './routes/products/routes-products/Product5.jsx';
import Product6 from './routes/products/routes-products/Product6.jsx';
import Product7 from './routes/products/routes-products/Product7.jsx';
import Product8 from './routes/products/routes-products/Product8.jsx';
import Product9 from './routes/products/routes-products/Product9.jsx';

import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/LEAPUC-page",      //Manter o nome do reposítorio do git para funcionar a page
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "who-is-us",
        element: <WhoIsUs/>
      },
      {
        path: "our-teams",
        element: <OurTeams/>
      },
      {
        path: "products",
        element: <Products/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "product1",
        element: <Product1/>
      },
      {
        path: "product2",
        element: <Product2/>
      },
      {
        path: "product3",
        element: <Product3/>
      },
      {
        path: "product4",
        element: <Product4/>
      },
      {
        path: "product5",
        element: <Product5/>
      },
      {
        path: "product6",
        element: <Product6/>
      },
      {
        path: "product7",
        element: <Product7/>
      },
      {
        path: "product8",
        element: <Product8/>
      },
      {
        path: "product9",
        element: <Product9/>
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)