import Home from "../Pages/Home";
import Products from "../Pages/Products";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: Products,
  },
];

export default publicRoutes;
