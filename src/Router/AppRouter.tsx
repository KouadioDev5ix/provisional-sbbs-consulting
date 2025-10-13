import { createHashRouter } from "react-router-dom";
import AppLayout from "../Layout/AppLayout";
import Home from "../Pages/Home/Home";
import Offers from "../Pages/Offers/Offers";
import Methodologie from "../Pages/Methodologie/Methodologie";
import Certification from "../Pages/Certification/Certification";
import Community from "../Pages/Community/Community";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import BlogDetail from "../Pages/BlogDetail/BlogDetail";

export const AppRouter = createHashRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <Home />
      </AppLayout>
    ),
  },
  {
    path: "/nos-offres",
    element: (
      <AppLayout>
        <Offers />
      </AppLayout>
    ),
  },
  {
    path: "/methodologies",
    element: (
      <AppLayout>
        <Methodologie />
      </AppLayout>
    ),
  },
  {
    path: "/methodologies/certifications",
    element: (
      <AppLayout>
        <Certification />
      </AppLayout>
    ),
  },
  {
    path: "/certifications",
    element: (
      <AppLayout>
        <Certification />
      </AppLayout>
    ),
  },
  {
    path: "/communaute",
    element: (
      <AppLayout>
        <Community />
      </AppLayout>
    ),
  },
  {
    path: "/contact",
    element: (
      <AppLayout>
        <Contact />
      </AppLayout>
    ),
  },
  {
    path: "/a-propos-de-nous",
    element: (
      <AppLayout>
        <AboutUs />
      </AppLayout>
    ),
  },
  {
    path: "/blog",
    element: (
      <AppLayout>
        <Blog />
      </AppLayout>
    ),
  },
  {
    path: "blog/:id",
    element: (
      <AppLayout>
        <BlogDetail />
      </AppLayout>
    ),
  },
]);
