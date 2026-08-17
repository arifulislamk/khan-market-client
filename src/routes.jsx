import { createBrowserRouter } from "react-router";
import Main from "./layout/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default router ;