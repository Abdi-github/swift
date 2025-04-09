import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./utils/i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Suspense fallback="loading..."> */}
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <p className="text-3xl font-stretch-semi-expanded font-semibold">
            Loading...
          </p>
        </div>
      }
    >
      <App />
    </Suspense>
    {/* </Suspense> */}
  </StrictMode>
);
