//react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Layout
import MainLayout from "../layout/MainLayout";

//pages
import { Home, About, Events, Teams, SingleEvent } from '../pages';


const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/teams",
          element: <Teams />,
        },
        {
          path: "/events",
          children: [
            {
              path: '/events',
              element: <Events />,
            },
            {
              path: '/events/:eventSlug',
              element: <SingleEvent />,
            }
          ]
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;