import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./Router/AppRouter.tsx";
import { Toaster } from "react-hot-toast";
import "./i18n";

createRoot(document.getElementById("I_LOVE_CODING")!).render(
  <StrictMode>
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        success: {
          style: {
            background: "#10b981",
            color: "white",
            fontSize: "14px",
          },
        },
        error: {
          style: {
            background: "red",
            color: "white",
            fontSize: "14px",
          },
        },
      }}
    />
    <RouterProvider router={AppRouter} />
  </StrictMode>
);
