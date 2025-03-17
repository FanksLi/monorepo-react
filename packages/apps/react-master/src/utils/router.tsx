import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";

const Home = lazy(() => import("../pages/Home"));
const StoreElement = lazy(() => import("../components/StoreElement"));

export default createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
    children: [
      {
        path: "store",
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <StoreElement />
          </Suspense>
        ),
      },
    ],
  },
]);
