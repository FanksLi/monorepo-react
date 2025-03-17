import React from "react";
import store from "../store";
import { Provider } from "@fan/react-redux";
import { RouterProvider } from "react-router-dom";
import router from "../utils/router";

interface Props {}

export default function App(props: Props) {
  return (
    <Provider value={{ store }}>
      <RouterProvider router={router} />
    </Provider>
  );
}
