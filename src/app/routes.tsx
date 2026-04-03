import { createBrowserRouter } from "react-router";
import { Outlet } from "react-router";
import MainFlow from "./MainFlow";

function Root() {
  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: MainFlow },
    ],
  },
]);
