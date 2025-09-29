import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./Router/AppRouter.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("I_LOVE_CODING")!).render(
  <StrictMode>
    <Toaster position="top-right" reverseOrder={false} />
    <RouterProvider router={AppRouter} />
  </StrictMode>
);
