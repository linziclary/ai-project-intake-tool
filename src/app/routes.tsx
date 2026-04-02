import { createBrowserRouter } from "react-router";
import { Outlet } from "react-router";
import MainFlow from "./MainFlow";
import AppShell from "../imports/MojoTechExecutiveDashboardMockup-25-2011";

function Root() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
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
