import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./components/cart/Checkout";
import Payment from "./components/cart/Payment";

import Home from "./components/Home/Home";
import RootLayout from "./components/Layout/RootLayout";
import Login from "./components/Login";
import Orders from "./components/Orders";
import { useAuth } from "./context/GlobalState";
import { auth } from "./firebase";

const stripePromise = loadStripe("pk_test_51MhdQRG0OJPT6HVx442cawgLUjkzXmuGPdh6STvzxHzbaMH8chXS39F13xMRAZFBQDxzZLGyIh1cbJJcOJIESltG00nMKGauJ3")
const router = createBrowserRouter([
  { path: "login", element: <Login /> },
  {
    path: "*",
    element: (
      <h1 style={{ textAlign: "center", padding: "100px" }}>Page Not Found</h1>
    ),
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "checkout", element: <Checkout />},
      { path: "payment", element: <Elements stripe={stripePromise}><Payment /></Elements>  },
      { path: "orders", element: <Orders /> },
    ],
  },
]);

function App() {
  const { dispatch } = useAuth();
 
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
