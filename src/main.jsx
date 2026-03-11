import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { RouterProvider } from "react-router";
import { AuthProvider } from "./Context/AuthorContext/AuthorContext";
import { router } from "./Routes";

//queryClient object create
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {/* ১. টোস্টার এখানে রাখলে পুরো অ্যাপে কাজ করবে */}
        <Toaster
          position="top-center" // এটিই নোটিফিকেশনকে মাঝখানে ওপরে রাখবে
          reverseOrder={false}
          toastOptions={{
            duration: 3000, // ৩ সেকেন্ড পর অটো চলে যাবে
            style: {
              background: "#333", // চাইলে ব্যাকগ্রাউন্ড কালার বদলাতে পারো
              color: "#fff",
            },
          }}
        />
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
