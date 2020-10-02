import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

export const routes = [
  {
    orderId: 2,
    key: "About",
    component: About,
    path: "/about",
  },
  {
    orderId: 3,
    key: "Contact",
    component: Contact,
    path: "/contact",
  },
  {
    orderId: 1,
    key: "Home",
    component: Home,
    path: "/",
  },
];
