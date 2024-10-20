import { RouterProvider } from "@tanstack/react-router";
import { appRouter } from "./router";
import "./global.css";

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
