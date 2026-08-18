import { createBrowserRouter } from "react-router";
import Main from "./layout/Main";
import Home from "./pages/Home";
import Product from "./component/Product";
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
        element: <Product />,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.productId}`)
      },
    ],
  },
]);

export default router;
