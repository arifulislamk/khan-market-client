import { createBrowserRouter } from "react-router";
import Main from "./layout/Main";
import Home from "./pages/Home";
import ProductDetails from "./component/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
        loader: ({params}) => fetch(`${import.meta.env.VITE_URL}/product/${params.productId}`)
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      }
    ],
  },
]);

export default router;
