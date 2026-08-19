import { createBrowserRouter } from "react-router";
import Main from "./layout/Main";
import Home from "./pages/Home";
import ProductDetails from "./component/ProductDetails";
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
    ],
  },
]);

export default router;
