import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";

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
