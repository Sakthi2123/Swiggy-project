import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import React from 'react'
import Body from "../Body/Body";
import Offers from '../Offers/Offers';
import Cart from '../Cart/Cart';
import Restaurantinfo from '../Resinfo/restaurantinfo';
export const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,

      children: [
        {
          path: "/",
          element: <Body />,
        
        },
        {
            path: "/Offers",
            element: <Offers />,
          
          },
          {
            path: "/Cart",
            element: <Cart />,
          
          },
          {
            path: "/restaurantinfo/:restaurantid",
            element: <Restaurantinfo/>,
          
          }
      ],
    },
  ]);